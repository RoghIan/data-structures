// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	var isNegative = Math.sign(n) === -1

	if (isNegative) {
		n *= 1
		var reverse = n.toString().split('').reverse().join('')

		return parseInt(reverse) * -1
	}

	return parseInt(n.toString().split('').reverse().join(''))
}

module.exports = reverseInt
