function highAndLow(numbers){
    if(numbers.split(" ").map(n => parseInt(n)).length==1){
        return numbers + numbers;
    }
    return numbers.split(" ").map(n => parseInt(n)).sort((n1,n2)=> n2-n1).filter((element,index,array)=>index==0||index==array.length-1).toString().replace(/,/g," ");
  }

  console.log(highAndLow("1 2 3 4 5"));