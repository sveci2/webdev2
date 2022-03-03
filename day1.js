// 1. Write a function that returns the maximum in an array, using ES5/ES6 standards ? 
const array1 = [1, 3, 2];
console.log(Math.max(...array1));

/* 2. Write a function that takes an array as a parameter and returns true if a value is repeated twice or more, else returns false 
Does the following array contains a duplicate 
Example: let array = [1,4,2,11,1,4,5];  Expected Output - true */

let ary = [1,4,2,11,1,4,5];
function isNumberInList(ary, arr) {
  var result = false;
  if(ary.indexOf(arr)!=-1){
     result = true;
  }
  return result;
};
console.log(isNumberInList([3, 5, 6, 10, 20],5))

/*3. Write a function that returns a the missing integer, provided a given array from 1 to N, Note: Numbers will be in sequence 
Example: let array = [1,2,3,4,6,7,8,9,10]; Expected Output: 5 */
const numArr = [3, 4, 7, 8];
const missing = [];
for (let i in numArr) {
  let x = numArr[i] - numArr[i - 1];
  let diff = 1;
  while (diff < x) {
    missing.push(numArr[i - 1] + diff);
    diff++;
  }
}
console.log(missing);

/*4. Write a function that Reverses an array without using Es6 Reverse Method 
let array = [1,2,3,4] -->Expected Output [4,3,2,1]*/ 

var original = [1,2,3,4];
var reverse = [];
while(original.length){
    reverse.push(original.pop());
};
console.log(reverse)

/*5. Write a function that returns a new array/same array after removing Duplicates from an array 
let array = [1,4,22,1,0,22,4,1]; // Expected Output: [1,4,22,0]; NOTE: order can change*/
