var twoSum = function (nums, target) {
    // Initialise a map to store the first run of numbers
    let map = new Map();
    // Loop through the numbers
    for (let i = 0; i < nums.length; i++) {
        // Determine the (required number) for the current number
        let sub = target - nums[i];
        // Check if the number needed  exists in the Map
        if (map.has(sub)) {
            return [map.get(sub), i];
        }
         // If not, add the current number to the Map
        map.set(nums[i], i);
    }
};