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

  // make an array out of the given arrays and flatten it using the spread operator
    
  const flatArray = [].concat(...arrays); // Same as const flatArray = [].concat(...arguments);

  // create a Set which clears any duplicates in flatArray
  return [...new Set(flatArray)];
}





// Retrieved from 
