
  // Write your algorithm here
  function hasTargetSum(array, target) {
  const set = new Set();
  
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    if (set.has(complement)) {
      return true;
    }
    set.add(array[i]);
  }
  
  return false;
}

console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // true
console.log(hasTargetSum([22, 19, 4, 6, 30], 25)); // true
console.log(hasTargetSum([1, 2, 5], 4)); // false




/* 
  Write the Big O time complexity of your function here
  function hasTargetSum(array, target) {
  // create a new set (constant time operation)
  const set = new Set();
  
  // iterate through the input array (linear time operation)
  for (let i = 0; i < array.length; i++) {
    // calculate the complement of the target and the current number (constant time operation)
    const complement = target - array[i];
    
    // check whether the complement is in the set (constant time operation)
    if (set.has(complement)) {
      // if it is, return true (constant time operation)
      return true;
    }
    
    // add the current number to the set (constant time operation)
    set.add(array[i]);
  }
  
  // if we finish iterating without finding a pair that sums to the target, return false (constant time operation)
  return false;
}

*/

/* 
  Add your pseudocode here
  function hasTargetSum(array, target):
    // create a new set to store seen values
    set = new Set()
    
    // iterate over the array
    for i from 0 to length of array - 1:
        // calculate the complement of the target and the current value
        complement = target - array[i]
        
        // if the complement is in the set, return true
        if set contains complement:
            return true
        
        // otherwise, add the current value to the set
        set add array[i]
    
    // if we haven't found a pair that sums to the target, return false
    return false

*/

/*
  Add written explanation of your solution here
  The function receives an array of integers and a target integer as input.
It creates a new empty set to store the integers seen so far.
It iterates over the input array and for each integer in the array, it calculates the complement of the target and the integer.
If the complement is already in the set, it means that we have found a pair of integers that add up to the target, and the function returns true.
If the complement is not in the set, the function adds the current integer to the set and continues iterating.
If the function iterates over the entire array without finding a pair that adds up to the target, it returns false.
The time complexity of the function is O(n), where n is the length of the input array, because it performs a constant number of operations for each element in the array.




*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
