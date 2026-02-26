/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    if(!s.length) return false;
    if(s === "") return true;

   let left = 0;
   let right = s.length - 1;

   while(left <= right){

    while(left < right && !isAlphaNumeric(s[left])){
        left++;
    }

    while(left < right && !isAlphaNumeric(s[right])){
        right--;
    }

    if(s[left].toLowerCase() !== s[right].toLowerCase()) return false
    left++;
    right--;

   }

    return true
}

function isAlphaNumeric(char){
    let charAt = char.charCodeAt(0);
    if((charAt >= 65 && charAt <= 90) || (charAt >= 97 && charAt <= 122) || (charAt >= 48 && charAt <= 57)) return true;
    else return false;
}