// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
	stringB = stringB.replace(/[^\w]/g, '').toLowerCase()

	if (stringA.length !== stringB.length) return false

	let charobA = {}

	for (let item of stringA) {
		charobA[item] = charobA[item] + 1 || 1
	}

	let charobB = {}
	for (let item of stringB) {
		charobB[item] = charobB[item] + 1 || 1
	}

	for (let item in charobA) {
		if (charobA[item] !== charobB[item]) return false
	}

	return true
}

module.exports = anagrams
