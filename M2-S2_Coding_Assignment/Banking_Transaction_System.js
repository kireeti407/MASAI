function createBankAccount(amount){
    let balance=amount //balance variable is used to store user amount
    return { //return the object
        deposit:function(amount){//deposite function is add the amount into a balance
            balance+=amount
            return `deposited ₹${amount}. New balance: ₹${balance}`
        },
        withdraw:function(amount){
            if(amount<=balance){// if the balance is greater than the withdraw amount it will allow the withdraw amount from account
                balance-=amount
                return`Withdrew ₹${amount}. New balance: ₹${balance}`
            }
            else{ //other wise it will return Insufficient funds
                return `Insufficient funds`
            }
        },
        getBalance:function(){ // it will return the current balance in a account
            return `Current balance: ₹${balance}`
        }
    }
}
const myAccount = createBankAccount(1000);  
console.log(myAccount.deposit(500));   // "Deposited ₹500. New balance: ₹1500"  
console.log(myAccount.withdraw(200));  // "Withdrew ₹200. New balance: ₹1300"  
console.log(myAccount.withdraw(1500)); // "Insufficient funds"  
console.log(myAccount.getBalance());   // "Current balance: ₹1300"  
