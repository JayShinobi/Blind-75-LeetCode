/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    let sort = nums.sort()
    let result = []
    let n = sort.length
    if(n===0) return 0;
     
     result = 0;
     for (let i=0; i<n; i++) {
         result += nums[i] - i;
     }
     return n- result;
 };