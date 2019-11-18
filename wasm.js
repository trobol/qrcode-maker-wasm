const util = require('util');
const fs = require('fs');


const modules = {};

module.exports = (path, env) => {
	var source = fs.readFileSync(path);
	/*
	const env = {
		memory: new WebAssembly.Memory({
			initial: 256
		})
	}
	*/

	var bufferSource = new Uint8Array(source);
	let wasmModule = modules[path];
	if (!wasmModule) {
		wasmModule = new WebAssembly.Module(bufferSource);
		modules[path] = wasmModule;
	}

	return new WebAssembly.Instance(wasmModule, {
		env: env
	});
}