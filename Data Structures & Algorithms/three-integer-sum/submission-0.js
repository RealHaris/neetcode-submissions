class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = [];
        // 1. Sort the array numerically
        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length - 2; i++) {
            // Skip duplicate values for the first element to avoid duplicate triplets
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let left = i + 1;
            let right = nums.length - 1;

            // 2. Two-pointer approach for the remaining elements
            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];

                if (sum === 0) {
                    res.push([nums[i], nums[left], nums[right]]);
                    
                    // Move pointers past duplicates
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    
                    // Move both pointers inward
                    left++;
                    right--;
                } else if (sum < 0) {
                    left++; // Sum is too small, make it bigger by moving left pointer right
                } else {
                    right--; // Sum is too big, make it smaller by moving right pointer left
                }
            }
        }

        return res;
    }
}