const nums = [2,4,6,9,1,3];

function twoSum(nums, target) {

    for(let a = 0; a < nums.length; a++){
        for(let b = 0; b < nums.length; b++){
            if(nums[a] + nums[b] === target){
                return [a, b];
            }
        }
    }
}

let indices = twoSum(nums, 10);
console.log(indices);