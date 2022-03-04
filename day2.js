// Write a function that returns the duplicates with the array? Example : [1,2,3,4] , // Expected output : [1,2,3,4,1,2,3,4] (USE ES6 Standards) 
function duplicate(arr){
    return arr.concat(arr);
  }
  
  console.log(duplicate([1, 2, 3, 4]));
  
  

// Given an array of integers and an integer target, return numbers such that they add up to target. (Challenging) 
// Example: [2,11,7,15], target = 9 
// Expected Output : [2, 7] 



// Function twoSum(array, target) { return [firstNum, secondNum] } 

// Write your own function to replace, Object.keys, 
let obj = {default: 3};

obj['new'] = obj['default'];
delete obj['default'];

console.log(obj);

//Write your own function to replace, Object.values { return [value1, value2]
var myHouse = {
    "location": "Slovakia",
    "rooms": 4,
    "washrooms": 2,
  };
  myHouse.location = "Levice";