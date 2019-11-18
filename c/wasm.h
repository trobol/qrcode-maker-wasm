#ifndef WASM_H
#define WASM_H

#define PAGE_SIZE 65536

#define memory_size __builtin_wasm_memory_size(0)
#define memory_grow(v) __builtin_wasm_memory_grow(0, v)

#ifndef __GNUC__
#define __attribute__(x)
#endif
#ifdef __cplusplus
#define export __attribute__((visibility("default"))) extern "C"
#else
#define export __attribute__((visibility("default")))
#endif

#define import extern

//sizes for wasm32

#define SIZEOF_INT 4
#define SIZEOF_CHAR 1
#define SIZEOF_PTR 4
#define SIZEOF_FLOAT 4
#define SIZEOF_BOOL SIZEOF_CHAR

typedef char bool;
#define true 1
#define false 0

#define NaN 0x400000

import unsigned char __data_end;
import unsigned char __heap_base;

#endif
