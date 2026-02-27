/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    if(height.length === 0) return 0;

    let left = 0;
    let right = height.length - 1;
    let maxArea = -Infinity;

    while(left < right){

        let currArea = (right - left) * Math.min(height[left],height[right]);
        maxArea = Math.max(currArea, maxArea);

        if(height[left] < height[right]){
            left++
        }else{
            right--
        }

    }

    return maxArea
    
}