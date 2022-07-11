const readlineSync=require("readline-sync");
const person={}
person.name=readlineSync.question("What is your name:- ");
person.email=readlineSync.question("What is your email id:- ");
person.phone=readlineSync.question("What is your phone no:- ");
person.basicsal=parseInt(readlineSync.question("What is your Basic Salary:- "));

console.log(person);
const totalsal=person.basicsal+0.35*person.basicsal;
    if(  totalsal > 40000 && totalsal<50000)
    {
         totalsal=totalsal-(0.1*totalsal);
         console.log(totalsal);
    }
    else if(  totalsal > 50000 && totalsal<70000)
    {
         totalsal=totalsal-(0.15*totalsal);
         console.log(totalsal);
    }
    else if(  totalsal > 70000 && totalsal<80000)
    {
         totalsal=totalsal-(0.2*totalsal);
         console.log(totalsal);
    }
    else if(  totalsal > 80000)
    {
         totalsal=totalsal-(0.3*totalsal);
         console.log(totalsal);
    }
    else{
     console.log(totalsal);
    }



// let Employee ={
//     Name:'Jyoti Prakash Nayak',
//     email:'ece.20BECE12@silicon.ac.in',
//     Phone:7815069015,
//     Basic_Salary:10000,
//     totalsal:function(){
//         let HRA=1000;
//         let SA=1000;
//         totalsal=this.Basic_Salary+0.15*HRA+0.2*SA;
    
    
//     if(  totalsal > 40000 && totalsal<50000)
//     {
//          totalsal=totalsal-(0.1*totalsal);
//     }
//     else if(  totalsal > 50000 && totalsal<70000)
//     {
//          totalsal=totalsal-(0.15*totalsal);
//     }
//     else if(  totalsal > 70000 && totalsal<80000)
//     {
//          totalsal=totalsal-(0.2*totalsal);
//     }
//     else if(  totalsal > 80000)
//     {
//          totalsal=totalsal-(0.3*totalsal);
//     }
//     return totalsal;
// }
    
// }
// console.log(`Employee name is = ${Employee.Name}`);
// console.log(`Employee email is = ${Employee.email}`);
// console.log(`Employee phone number= ${Employee.phone}`);
// console.log(`Salary after tax deduction = ${Employee.totalsal()}`)