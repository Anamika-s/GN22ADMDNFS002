console.log("Inside Script file")
console.log("Arrow Functions Demo")


array = [1,2,13,4];
const double = x=>
 x*2;

 const triple = x=>
 x*x*x;

 console.log(double(10));

var res = array.map(double)
console.log(res)
res =  array.map(triple)
console.log(res)


function IsOdd(x)
{
  return x%2;
}
function IsEven(x)
{
  return x%2==0;
}

const sum = array.reduce(function(sum, cur)
{
   sum = sum+ cur;
   return sum;
},0)

console.log("Sum is "  + sum);

const max = array.reduce((max, cur)=>
{ if(cur>max)
  max = cur;
  return max;
},0)

console.log("Max no is " + max)
var odds = array.filter(IsOdd)
var evens = array.filter(IsEven)
console.log("odd " + odds)
console.log("even " + evens)

 

// Normal function
function hello()
{
  return "hello"
}

// Anonymous Function
const hello1 = function()
{
  return "hello"

}
// other way to write anonymous method is to 
// use Arrow function 

const hello2 = ()=>
{
   return "hello"
}

const hello3 = () => "hello";
const hello4 = name => "Hello " + name;
const add = (no1, no2) => no1 +no2;
console.log(hello())
console.log(hello1())
console.log(hello2())
console.log(hello3())
console.log(hello4("Ajay"))
console.log(add(10,20))







