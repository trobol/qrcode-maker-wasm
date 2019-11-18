#include "qrcode.h"
export void create_qrcode(char input[25])
{
	unsigned char encoded[25];
	for (int i = 0; i < 25; i++)
	{
		encoded[i] = encodeChar(input[i]);
	}
}

unsigned char encodeChar(char c)
{
	switch (c)
	{
	case 48:
		return 0;
	case 49:
		return 1;
	case 50:
		return 2;
	case 51:
		return 3;
	case 52:
		return 4;
	case 53:
		return 5;
	case 54:
		return 6;
	case 55:
		return 7;
	case 56:
		return 8;
	case 57:
		return 9;
	case 65: //A
	case 66: //B
	case 67: //C
	case 68: //D
	case 69: //E
	case 70: //F
	case 71: //G
	case 72: //H
	case 73: //I
	case 74: //J
	case 75: //K
	case 76: //L
	case 77: //M
	case 78: //N
	case 79: //O
	case 80: //P
	case 81: //Q
	case 82: //R
	case 83: //S
	case 84: //T
	case 85: //U
	case 86: //V
	case 87: //W
	case 88: //X
	case 89: //Y
	case 90: //Z
		return c - 55;
	case 32: // (space)
		return 36;
	case 36: // $
		return 37;
	case 37: // %
		return 38;
	case 42: // *
		return 39;
	case 43: // +
		return 40;
	case 45: // -
		return 41;
	case 46: // .
		return 42;
	case 47: // /
		return 43;
	case 58: // :
		return 44;
	default:
		return 255;
	}
}

/*
0 0
1 1
2 2
3 3
4 4
5 5
6 6
7 7
8 8
9 9
A 10
B 11
C 12
D 13
E 14
F 15
G 16
H 17
I 18
J 19
K 20
L 21
M 22
N 23
O 24
P 25
Q 26
R 27
S 28
T 29
U 30
V 31
W 32
X 33
Y 34
Z 35
  36 (space)
$ 37
% 38
* 39
+ 40
- 41
. 42
/ 43
: 44

*/