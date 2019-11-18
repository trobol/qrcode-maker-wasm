#include "Memory.h"
#include "wasm.h"
#include "qrcode.h"

unsigned int Memory_head = (unsigned int)(&__heap_base);
unsigned int Memory_max = 0;

void *Memory_allocate(unsigned int size)
{
	unsigned int ptr = Memory_head;
	Memory_head += size;

	return (void *)ptr;
}

void Memory_clear()
{

	Memory_head = (unsigned int)(&__heap_base);
}

void Memory_delete(unsigned int size)
{
	Memory_head -= size;
}

void Memory_size(unsigned int i)
{
	if (Memory_max < i)
	{
		memory_grow((Memory_max - i) / PAGE_SIZE);
	}
}