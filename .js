/*************    Solution #1     ***********************************************************************************************/

function uniteUnique(arr) {
    let allArr = [...arguments];
  
    for(let i = 1; i < allArr.length; i++){
        allArr[i].forEach(function(x){
            if(!arr.includes(x)){
                arr.push(x);
            }
        })
    }
    return arr;  
}
uniteUnique([1, 3, 2], [1, [3]], [2, [4]]); // Return [1, 3, 2, [5], [4]]



/*************    Solution #2     ***********************************************************************************************/

function uniteUnique(...arrays) {

  // make an array out of the given arrays and flatten it using concat() with an empty array as a starting point and the spread operator
    
   const flatArray = [].concat(...arrays); // Same as const flatArray = [].concat(...arguments);

  // use Set to remove duplicate elements from flatArray
   return [...new Set(flatArray)];
}





// Retrieved from https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union/
