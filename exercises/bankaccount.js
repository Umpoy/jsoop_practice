

class Account {
	constructor() {
		//store the amount of money in the account
		this.amount = 0;
	}
	add(amount) {
		//add money to the amount stored in the account
		//takes in an amount
		//adds it to the existing amount
		//returns the new amount in the account
		this.amount += amount
		return this.amount
	}
	remove(amount) {
		//removes funds from an account
		//check if the amount to withdraw is more than the account
		//if more, only withdraw the amount in the account, not more
		//if less, withdraw the amount specified
		//return the amount actually withdrawn
		let withdraw;
		if (amount > this.amount) {
			withdraw = this.amount;
			this.amount = 0
		} else {
			withdraw = amount;
			this.amount -= amount
		}

		return withdraw
	}
	getAmount() {
		//returns the amount in the account
		return this.amount
	}
}