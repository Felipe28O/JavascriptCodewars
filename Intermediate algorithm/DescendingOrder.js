function descendingOrder(n){
    let number = n.toString();
    let numberArr = [];
    for (let i = 0; i<number.length; i++) {numberArr.push(number[i]);}

    numberArr.sort((a,b) => b -a);
    number = numberArr.reduce((pValue, cValue) => pValue + cValue, "");
    return parseInt(number);
  }

  descendingOrder(123131);