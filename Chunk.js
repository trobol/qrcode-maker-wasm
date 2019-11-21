const BinaryBuffer = require('./BinaryBuffer');

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

/*
111 - 7
010 - 2
000 - 0
1101 - 13
1011 - 11
1010 - 10
1000 - 8
0111 - 7
0010 - 2

0110
11001

*/
function encode(chars, str, node) {
	if(node[0] instanceof Array)
		encode(chars, str+'0', node[0]);
	else
		chars.push({char:node[0], str:str +'0'});
	if(node[1] instanceof Array)
		encode(chars, str+'1', node[1]);
	else
		chars.push({char:node[1], str:str +'1'});
}
function calcChars(node) {
	const chars = [];
	encode(chars, '', node);
	return chars;
}

function createTree(keys) {

	const nodes = Object.entries(keys).map(v => ({v:v[0], o:v[1]}));
	while(nodes.length > 1) {
		nodes.sort((a, b) => b[1] - a[1]);
		let a = nodes.pop();
		let b = nodes.pop();
		nodes.push([a, b]);
	}
	return nodes[0];
}

IDAT.prototype.compress = function() {
	const buffer = new BinaryBuffer();
	for (let line of this.scanlines) {
		buffer.writeBits(line);
		buffer.clearByte();
	}
	const keys = {};
	for(let b of buffer.buffer) {
		if(keys[b]) {
			keys[b] ++;
		} else {
			keys[b] = 1;
		}
	}
	const keyEntries = Object.entries(keys);
	keyEntries.sort((a, b) =>  b[1] - a[1]);
	console.log('Buffer Length', buffer.length());
	console.log('Buffer', buffer.buffer);
	console.log('Keys Entries', keyEntries, keyEntries.length);
	console.log('Tree', calcChars(createTree(keys)));
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