function dropElements(arr, func) {
  let element;
  let narr = arr.length;
    for (let i = 0; i<=narr; i++) {
      console.log(func(arr[0]))
      if (func(arr[0]) == false) {
        element = arr.shift();
      }
      else {
        return arr;
      }
    }
    return arr;
  }
  
  console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));