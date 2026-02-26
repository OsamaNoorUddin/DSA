/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    if(nums.length === 0) return [];

    let myMap = new Map();

    for(let i=0; i< nums.length; i++){

        let curr = target - nums[i];

        if(myMap.has(curr)){
            return [myMap.get(curr), i]
        }else{
            myMap.set(nums[i], i)
        }

    }

    return []

}