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



// Retrieved from 
