

function toBuffer(buffer) {
	buffer.writeInt32(this.size);
	buffer.writeString(this.type);
	this.bufferData(buffer);
	buffer.appendCRC(this.size);
	console.log('size', this.size);
	return buffer;
}




function IHDR(width, height, bitDepth, colorType) {
	this.type = 'IHDR';
	this.width = width;
	this.height = height;
	this.bitDepth = bitDepth;
	this.colorType = colorType;
	this.size = 13;
}

IHDR.prototype.toBuffer = toBuffer;

IHDR.prototype.bufferData = function (buffer) {
	buffer.writeInt32(this.width);
	buffer.writeInt32(this.height);
	buffer.write([
		this.bitDepth, //bit depth
		this.colorType, //color type (3)
		0x00, //compression method
		0x00, //filter method
		0x00, //interlace method
	]);
}


//[r, g, b, r2, g2, b2]
function PLTE(colors) {
	this.type = 'PLTE';
	this.colors = colors;
	this.size = colors.length;
}

PLTE.prototype.toBuffer = toBuffer;

PLTE.prototype.bufferData = function (buffer) {
	for (let color of this.colors) {
		buffer.write(color);
	}
}

function IDAT(scanlines) {
	this.type = 'IDAT';
	this.size = 0;
	this.scanlines = scanlines;
	this.blocks = Math.ceil(scanlines[0].length / 8) * scanlines.length;
	let count = scanlines[0].length;
	for (let line of this.scanlines)
		if (line.length != count)
			throw "all scan lines must have equal length";
}


//assuming no compression
IDAT.prototype.toBuffer = function (buffer) {
	this.size =
		1 //zlib compression method && flag code
		+ 1 //other flags
		+ 1 //DEFLATE flags
		+ 2 //DEFLATE length
		+ 2 //inverse of DEFLATE length
		+ this.blocks
		+ 4; //zlib ADLER32
	toBuffer.call(this, buffer);
}

IDAT.prototype.bufferData = function (buffer) {
	buffer.writeBits([
		0, 0, 0, 0, //base 2 log of LZ77 window
		1, 0, 0, 0, //zlib compression method (DEFLATE) (8)

		0, 0, //FLEVEL (compression level)
		0, //FDICT (present dictionary)
		1, 1, 1, 0, 1, //FCHECK  (check bits for CMF and FLG)
		/*
		The FCHECK value must be such that CMF and FLG, when viewed as
		a 16-bit unsigned integer stored in MSB order (CMF*256 + FLG),
		is a multiple of 31.
		*/
		0, 0, 0, 0, 0,
		0, 0,//DEFLATE BTYPE no compression
		1, //DEFLATE BFINAL 1 if final block
	]);
	buffer.clearByte(); //ignore the rest of the byte

	const pixelBytes = this.blocks

	console.log(pixelBytes);
	buffer.writeInt16LE(pixelBytes);

	buffer.write(buffer.read(buffer.length() - 2) ^ 0xff);
	buffer.write(buffer.read(buffer.length() - 2) ^ 0xff);
	const start = buffer.length();
	for (let line of this.scanlines) {
		buffer.writeBits(line);
		buffer.clearByte();
	}
	let a = 1;
	let b = 0;
	console.log(start);
	for (let i = 0; i < pixelBytes; i++) {
		a += buffer.read(start + i);
		b += a;
	}
	a = a % 65521;
	b = b % 65521;
	buffer.writeInt32(b * 65536 + a);
	console.log('buffer length', buffer.length())
};


function IEND() {
	this.type = 'IEND';
	this.size = 0;
}

IEND.prototype.toBuffer = toBuffer;

IEND.prototype.bufferData = function (buffer) { };


module.exports = { IDAT, IEND, IHDR, PLTE };