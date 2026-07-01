function atm(){

    let balance = 10000;

    let choice = Number(prompt(
`1. Check Balance
2. Deposit
3. Withdraw
4. Exit

Enter Choice`
));

    switch(choice){

        case 1:
            document.getElementById("output").innerHTML =
            "Balance = ₹" + balance;
            break;

        case 2:

            let deposit = Number(prompt("Enter Deposit Amount"));

            balance += deposit;

            document.getElementById("output").innerHTML =
            "Deposit Successful<br>Balance = ₹" + balance;

            break;

        case 3:

            let withdraw = Number(prompt("Enter Withdraw Amount"));

            if(withdraw <= balance){

                balance -= withdraw;

                document.getElementById("output").innerHTML =
                "Withdraw Successful<br>Balance = ₹" + balance;

            }else{

                document.getElementById("output").innerHTML =
                "Insufficient Balance";

            }

            break;

        case 4:

            document.getElementById("output").innerHTML =
            "Thank You";

            break;

        default:

            document.getElementById("output").innerHTML =
            "Invalid Choice";

    }

}
