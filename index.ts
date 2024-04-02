import inquirer from "inquirer"

let myBalance = 10000; // Dollar


let myPin = 1234;

let pinAnswer = await inquirer.prompt(
[
  {
    name: "Q1",
    message: "Enter your pin",
    type: "number"
  }
]
);


if (pinAnswer.Q1 === myPin){
    console.log("Corrrect Pin Code!!!");
    
    let operationAns = await inquirer.prompt(
        [
            {
                name:"operation",
                message:"Pleae select option",
                type:"list",
                choices: ["withdraw","check balance"]
            }
        ]
    );
    
    console.log(operationAns);
    
    if (operationAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt([
            {
                name:"amount",
                message:"enter your amount",
                type:"number"
            }
        ]);
        
    // =,-=, +=
    myBalance -= amountAns.amount;

    console.log("your remaining balance is: " + myBalance)
    } 
    elseif (operationAns.operation === "check balance");{
        console.log("your balance is: " +  myBalance)
    }
    
}else{
    console.log("Incorrect PIn Code");
}

function elseif(arg0: boolean) {
    throw new Error("Function not implemented.");
}
