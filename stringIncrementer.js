function stringIncrementer (str) {

   if(/[a-zA-Z]/.test(str)){
    return  /\d+$/g.test(str) ? str.match(/\w+(?=\d+$)/)[0] + (parseInt(str.match(/\d$/g)[0])+1) : str + 1;
   }
   else{
    return parseInt(str)+1
   }
   
}

console.log( stringIncrementer("foobar099"));