const start = [
	0x89, 0x50, 0x4e, 0x47,
	0x0d, 0x0a, 0x1a, 0x0a,
	0x00, 0x00, 0x00, 0x0d,
	0x49, 0x48, 0x44, 0x52,
	0x00, 0x00, 0x00, 0x15,
	0x00, 0x00, 0x00, 0x15,
	0x01, 0x03, 0x00, 0x00,
	0x00, 0x93, 0xd9, 0x37,
	0xd5, 0x00, 0x00, 0x00,
	0x06, 0x50, 0x4c, 0x54,
	0x45, 0x00, 0x00, 0x00,
	0xff, 0xff, 0xff, 0xa5,
	0xd9, 0x9f, 0xdd, 0x00,
	0x00, 0x00, 0x5f, 0x49,
	0x44, 0x41, 0x54, 0x08,
	0x1d, 0x01, 0x54, 0x00,
	0xab, 0xff
];
const end = [
	0x00, 0x00, 0x00, 0x00,
	0x49, 0x45, 0x4E, 0x44,
	0xAE, 042, 0x60, 0x82
];
const buffer = Buffer.alloc(191);

//temp
const pixels = [
	0x00, 0x00, 0x00, 0x00,
	0x00, 0x7c, 0x01, 0xf0,
	0x00, 0x44, 0x01, 0x10,
	0x00, 0x44, 0x01, 0x10,
	0x00, 0x44, 0x01, 0x10,
	0x00, 0x7c, 0x01, 0xf0,
	0x00, 0x00, 0x00, 0x00,
	0x00, 0x00, 0x00, 0x00,
	0x00, 0x00, 0x00, 0x00,
	0x00, 0x00, 0x00, 0x00,
	0x00, 0x00, 0x00, 0x00,
	0x00, 0x00, 0x00, 0x00,
	0x00, 0x00, 0x00, 0x00,
	0x00, 0x00, 0x00, 0x00,
	0x00, 0x00, 0x00, 0x00,
	0x00, 0x7c, 0x00, 0x00,
	0x00, 0x44, 0x00, 0x00,
	0x00, 0x44, 0x00, 0x00,
	0x00, 0x44, 0x00, 0x00,
	0x00, 0x7c, 0x00, 0x00,
	0x00, 0x00, 0x00, 0x00,
	0x27, 0xe9, 0x05, 0x9e,
	0x5a, 0x69, 0xf8, 0xd1
];


writeArrayToBuffer(start, 0);

/* 
	write pixel data
*/
writeArrayToBuffer(pixels, 66)

writeArrayToBuffer(end, 158)

function writeArrayToBuffer(a, offset) {
	for (let i = 0; i < a.length; i++) {
		buffer.writeUInt8(a[i], offset + i);
	}
}



var http = require('http');

//create a server object:
http.createServer(function (req, res) {
	res.setHeader("Content-Type", 'image/png');
	res.write(buffer, 'binary'); //write a response to the client
	res.end(null, 'binary'); //end the response
}).listen(8080); //the server object listens on port 8080

const fs = require('fs');

fs.writeFile("output.png", buffer, { encoding: 'binary' }, function (err) {

	if (err) {
		return console.log(err);
	}

	console.log("The file was saved!");
});