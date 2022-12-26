/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let sort = nums.sort((a,b) => {
        return a-b
    }) 
    return sort[0]
 };