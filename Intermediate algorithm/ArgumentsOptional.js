function addTogether(one, two) {
    if (!(typeof one == ("number"))) {
        return undefined;
    }

    if (typeof two == "undefined") {
        return responsetwo => addTogether (one, responsetwo);
    }
    if (typeof two == "number") {
        return one+two;
    }
   
  }
  
let sum =  addTogether(2);
console.log( sum(3));




