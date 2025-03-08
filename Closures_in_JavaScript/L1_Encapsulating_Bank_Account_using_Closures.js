function createBankAccount(amount){
    let balance=amount
    return{
        deposit:function(amount){
            balance+=amount
            return balance
        },
        withdraw:function(amount){
            if (balance>amount){
                balance-=amount
                return balance
            }
            else{
                return "balance is lesser than the amount"
            }
        },
        getBalance:function(){
            return balance
        }

    }
}
const account = createBankAccount(100);

console.log(account.deposit(50)); // Output: 150

console.log(account.withdraw(30)); // Output: 120

console.log(account.getBalance()); // Output: 120
