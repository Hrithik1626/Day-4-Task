//Do the below programs in anonymous function & IIFE and arrow function:
var result=[];
var a=function(arr){
    for(var i=0;i<arr.length;i=i+1){
    if (arr[i]%2!==0){
        result.push(arr[i]);

    }
}
return result;
}
console.log(a([1,2,3,4,5,6,7,8,9,90,]));


//IIFE:Print odd numbers in an array:
var result =[];
(function(arr){
    for(var i=0;i<arr.length;i=i+1){
        if (arr[i]%2!==0){
            result.push(arr[i]);
        }
    }
    console.log(result)
})([20,21,23,24,25,11,34])

//Arrow function: Print odd numbers in an array:

var result =[];
 var odd =(arr)=>{
    for(var i=0;i<arr.length;i=i+1){
        if (arr[i]%2!==0){
            result.push(arr[i]);
        }
    }
   return result;
}
console.log(odd([20,21,23,24,25,11,34,44,57]));


//2:Convert all the strings to title caps in a string array

// annynomus function:

var result=[];
var a=function titleCase(st){
    return st.toLowerCase().split(" ").reduce((s, c) =>
    s + "" + (c.charAt(0).toUpperCase() + c.slice(1) + " "), '');
}
console.log(titleCase("converted string to titlecase"));



// IIFE:

var result=[];
function titleCase(st) {
	return st.toLowerCase().split(" ").reduce((s, c) =>
		s + "" + (c.charAt(0).toUpperCase() + c.slice(1) + " "), '');
}
console.log(titleCase("converting string to titlecase"));


//Map:
const str = "using map function converting string to title case";
const newStr = str.split(' ')
   .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
   .join(' ');
console.log(newStr);


//Sum of all numbers in an array:IIFE:


var result =[];
var sum=0;
(function(arr){
    for(var i=0;i<arr.length;i=i+1){
        sum+=arr[i]
        {
            result.push(arr[i]);
        }
    }
    console.log(sum)
})([20,21,23,24,25,11,34])



// sum of all numbers in arrow function:

var result =[];
 var sum=(arr)=>{
    for(var i=0;i<arr.length;i=i+1){
       sum+=arr[i];
       {
            result.push(arr[i]);
        }
    }
   return result;
}
console.log(sum([20,21,23,24,25,11,34,44,57]));


