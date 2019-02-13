
class Calculator {
	constructor() {
		//takes in nothing
		//make storage for the operator and the numbers
		this.numbers = []

	}
	loadOperator(operator) {
		//adds the operator to the next calculation
		//takes in the operator
		//checks if it is a valid operation (+-*/)
		//save the op to the constructor storage
		//return true
		//or return false if not the right operator
		if (operator !== '+' || '-' || '*' || '/') {
			return false
		}
		return operator

	}
	loadNumber(number) {
		//takes in a number and stores it as one of the numbers to perform math on
		//takes in 1 number
		//checks if it is actually a number and if we have fewer than 2 numbers
		//if it is a number, and we have 2 or fewer numbers, store it
		//return the number of numbers stored
		//otherwise return false (too many numbers stored)
		if (typeof number !== 'number') {
			return false
		}
		if (this.numbers.length < 2) {
			this.numbers.push(number);
		}
		return this.numbers.length
	}
	calculate() {
		//calculate the result of the stored numbers and operator
		//takes in nothing
		//calculates with the operator and 2 numbers
		//clears out the stored numbers
		//returns the calculated result

	}
}