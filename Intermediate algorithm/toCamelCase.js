function toCamelCase(str){
    let strArr = str.split(/[\s_-]/);
    let nstr ="";
    for (let i = 0; i<strArr.length; i++) {
        if (i!=0){
            nstr = nstr + strArr[i][0].toUpperCase() + strArr[i].slice(1);
        }
        else {
            nstr = nstr + strArr[i];
            
        }
    }
    return nstr;
  }

  console.log(toCamelCase("hola-como-estas"));