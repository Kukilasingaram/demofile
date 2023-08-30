console.log("Hello all") 
var ab=10

console.log(ab)
console.log("....................................")
const name="kukila"
const name2="guvi"
console.log(name,name2)
console.log(".........objects & key...................")
//objects
//key:value
const sampleobject={
    name:"kukila",
    education:"ba",
    age:20
    
}
console.log(sampleobject)
    

//assignment operator
console.log("....................................")
console.log(10+20)
console.log(10-20)
console.log(10*20)
console.log(10/20)
console.log(10%20)
//logical operator
const task=80
const attendance=75
const score=77
console.log(score>task && score>attendance)
console.log(score>task || score>attendance)
console.log(!(score>task && score>attendance))
console.log(!(score>task || score>attendance))
//loops
console.log("loops....................")
console.log(" for loops....................")
//let i(variable)=0           
//condition i<=5
//value updated argm
for (let day=1; day<=5;day++){
    console.log("buyer milk for days",day)
}
// decrement
console.log("decrement.....................")
   for(let day=5; day>=1; day--){
    console.log("buyer milk for days",day)
   }
   //conditions
   console.log("...cnditions........")
   let average=35
   let good=70
   let excellence=90
   let yourmark=96
   if(yourmark>excellence){
    console.log("your excellenet")
   }else if(yourmark>=good){
    console.log("you scored good marks")
   }else if(yourmark>=average){
    console.log("you have just passed")
   }else{
    console.log("you have failed")
}console.log("........if else..........")
if (yourmark!==excellence){
    console.log("you are passed")
}else{
    console.log("you are failed")
}


//switch case
console.log("............switch case..........")
//switch(expression)(reult bassed)
const day=""
switch(day){

   case 0:
    console.log("sunday");
    break;
    case 1:
    console.log("monday")
    break;
    case 2:
    console.log("tuesday")
    break
    case 3:
    console.log("wednesday")
    break
    case 4:
    console.log("thursday")
    break
    case 5:
    console.log("friday")
    break
    case 6:
    console.log("saturday")
    break;
    default:
        console.log("day is not defined")
}


//functions with return keyword

//function funtionName(){
//logic of a function
//}

/*function add(num1,num2){
    console.log(num1*num2)
}
add(66,44)*/
function calculator(type,num1,num2) {
    switch(type){
        case "add":
            return num1+num2;
        case "multiply" :
            return num1*num2;  
        case "divide" :
            return num1/num2;
        case "sub" :
            return num1-num2   
    }
}

const result=calculator("multiply",40,67)
console.log(result)

function findtheMultiple(number,multiple){
    var values=""
    for (let i=1;i<=multiple;i++){
       var result= values+=(number*i)+""
    }
}

console.log(result)
console.log("...................................")

let a="346"
console.log(a.split("").join(" "))
console.log("....................................")


const d=20
const area=((Math.sqrt(3)/4)* (Math.pow(d,2)))
console.log
console.log(area)
console.log("........................")
console .log(window)
let A=1
let B=1
let c=A+B
console.log(typeof(c))
console.log(Math.round(c))
//tofixed(1)or tofixed(2) math.abs-->it will return positive numbers
console.log("........................")
//&&-->two conditions are true result is true
//||-->one conditions are true result is true



const data={
    string:"kukila",
    number:4,
    array:["kukila",4,{nestedobj:"nestedvalue"}],
    obj:{
        batch:"B51WD2",
        mentor:"sanjay",
        stack:["javascript","html","css"],
        
    },
    isstudent:true,
}
console.log(data);
console.log(data.array[2].nestedobj)











