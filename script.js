document.getElementById("generate").addEventListener("click", generate);
document.getElementById("charsNum").addEventListener("input", charsNumInput);
document.getElementById("charsNumM").addEventListener("click", charsNumM);
document.getElementById("charsNumP").addEventListener("click", charsNumP);

let charsNum = 0;

function charsNumM(e) {
	charsNum--;
	document.getElementById("charsNum").value = charsNum;
	if (charsNum <= 0) {
		charsNum = 0;
		document.getElementById("charsNum").value = "RANDOM";
	}
}

function charsNumP(e) {
	charsNum++;
	
	if (charsNum > 100) {
		charsNum = 100;
	}
	
	document.getElementById("charsNum").value = charsNum;
}

function charsNumInput(e) {
	charsNum = e.target.value;
	console.log(charsNum.slice(0,6));
	if (charsNum.slice(0,6) === "RANDOM") {
		charsNum = charsNum.slice(6);
		document.getElementById("charsNum").value = charsNum;
	}
	
	if (isNaN(charsNum) || charsNum <= 0) {
		charsNum = 0;
		document.getElementById("charsNum").value = "RANDOM";
	} else if (charsNum > 100) {
		charsNum = 100;
		document.getElementById("charsNum").value = "100";
	}
}

function generate(e) {
	name = buildNickname(charsNum);
	console.log(name);
	document.getElementById("generated").textContent = name;
}

function buildNickname(nChars, randomMin = 3, randomMax = 10) {
	let nick = ""
	let firstChar=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","v","w","x","y","z"]
	let chars={
	"a": ["b","c","d","f","g","i","j","k","l","m","n","p","r","s","t","u","v","w","x","z"],
	"b": ["a","e","i","l","o","r","u","y"],
	"c": ["a","e","h","i","l","o","r","u","y"],
	"d": ["a","e","i","o","r","u","y"],
	"e": ["i","o","u","y","b","c","d","f","g","j","k","l","m","n","p","r","s","t" ,"v","w","x","z"],
	"f": ["a","e","i","l","o","u","y"],
	"g": ["a","e","i","l","o","r","u","y"],
	"h": ["a","e","i","o","u","y"],
	"i": ["b","c","d","f","g","j","k","l","m","n","p","r","s","t" ,"v","w","x","z"],
	"j": ["a","e","i","o","u","y"],
	"k": ["a","e","i","l","n","o","r","u","y"],
	"l": ["a","e","i","o","u","y"],
	"m": ["a","e","i","o","u","y"],
	"n": ["a","e","i","o","u","y"],
	"o": ["i","u","b","c","d","f","g","j","k","l","m","n","p","r","s","t" ,"v","w","x","z"],
	"p": ["a","e","i","o","u","y","r","l","h"],
//	"q": ["u"],
	"r": ["a","e","i","o","u","y"],
	"s": ["a","e","i","o","u","y","r","l"],
	"t": ["a","e","i","o","u","y","h","r"],
	"u": ["i","b","c","d","f","g","j","k","l","m","n","p","r","s","t" ,"v","w","x","z"],
	"v": ["a","e","i","o","u","y","r","l"],
	"w": ["a","e","i","o","u","y"],
	"x": ["a","e","i","o","u","y"],
	"y": ["a","e","o","b","c","d","f","g","j","k","l","m","n","p","r","s","t" ,"v","w","x","z"],
	"z": ["a","e","i","o","u","y"]}
	if (nChars > 0) {
		for (let i=1; i <= nChars; i++) {
			if (i===1) {
				nick=nick+firstChar[Math.floor(Math.random() * firstChar.length-1)];
			} else {
				nick += chars[nick[nick.length-1]][Math.floor(Math.random() * chars[nick[nick.length-1]].length)];
			}
		}
	} else {
		for (let i=1; i <= Math.floor(Math.random() * (randomMax - randomMin)+randomMin); i++) {
			if (i===1) {
				nick=nick+firstChar[Math.floor(Math.random() * firstChar.length-1)];
			} else {
				nick += chars[nick[nick.length-1]][Math.floor(Math.random() * chars[nick[nick.length-1]].length)];
			}
		}
	}
	return nick.slice(0,1).toUpperCase() + nick.slice(1);
}