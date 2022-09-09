function checkCashRegister(price, cash, cid) {
    let aChange = cash-price;
    let cMoney = 0;
    let status = "";
    let change = [];
    let values = {
        PENNY:	    0.01,
        NICKEL:	    0.05,
        DIME:	    0.1, 
        QUARTER:    0.25,
        ONE:	    1, 
        FIVE:	    5, 
        TEN:        10, 
        TWENTY:	    20, 
        ONEHUNDRED:	100    
    }
    let keyValues = Object.keys(values);
    let scid = cid;



    for (let i = 0; i<cid.length; i++){
        cMoney = cMoney + cid[i][1];

    }
    if (aChange==cMoney){
        return {status:"CLOSED", change: cid};
    }

    for(let j = keyValues.length-1; j>=0; j--){
        let counter = 0;
        let cChange = "";
        while(values[keyValues[j]]<=aChange && scid[j][1]!=0){
            scid[j][1] = scid[j][1] - values[keyValues[j]];
            aChange = aChange - values[keyValues[j]];
            cMoney = cMoney - values[keyValues[j]];
            counter = counter + values[keyValues[j]];
            cChange = keyValues[j];
            aChange = aChange.toFixed(2);
        }
        
        if(cChange !="" && counter!= 0){
            change.push([cChange, counter]);
        }
    }   

  
    if (aChange!=0){
        return {status : "INSUFFICIENT_FUNDS", change: []}
        
    }
    if (aChange<cMoney){
        status = "OPEN";
    }
    
           
    
    
    

    return {status,
    change};
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));


