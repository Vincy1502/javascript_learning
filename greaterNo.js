const a=5
const b=8
const c=3

//if else statement
if(a>b && a>c){
    console.log("a is greater")
}
else if(b>a && b>c){
    console.log("b is greater")
}
else{
    console.log("c is greater")
}
//ternary statement
(a>b && a>c) ? console.log("a is greater") : (b>a && b>c) ? console.log("b is greater"):console.log("c is greater")

