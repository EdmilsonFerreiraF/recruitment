// Find Min

const nums = [2, 2, 2, 0, 1]

const findMin = (nums) => {
    let min = nums[0]
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i]
        }
    }
    
    return min
};

findMin(nums)