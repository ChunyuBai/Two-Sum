// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// ----------------------------------

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

//My solution 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//  var twoSum = function(nums, target) {
//   let array = [];
//   for(let n = 0; n < nums.length; n++){
//       if(target - nums[n] === nums[n+1]) {
//           array = [n, n+1]
//           return array;
//       }
//   }
// };
//Runtime: 80 ms Test case pass 

/* Logic: Create a map { } and use map.has()
  1. loop array and use the target number - each value in array(nums[i])
  2. if condition check map has the value or not
  map = {
    3(value): 0(key)
    2(value): 1(key)
    3(value): 2(key)
  }
  map.has() check object key instead of check value so we need to reverse the key and value
  3. if target - nums[i] = map{key} return [map{key},i] or [i, map{key}]
  4. else we set map new key and value
*/

/* Solution: */
var twoSum = function(nums, target) {
  let map = new Map();
  for(let i = 0; i < nums.length; i++) {
    let value = target - nums[i]
    if(map.has(value)){
      return [map.get(value),i]
    } else {
      map.set(nums[i],i)
    }
  }
};
//Runtime 66 ms

