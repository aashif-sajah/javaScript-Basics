let num1 = 2;
let num2 = 4;
let oparator = '*';

switch(oparator){
    case('+'):
        console.log(`The sum of ${num1} ${oparator} ${num2} is ${num1 + num2}`);
        break;
    case('-'):
        console.log(`The difference of ${num1} ${oparator} ${num2} is ${num1 - num2}`);
        break;
    case('*'):
        console.log(`The product of ${num1} ${oparator} ${num2} is ${num1 * num2}`);
        break;
    case('/'):
        console.log(`The division of ${num1} ${oparator} ${num2} is ${num1 / num2}`);
        break;
    default:
        console.log("Invalid Operator");
}