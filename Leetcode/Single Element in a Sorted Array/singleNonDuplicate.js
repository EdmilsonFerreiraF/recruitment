// Single Element in a Sorted Array

const nums = [1, 1, 2, 3, 3, 4, 4, 8, 8]

const singleNonDuplicate = (nums) => {
    let singleEl
    
    for (let i = 0; i < nums.length; i++){
        if (nums[i - 1] !== nums[i] && nums[i + 1] !== nums[i]) {
            singleEl = nums[i]

            break
        }
    }
    
    return singleEl
}

singleNonDuplicate(nums)