var gf = {
	"exp":
		[1, 2, 4, 8, 16, 32, 64, 128, 29, 58, 116, 232, 205, 135, 19, 38, 76, 152, 45, 90, 180, 117, 234, 201, 143, 3, 6, 12, 24, 48, 96, 192, 157, 39, 78, 156, 37, 74, 148, 53, 106, 212, 181, 119, 238, 193, 159, 35, 70, 140, 5, 10, 20, 40, 80, 160, 93, 186, 105, 210, 185, 111, 222, 161, 95, 190, 97, 194, 153, 47, 94, 188, 101, 202, 137, 15, 30, 60, 120, 240, 253, 231, 211, 187, 107, 214, 177, 127, 254, 225, 223, 163, 91, 182, 113, 226, 217, 175, 67, 134, 17, 34, 68, 136, 13, 26, 52, 104, 208, 189, 103, 206, 129, 31, 62, 124, 248, 237, 199, 147, 59, 118, 236, 197, 151, 51, 102, 204, 133, 23, 46, 92, 184, 109, 218, 169, 79, 158, 33, 66, 132, 21, 42, 84, 168, 77, 154, 41, 82, 164, 85, 170, 73, 146, 57, 114, 228, 213, 183, 115, 230, 209, 191, 99, 198, 145, 63, 126, 252, 229, 215, 179, 123, 246, 241, 255, 227, 219, 171, 75, 150, 49, 98, 196, 149, 55, 110, 220, 165, 87, 174, 65, 130, 25, 50, 100, 200, 141, 7, 14, 28, 56, 112, 224, 221, 167, 83, 166, 81, 162, 89, 178, 121, 242, 249, 239, 195, 155, 43, 86, 172, 69, 138, 9, 18, 36, 72, 144, 61, 122, 244, 245, 247, 243, 251, 235, 203, 139, 11, 22, 44, 88, 176, 125, 250, 233, 207, 131, 27, 54, 108, 216, 173, 71, 142, 1, 2, 4, 8, 16, 32, 64, 128, 29, 58, 116, 232, 205, 135, 19, 38, 76, 152, 45, 90, 180, 117, 234, 201, 143, 3, 6, 12, 24, 48, 96, 192, 157, 39, 78, 156, 37, 74, 148, 53, 106, 212, 181, 119, 238, 193, 159, 35, 70, 140, 5, 10, 20, 40, 80, 160, 93, 186, 105, 210, 185, 111, 222, 161, 95, 190, 97, 194, 153, 47, 94, 188, 101, 202, 137, 15, 30, 60, 120, 240, 253, 231, 211, 187, 107, 214, 177, 127, 254, 225, 223, 163, 91, 182, 113, 226, 217, 175, 67, 134, 17, 34, 68, 136, 13, 26, 52, 104, 208, 189, 103, 206, 129, 31, 62, 124, 248, 237, 199, 147, 59, 118, 236, 197, 151, 51, 102, 204, 133, 23, 46, 92, 184, 109, 218, 169, 79, 158, 33, 66, 132, 21, 42, 84, 168, 77, 154, 41, 82, 164, 85, 170, 73, 146, 57, 114, 228, 213, 183, 115, 230, 209, 191, 99, 198, 145, 63, 126, 252, 229, 215, 179, 123, 246, 241, 255, 227, 219, 171, 75, 150, 49, 98, 196, 149, 55, 110, 220, 165, 87, 174, 65, 130, 25, 50, 100, 200, 141, 7, 14, 28, 56, 112, 224, 221, 167, 83, 166, 81, 162, 89, 178, 121, 242, 249, 239, 195, 155, 43, 86, 172, 69, 138, 9, 18, 36, 72, 144, 61, 122, 244, 245, 247, 243, 251, 235, 203, 139, 11, 22, 44, 88, 176, 125, 250, 233, 207, 131, 27, 54, 108, 216, 173, 71, 142, 1, 2],
	"log":
		[0, 0, 1, 25, 2, 50, 26, 198, 3, 223, 51, 238, 27, 104, 199, 75, 4, 100, 224, 14, 52, 141, 239, 129, 28, 193, 105, 248, 200, 8, 76, 113, 5, 138, 101, 47, 225, 36, 15, 33, 53, 147, 142, 218, 240, 18, 130, 69, 29, 181, 194, 125, 106, 39, 249, 185, 201, 154, 9, 120, 77, 228, 114, 166, 6, 191, 139, 98, 102, 221, 48, 253, 226, 152, 37, 179, 16, 145, 34, 136, 54, 208, 148, 206, 143, 150, 219, 189, 241, 210, 19, 92, 131, 56, 70, 64, 30, 66, 182, 163, 195, 72, 126, 110, 107, 58, 40, 84, 250, 133, 186, 61, 202, 94, 155, 159, 10, 21, 121, 43, 78, 212, 229, 172, 115, 243, 167, 87, 7, 112, 192, 247, 140, 128, 99, 13, 103, 74, 222, 237, 49, 197, 254, 24, 227, 165, 153, 119, 38, 184, 180, 124, 17, 68, 146, 217, 35, 32, 137, 46, 55, 63, 209, 91, 149, 188, 207, 205, 144, 135, 151, 178, 220, 252, 190, 97, 242, 86, 211, 171, 20, 42, 93, 158, 132, 60, 57, 83, 71, 109, 65, 162, 31, 45, 67, 216, 183, 123, 164, 118, 196, 23, 73, 236, 127, 12, 111, 246, 108, 161, 59, 82, 41, 157, 85, 170, 251, 96, 134, 177, 187, 204, 62, 90, 203, 89, 95, 176, 156, 169, 160, 81, 11, 245, 22, 235, 122, 117, 44, 215, 79, 174, 213, 233, 230, 231, 173, 232, 116, 214, 244, 234, 168, 80, 88, 175]
}
function compile(input) {
	[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
	data = input;
	var charCodes = {
		'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
		'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15, 'G': 16, 'H': 17, 'I': 18, 'J': 19, 'K': 20, 'L': 21, 'M': 22, 'N': 23, 'O': 24, 'P': 25, 'Q': 26, 'R': 27, 'S': 28, 'T': 29, 'U': 30, 'V': 31, 'W': 32, 'X': 33, 'Y': 34, 'Z': 35,
		' ': 36, '$': 37, '%': 38, '*': 39, '+': 40, '-': 41, '.': 42, '/': 43, ':': 44
	}
	var string = data.toUpperCase();
	var chars = [],
		data = "0010"; //mode indicator
	data += "000011001";//char count
	for (var i = 0; i < string.length; i += 2) {
		var biNum;
		if (string[i + 1]) {
			chars.push((charCodes[string[i]] * 45) + charCodes[string[i + 1]]);
			biNum = ((charCodes[string[i]] * 45) + charCodes[string[i + 1]]).toString(2);
			if (biNum.length < 11) {
				for (var x = 0; 11 - biNum.length > 0; x++) {
					biNum = "0" + biNum;
				}
			}
		} else {
			chars.push(charCodes[string[i]]);
			biNum = (charCodes[string[i]]).toString(2);
			if (biNum.length < 6) {
				for (var x = 0; 6 - biNum.length > 0; x++) {
					biNum = "0" + biNum;
				}
			}
		}


		data += biNum;
	}
	data += "0"; //terminator
	data = encodeMsg(data, 7);

	var n = undefined;
	var RawPattern = [
		[1, 1, 1, 1, 1, 1, 1, 0, 0, n, n, n, n, 0, 1, 1, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 1, 0, 0, n, n, n, n, 0, 1, 0, 0, 0, 0, 0, 1],
		[1, 0, 1, 1, 1, 0, 1, 0, 0, n, n, n, n, 0, 1, 0, 1, 1, 1, 0, 1],
		[1, 0, 1, 1, 1, 0, 1, 0, 0, n, n, n, n, 0, 1, 0, 1, 1, 1, 0, 1],
		[1, 0, 1, 1, 1, 0, 1, 0, 0, n, n, n, n, 0, 1, 0, 1, 1, 1, 0, 1],
		[1, 0, 0, 0, 0, 0, 1, 0, 0, n, n, n, n, 0, 1, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, n, n, n, n, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 1, 0, 0, n, n, n, n, 0, 0, 0, 0, 0, 0, 0, 0],
		[n, n, n, n, n, n, 0, n, n, n, n, n, n, n, n, n, n, n, n, n, n],
		[n, n, n, n, n, n, 1, n, n, n, n, n, n, n, n, n, n, n, n, n, n],
		[n, n, n, n, n, n, 0, n, n, n, n, n, n, n, n, n, n, n, n, n, n],
		[n, n, n, n, n, n, 1, n, n, n, n, n, n, n, n, n, n, n, n, n, n],
		[0, 0, 0, 0, 0, 0, 0, 0, 1, n, n, n, n, n, n, n, n, n, n, n, n],
		[1, 1, 1, 1, 1, 1, 1, 0, 0, n, n, n, n, n, n, n, n, n, n, n, n],
		[1, 0, 0, 0, 0, 0, 1, 0, 0, n, n, n, n, n, n, n, n, n, n, n, n],
		[1, 0, 1, 1, 1, 0, 1, 0, 0, n, n, n, n, n, n, n, n, n, n, n, n],
		[1, 0, 1, 1, 1, 0, 1, 0, 0, n, n, n, n, n, n, n, n, n, n, n, n],
		[1, 0, 1, 1, 1, 0, 1, 0, 0, n, n, n, n, n, n, n, n, n, n, n, n],
		[1, 0, 0, 0, 0, 0, 1, 0, 0, n, n, n, n, n, n, n, n, n, n, n, n],
		[1, 1, 1, 1, 1, 1, 1, 0, 0, n, n, n, n, n, n, n, n, n, n, n, n]
	],
		index = 0,
		up = 1,
		pattern = RawPattern.map(function (x) { return x.map(function (i) { return i }) });
	for (var x = 20; x > 0; x -= 2) {
		for (var y = up == 1 ? 20 : 0; y >= 0 && y <= 20; y -= up) {

			if (RawPattern[y][x] == undefined) {

				pattern[y][x] = Number(data[index]);
				index++;
			}
			if (RawPattern[y][x - 1] == undefined) {
				pattern[y][x - 1] = Number(data[index]);
				index++;
			}

		}
		if (x == 8) x -= 1;
		up = up * -1;
	}

	var masks = [
		function (x, y, num) {
			return num ^ (((x + y) % 2) == 0);
		},
		function (x, y, num) {
			return num ^ (((x) % 2) == 0);
		},
		function (x, y, num) {
			return num ^ (((y) % 3) == 0);
		},
		function (x, y, num) {
			return num ^ (((x + y) % 3) == 0);
		},
		function (x, y, num) {
			return num ^ (((Math.floor(x / 2) + Math.floor(y / 3)) % 2) == 0);
		},
		function (x, y, num) {
			return num ^ (((x * y) % 2) + ((x * y) % 3) == 0);
		},
		function (x, y, num) {
			return num ^ (((((x * y) % 2) + ((x * y) % 3)) % 2) == 0);
		},
		function (x, y, num) {
			return num ^ (((((x + y) % 2) + ((x * y) % 3)) % 2) == 0);
		}
	];
	var maskIndex = 0;
	function pickMask() {
		var bestPat, bestScore = 5000, maskIndex = 0;
		for (var m = 0; m < masks.length; m++) {
			var pat = maskData(masks[m]), score = 0, dark = 0, light = 0;
			//horizontal search
			for (var y = 0; y < 21; y++) {
				var lastChar = 0, charCount = 0, q = false;
				for (var x = 0; x < 21; x++) {
					if (x != 0 && pat[y][x - 1] == pat[y][x - 1]) {
						charCount++;
						if (charCount == 5) {
							score += 3;
						} else if (charCount > 5) {
							score += 1;
						}
					}

					if (x < 20 && y < 20 && pat[y][x] == pat[y][x + 1] && pat[y][x] == pat[y + 1][x] && pat[y][x] == pat[y + 1][x + 1]) {
						score += 3;
					}

					var nPattern = [1, 0, 1, 1, 1, 0, 1, 1, 1, 1];
					for (var n = 0; n < nPattern.length; n++) {
						if ((pat[y][n] && nPattern[n] == pat[y][n])) {
							if (n == nPattern.length) {
								score += 40;
							}
						} else {
							break;
						}
					}
					for (var n = 0; n < nPattern.length; n++) {
						if (pat[y][n] && nPattern[nPattern.length - n] == pat[y][n]) {
							if (n == nPattern.length) {
								score += 40;
							}
						} else {
							break;
						}
					}
					if (pat[y][x] == 0) {
						light++;
					} else {
						dark++;
					}
				}
			}
			var p = (dark / light) * 100,
				a = p + 5 - ((p + 5) % 5),
				b = a - 10;
			a = Math.abs(a - 50);
			b = Math.abs(b - 50);
			a /= 5;
			b /= 5;
			score += a > b ? b * 10 : a * 10;
			//vertical search
			for (var x = 0; x < 21; x++) {
				var charCount = 0;
				for (var y = 0; y < 21; y++) {
					if (y != 0 && pat[y - 1][x] == pat[y - 1][x]) {
						charCount++;
						if (charCount == 5) {
							score += 3;
						} else if (charCount > 5) {
							score += 1;
						}
					}


					var nPattern = [1, 0, 1, 1, 1, 0, 1, 1, 1, 1];
					for (var n = 0; n < nPattern.length; n++) {
						if (pat[n][x] && nPattern[n] == pat[n][x]) {
							if (n == nPattern.length) {
								score += 40;
							}
						} else {
							break;
						}
					}
					for (var n = 0; n < nPattern.length; n++) {
						if (pat[n][x] && nPattern[nPattern.length - n] == pat[n][x]) {
							if (n == nPattern.length) {
								score += 40;
							}
						} else {
							break;
						}
					}
				}
			}

			if (score < bestScore) {
				bestPat = pat;
				bestScore = score;
				maskIndex = m;
			}
		}


		var formStrs = [
			"111011111000100",
			"111001011110011",
			"111110110101010",
			"111100010011101",
			"110011000101111",
			"110001100011000",
			"110110001000001",
			"110100101110110"
		],
			formPos1 = [0, 8, 1, 8, 2, 8, 3, 8, 4, 8, 5, 8, 7, 8, 8, 8, 8, 7, 8, 5, 8, 4, 8, 3, 8, 2, 8, 1, 8, 0],
			formPos2 = [8, 20, 8, 19, 8, 18, 8, 17, 8, 16, 8, 15, 8, 14, 13, 8, 14, 8, 15, 8, 16, 8, 17, 8, 18, 8, 19, 8, 20, 8];
		for (var c = 0; c < 30; c += 2) {
			var char = formStrs[maskIndex][c / 2];
			bestPat[formPos1[c + 1]][formPos1[c]] = char;
			bestPat[formPos2[c + 1]][formPos2[c]] = char;

		}
		return bestPat;
	}
	function maskData(mask) {
		var pat = RawPattern.map(function (x) { return x.map(function (i) { return i }) });
		for (var y = 0; y < 21; y++) {
			for (var x = 0; x < 21; x++) {
				var val = pat[y][x];
				if (pat[y][x] == n) {
					var i = mask(x, y, pattern[y][x]);
					pat[y][x] = i;
				}
			}
		}
		return pat;
	}

	var document = "<?xml version=\"1.0\" standalone=\"no\"?><svg viewBox=\"0 0 21 21\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">";
	var pat = pickMask();

	for (var y = 0; y < pat.length; y++) {
		for (var x = 0; x < pat[y].length; x++) {
			if (pat[y][x] == 1) {
				document += '<rect x="' + x + '" y="' + y + '" height="1" width="1" fill="black" style="shape-rendering:crispEdges;"></rect>';

			}
		}
	}


	document += "</svg>"

	return pat;
}


function encodeMsg(input, nSym) {
	var msgIn = [];
	for (var y = 0; y < input.length; y += 8) {
		var decNum = parseInt(input.slice(y, y + 8), 2);
		msgIn.push(decNum);
	}
	if (msgIn.length + nSym > 255)
		throw 'Message too long.';

	var gen = [1, 127, 122, 154, 164, 11, 68, 117];

	var msgOut = arrayFill(msgIn.length + nSym, 0);

	for (var i = 0; i < msgIn.length; i++)
		msgOut[i] = msgIn[i];

	for (var i = 0; i < msgIn.length; i++) {
		var coef = msgOut[i];
		if (coef != 0) {
			for (var j = 0; j < gen.length; j++) {
				msgOut[i + j] ^= mul(gen[j], coef);
			}
		}
	}

	for (var i = 0; i < msgIn.length; i++)
		msgOut[i] = msgIn[i];
	var output = "";
	for (var x = 0; x < msgOut.length; x++) {
		output += ("000000000" + msgOut[x].toString(2)).substr(-8);
	}
	return output;

}
function arrayFill(size, value) {
	return Array.apply(null, new Array(size)).map(function () { return value });
}
function polyMul(p, q) {

	var r = arrayFill(p.length + q.length - 1, 0);

	for (var j = 0; j < q.length; j++) {
		for (var i = 0; i < p.length; i++) {
			r[i + j] ^= mul(p[i], q[j]);
		}

	}
	return r;
}
function mul(x, y) {
	if (x == 0 || y == 0) return 0;
	return gf.exp[gf.log[x] + gf.log[y]];
}

module.exports = compile;
