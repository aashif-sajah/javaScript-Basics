let mark = 90;
let grade;

switch(true){

    case (mark >=90 && mark <=100):
        grade = "A";
        break;
    case (mark >=80 && mark <90):
        grade = "B";
        break;
    case (mark >=70 && mark <80):
        grade = "C";
        break;
    case (mark >=60 && mark <70):
        grade = "D";
        break;
    default:
        grade = "F";

}
console.log(`Your Grade is ${grade}`);