const crc = require('./crc');
function BinaryBuffer(size = 0) {
	this.index = 0;
	this.bitIndex = 0;
	this.buffer = new Array(size);
}

BinaryBuffer.prototype.write = function (a) {
	if (a instanceof Array || a instanceof Uint8Array) {
		for (let e of a) {
			this.buffer[this.index++] = e;
		}
	} else {
		this.buffer[this.index++] = a;
	}
}
BinaryBuffer.prototype.writeInt32 = function (num) {
	const unsignedBuffer = new Uint8Array([
		(num & 0xff000000) >> 24,
		(num & 0x00ff0000) >> 16,
		(num & 0x0000ff00) >> 8,
		(num & 0x000000ff)
	])
	this.write(unsignedBuffer);
}
BinaryBuffer.prototype.writeInt16LE = function (num) {
	const unsignedBuffer = new Uint8Array([
		(num & 0x000000ff),
		(num & 0x0000ff00) >> 8,
	])
	this.write(unsignedBuffer);
}
BinaryBuffer.prototype.writeString = function (string) {
	for (let i in string) {
		this.write(string.charCodeAt(i));
	}
}
BinaryBuffer.prototype.appendCRC = function (size) {
	const resultcrc = crc(this.buffer.slice(this.buffer.length - (size + 4)));
	this.writeInt32(resultcrc);
}
BinaryBuffer.prototype.writeBits = function (bits) {

	for (let bit of bits)
		this.writeBit(bit);
}
BinaryBuffer.prototype.writeBit = function (bit) {

	if (bit > 1 || bit < 0) throw "must be binary was " + bit;
	if (this.bitIndex == 0)
		this.buffer[this.index] = 0;

	this.buffer[this.index] = (this.buffer[this.index] << 1) | bit;
	this.bitIndex++;
	if (this.bitIndex == 8) {
		this.index++;
		this.bitIndex = 0;
	}
}
//pad the end of any current byte
BinaryBuffer.prototype.clearByte = function () {
	if (this.bitIndex == 0) return;
	this.buffer[this.index] = this.buffer[this.index] << (8 - this.bitIndex);
	this.index++;
	this.bitIndex = 0;
}

BinaryBuffer.prototype.read = function (i) {
	return this.buffer[i];
}

BinaryBuffer.prototype.length = function (i) {
	return this.buffer.length;
}

BinaryBuffer.prototype.toBuffer = function () {
	return Buffer.from(this.buffer);
}


module.exports = BinaryBuffer