const test = require("ava")
const { add, subtract, multiply, divide, modulo } = require(".")

test("main", t => {
	t.is(add(0.2, 0.1), 0.3)
	t.is(subtract(0.2, 0.1), 0.1)
	t.is(multiply(0.2, 0.1), 0.02)
	t.is(divide(0.2, 0.1), 2)
	t.is(modulo(100, 3), 1)
})
