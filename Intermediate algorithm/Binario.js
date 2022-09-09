function binaryAgent(str) {
    let arr = str.split(" ");
    let ascciArr = []
    let word = "";

    for (let i = 0; i<arr.length; i++) {
        let value  = 128;
        let counter = 0;
        for (let j = 0;j<=7; j++) {
            
            if (arr[i][j] ==1) {
                counter = counter + value;
            }
            
            value = value / 2;
        }
     ascciArr.push(counter);
    }
    for (let i = 0; i<ascciArr.length; i++) {
        word =  word + String.fromCharCode(ascciArr[i]);
    }






    return word;
  }
  
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
  