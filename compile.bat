@echo off
clang -g -include ./c/wasm.h --target=wasm32 -O0 -flto -fno-builtin -nostdlib^
 -Wl,--export=__heap_base -Wl,--no-gc-sections -Wl,--import-memory -Wl,--no-entry -Wl,--export-dynamic -Wl,--lto-O0 -Wl,--allow-undefined-file=qrcode.syms -o qrcode.wasm^
 c/FinderPattern.c^

