function smallestCommons(arr) {
    arr = arr.sort((num1,num2) => num1-num2);
    let narr = []
    let number = 0;


    for (let i = arr[0]; i<=arr[1]; i++) {
        narr.push(i);
    }
    let max = narr.reduce((pValue, cValue) => pValue * cValue) 


    for (let mult = arr[0]; number<=max; mult++) {
        number = mult*arr[1];
        if (narr.every((cValue) => number%cValue == 0)) {
            return number;
        }
       }

  }
  
  console.log(smallestCommons([17, 26]));