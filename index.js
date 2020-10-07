"use strict"

const Big = require("big.js")

const preciseMath = (method, firstNumber, ...otherNumbers) => {
	let number = new Big(firstNumber)

	for (const otherNumber of otherNumbers) {
		number = number[method](otherNumber)
	}

	return number.toNumber()
}

exports.add = preciseMath.bind(undefined, "plus")
exports.subtract = preciseMath.bind(undefined, "minus")
exports.multiply = preciseMath.bind(undefined, "times")
exports.divide = preciseMath.bind(undefined, "div")
exports.modulo = preciseMath.bind(undefined, "mod")
