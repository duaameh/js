
/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/  
/* the correct is :
 [ 1,7 , 9 , 45]
  ["Str" ,"alex","moh"]
['the','fox' ,'over','lazy', 'dog' ]*/

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

the index is "Banana" :2    "Tomato" :1
*/


/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/

// let favFood=['waraq eanab','Bechamel pasta','biryani'];
// let favSport=['Swimming','Cycling','Kickboxing'];
// let favMovie=['me befor you','love rose','عسل اسود']; // not interesting with moves
/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
function firstOfArray(arr)
{
    console.log( arr[0]);
}
firstOfArray([1,4,5]);
/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
function lastOfArray(arr)
{
    console.log(arr[arr.length-1]);
}
lastOfArray([1,4,5]) ;
lastOfArray(["t","u","g","x"]);
/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0,5,7,9];
array.push(10,11);
array.unshift(1,3,4,6,8);
array2=array.slice(5,11);
array2.shift();
array2.shift();
array2.shift();
array=array.slice(0,5).concat(array2);
array.pop();
 console.log(array);

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array = [9,-7];
array.push(3.5,10);
array.unshift(0,5);
array.shift();
array.pop();
 console.log(array);

/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/

function middleOfArray(arr)
{
    let middle=parseInt((arr.length)/2);
    if(middle %2===0){ console.log(`${arr[middle-1]} ${arr[middle]} ` );}
    else  console.log(arr[middle]);
}
middleOfArray([1,4,5,10]);
 middleOfArray(["t","u","g","x"]) ;

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ['cat', 'ele', 'bird'];
let animals2=[];
animals2[0]='zebra';
animals2[1]='elephant';
animals=animals2.concat(animals);
console.log(animals); 


/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
function indexOfArray(arr,i)
{
    console.log(arr[i]);
}

var nums= [1,2,3,8,9]
 indexOfArray(nums,3) 
 indexOfArray(nums,1) 
 indexOfArray(nums,4)

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
function arrayExceptLast(arr) {
    console.log( arr.slice(0, -1));
  }
  var nums= [1,2,3,8,9]
  arrayExceptLast(nums)
/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
function addToEnd(arr,i)
{
    arr[arr.length-1]=i;
    console.log(arr);
}
var nums= [1,2,3,8,9]
addToEnd(nums,55)
// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function sumArray(arr)
{   var sum=0;
    for(let i=0;i<arr.length;i++)
        {
            sum+=arr[i];
        }
    console.log(sum);
}
var nums=[10,10,10];
sumArray(nums);
function sum2(arr)
{   var sum=0;
    let i=0
    while(arr.length> i)
        {
            sum+=arr[i];
            i++;
        }
    console.log(sum)
}
var nums=[10,10,10];
sum2(nums);
/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function minInArray(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    console.log( min);
  }
  var nums= [1,2,3,8,9]
 minInArray(nums);

  function minInArrayW(arr) {
    let min = arr[0];
    let i = 1;
    while (i < arr.length) {
      if (arr[i] < min) {
        min = arr[i];
      }
      i++;
    }
 console.log( min);
  }
/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function removeFromArray(arr, elem) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === elem) {
        arr.splice(i, 1);
        console.log( arr);
      }
    }
}  
var nums= [1,2,3,8,9]
removeFromArray(nums,8)

function removeFromArray2(arr,ele)
{    let i=0;
    while(arr.length>i)
        {
            if(arr[i]===ele)
                {arr.splice(i,1);
                console.log(arr);
                }
         i++;   
        }
}
var nums= [1,2,3,8,9]
removeFromArray2(nums,8)
/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function oddArray(arr) {
    let oddArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]%2 === 1) {
      oddArr.push(arr[i]);
      }
    }
    console.log(oddArr);
} 
var nums= [1,2,3,8,9]
oddArray(nums) 
function oddArray2(arr) {
    let oddArr = [];
    let i=0;
    while ( i < arr.length) {
      if (arr[i]%2 === 1) {
        oddArr.push(arr[i])
      }
      i++;
    }
    console.log(oddArr);
} 
var nums= [1,2,3,8,9]
oddArray2(nums)
/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function aveArray(arr)
{   var sum=0;
    for(let i=0;i<arr.length;i++)
        {
            sum+=arr[i];
        }
    console.log(sum/arr.length);
}
nums2= [1,2,3,8,9,77]
 aveArray(nums2)
 function aveArray2(arr)
{   var sum=0;
    let i=0;
    while(i<arr.length)
        {
            sum+=arr[i];
            i++
        }
    console.log(sum/arr.length);
}
nums2= [1,2,3,8,9,77]
 aveArray2(nums2);
/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function shorterInArray(arr) {
    let shortest = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length < shortest.length) {
        shortest = arr[i];
      }
    }
    console.log(shortest);
  }
 let strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
 shorterInArray(strings);
  function shorterInArray2(arr) {
    let shortest = arr[0];
    let i = 1
    while ( i < arr.length) {
      if (arr[i].length < shortest.length) {
        shortest = arr[i];
      }i++;
    }
    console.log(shortest);
  }
/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function repeatChar(str, char) {
    let count = 0;
    let i = 0;
    while (i < str.length) {
      if (str[i] === char) {
        count++;
      }
      i++;
    }
    console.log(`the ${char} is apeare ${count}`);
}  
string= "alex mercer madrasa rashed2 emad hala"
repeatChar(string,"a")

function repeatChar2(str, char) {
    let count = 0;
    let i = 0;
    for ( let i = 0;i < str.length;i++) {
      if (str[i] === char) {
        count++;
      }
    }
    console.log(`the ${char} is apeare ${count}`);
}  
strings= "alex mercer madrasa rashed2 emad hala"
repeatChar2(strings,"a")

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function evenIndexOddLength(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0 && arr[i].length % 2!== 0) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  var string2 = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
  console.log(evenIndexOddLength(string2)); 

  function evenIndexOddLength2(arr) {
    let result = [];
    let i = 0;
    while ( i < arr.length) {
      if (i % 2 === 0 && arr[i].length % 2!== 0) {
        result.push(arr[i]);
      }
      i++;
    }
    return result;
  }
  
  console.log(evenIndexOddLength2(string2)); 
/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function powerElementIndex(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(Math.pow(arr[i], i));
    }
    return result;
  }
  
  var nums = [44, 5, 4, 3, 2, 10];
  console.log(powerElementIndex(nums));
  
  function powerElementIndex2(arr) {
    let result = [];
    let i = 0;
    while (i < arr.length) {
      result.push(Math.pow(arr[i], i));
      i++;
    }
    return result;
  }
  
  var nums = [44, 5, 4, 3, 2, 10];
  console.log(powerElementIndex(nums)); 
/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenNumberEvenIndex(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 == 0 && arr[i] % 2=== 0) {
        result.push(arr[i]);
      }
    }
  //  console.log(result);
  }
  
  var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
  evenNumberEvenIndex(nums)

  function evenNumberEvenIndex2(arr) {
    let result = [];
    let i=0;
    while ( i < arr.length ) {
      if (i % 2 == 0 && arr[i] % 2=== 0) {
        result.push(arr[i]);
      }
      i++
    }
    
    console.log(result);
  }
  
  var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
  evenNumberEvenIndex2(nums)