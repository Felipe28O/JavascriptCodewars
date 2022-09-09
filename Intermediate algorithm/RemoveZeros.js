function removeZeros(array) {
    // Sort "array" so that all elements with the value of zero are moved to the
    // end of the array, while the other elements maintain order.
    // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
    // Zero elements also maintain order in which they occurred.
    // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]
    
    // Do not use any temporary arrays or objects. Additionally, you're not able
    // to use any Array or Object prototype methods such as .shift(), .push(), etc
    
    // the correctly sorted array should be returned.
    
    function separator(array){
        let outArr = [];
        for (element of array){
            if(element=="0"){
                outArr.push(element);
            }
        }
        return(outArr);
      }


    let arr = separator(array)
    array =  array.join("").replace(/[0]/g,"").split("");
    return [...array, ...arr];
  }
  

  console.log(removeZeros([0, 1, 2, 0, 3]))