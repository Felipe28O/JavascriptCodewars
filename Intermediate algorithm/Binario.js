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
  
  binaryAgent("01101000 01101111 01101100 01100001 00100000 01100001 00100000 01110100 01101111 01100100 01101111 01110011 00100000 01110001 01110101 01100101 00100000 01101000 01100001 01100011 01100101 01101110 00100000 01101000 01101111 01111001");
  