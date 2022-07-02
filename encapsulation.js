/* 
Public fields 
Private fields 
Public methods
Private methods
also static methods
*/




class BankAccount {
    customerName;
    accountNumber;
    balance = 0;

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.balance = balance;
        this.accountNumber = Date.now();
    }
    #deposite = function (amount) {
        this.balance += amount;
    };

    withdraw(amount) {
        this.balance -= amount;
    }
}


class SavingAccount extends BankAccount {
    transactionLimit = 10000;

    constructor(customerName, balance = 0) {

        super(customerName, balance);
    }

    takePersonalLoan(amount) {
        console.log(`Taking personal loan : ${amount}`);
    }
}

const jack = new BankAccount("Jack", 5000);
jack.balance = 2000;
console.log(jack);