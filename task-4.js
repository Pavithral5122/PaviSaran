//a.PRINT ODD NUMBERS IN Array
var array=[1,2,3,4,5,6,7,8,9,10];
anonymous  :  function arrayname(array){
    for(var i = 0 ; i< array.length ; i++){
          if(array[i]%2!=0){
             console.log(array[i]);
          } 
     }
  }(array);
var array=[1,2,3,4,5,6,7,8,9,10];
let abc=function arrayname(array){
    for(var i = 0 ; i< array.length ; i++){
          if(array[i]%2!=0){
              console.log(array[i]);
          } 
     }
  };
abc(array);


//IIFE
var array=[1,2,3,4,5,6,7,8,9];
(function arrayname (array)
{
   for(var i=0; i<array.length; i++)
   {
     if(array[i]%2!==0)
     {
        console.log(array[i]);
     }
   }
})(array);

             
//Arrow Function 
var y=[1,2,3,4,5,6,7,8,9,10];


var odd=(array)=>{
   let arr=[];
   for(let i=0; i<array.length; i++)
   {
     if(array[i]%2!==0)
     {
      arr.push(array[i]);
     }
   }
   return arr;
}
console.log(odd(y));



//b.Convert all the strings to title caps in a string array
anonymous:function toTitleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }
  console.log(toTitleCase("hello world"));

IIFE:(function toTitleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  })
  console.log(toTitleCase("hello world"));
 

 arrowfunction:  toTitleCase=(str)=>{
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }
  console.log(toTitleCase("hello world"));

//c.Sum of all numbers in an array
Anonymous: var numbers = [10, 20, 30, 40, 50]
var sum = 0;
var num=function(numbers){
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}}(numbers);
console.log(sum);

IIFE: var numbers = [10, 20, 30, 40, 50]
var sum = 0;
var num=(function(numbers){
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}}(numbers));
console.log(sum);

arrowfunction: var numbers = [10, 20, 30, 40, 50]
var sum = 0;
var num=(numbers)=>{
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i] }
    return sum;
  
};
console.log(num(numbers));

//d.Return all the prime numbers in an array
Anonymous:
var numarray=[ 2,3,4,5,6,7,8,9];
var primenum=function (numArray){
  numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  }); 
  console.log(numArray);
};( primenum(numarray ));

IIFE:

var numarray=[ 2,3,4,5,6,7,8,9];
var primenum=(function (numArray){
  numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  }); 
  console.log(numArray);
});( primenum(numarray ));

arrowfunction:

var numarray=[ 2,3,4,5,6,7,8,9];
var primenum= (numArray)=>{
  numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  }); 
  console.log(numArray);
};( primenum(numarray ));


//g.Remove duplicates from an array
anonymous :

function duplicates(array){
  let dup = [...new Set(array)];
  console.log(dup);
 }([1,1,2,3,4])
 
 IIFE:
 (function duplicates (array){
  let dup = [...new Set(array)];
  console.log(dup);
 })([1,1,2,3,4])

    
 
  //roatate an array by k times
anonymous :

var Array = [1, 2, 3, 4, 5];
var N= Array.length;
var K = 2;
function array (a, n, k)
{
    k = k % n;
  
    for (let i = 0; i < n; i++) {
        if (i < k) {
  
           
            console.log(a[n + i - k] + " ");
        }
        else {
  
            
            console.log((a[i - k]) + " ");
        }
    }
   
}
(Array, N, K);


  


IIFE :
var Array = [1, 2, 3, 4, 5];
var N = Array.length;
var K = 2;
(function  (a, n, k)
{
    k = k % n;
  
    for (let i = 0; i < n; i++) {
        if (i < k) {
  
           
            console.log(a[n + i - k] + " ");
        }
        else {
  
            
            console.log((a[i - k]) + " ");
        }
    }
   
})
(Array, N, K);
