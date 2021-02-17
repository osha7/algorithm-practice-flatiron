var removeDuplicates = function(nums) {
    let n = nums.length
    if (n <= 1) return nums
    
    let placeholder = 0
    let count = 0
    let i = 0
    let j = i + 1
    
    while (i < n-1) {
        console.log(n)
        console.log(i, nums[i])
        while (j < (n - 1)) {
            console.log(j, nums[j])
            if(nums[i] === nums[j]) {
                placeholder = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = placeholder
                j++
            }
            // if(nums[i] !== nums[j]) {
            //     j++
            // }
        }
        count ++
        i++
        j = i+1
        n--
    }
    // return nums.slice(0, nums+1)
    console.log(nums)
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4]))