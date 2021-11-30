function getSecondLargest(nums) {
    return Math.max(...nums.filter(num => (num < Math.max(...nums))));
} 