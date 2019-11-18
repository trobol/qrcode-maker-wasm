const wasm = require('./wasm');

const memory = new WebAssembly.Memory({ initial: 10 });

const instance = wasm('crc.wasm', { memory });

const heapBase = instance.exports.__heap_base;



function crc(input) {
	const buffer = new Uint8Array(memory.buffer, heapBase, input.length);
	buffer.set(input);

	const result = instance.exports.crc(input.length) >>> 0;
	console.log(result);
	return result;
}

module.exports = crc;