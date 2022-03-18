// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	let chars = str.trim().split('')
	let ctrVowels = 0

	for (let char of chars) {
		if (isVowel(char)) ctrVowels++
	}

	return ctrVowels
}

function isVowel(c) {
	return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
}

module.exports = vowels
