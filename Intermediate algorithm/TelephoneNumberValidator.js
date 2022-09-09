function telephoneCheck(str) {
    let rgx = /[0-9]/;
    let counter = 0;
    let val = str.match(rgx).index;
    let parentOpenRgx = /\(/g
    let parentCloseRgx = /\)/g
    let strngRgx =/[^\d\s-\(\)]/
    let numSpaces =str.match(/[\s-]/g);





    if(/^\(/.test(str) && /\)$/.test(str)){
        return false;
    }


    if(numSpaces!=null && numSpaces.length>=4){
        return false;
    }

    if(strngRgx.test(str)==true) {
        return false
    }

    for (let i = 0; i<str.length; i++) {
        
        if (rgx.test(str[i])){
            counter++
        }
    }
    if(str.includes("(") | str.includes(")")){
        let parentCloseNum = str.match(parentCloseRgx);
        let parentOpenNum = str.match(parentOpenRgx);
        if ((parentCloseNum==null & parentOpenNum!=null) | (parentCloseNum!=null & parentOpenNum==null)){
            return false;
        }
        if (parentCloseNum.length!=parentOpenNum.length) {
            return false;
        }
    }


    if (str[0]=="-"){
        return false;
    }
    if (counter<=9 | counter>=12) {
        return false;
    }
    if (counter==11 && str[val]!=1){
        return false;
    }
    return true;
  }

  console.log(telephoneCheck("(555555-5555)"));
  

