@echo off
clang -include ./c/wasm.h --target=wasm32-unknown-unknown -Oz -flto  -nostdlib^
 -Wl,--strip-all -Wl,--export=__heap_base -Wl,--no-gc-sections -Wl,--import-memory -Wl,--no-entry -Wl,--export-dynamic -Wl,--lto-O0 -o crc.wasm^
 c/crc.c

