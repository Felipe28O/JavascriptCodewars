function steamrollArray(arr) {
    console.log(Array.isArray(arr));
    let narr =[];
    let validator = (strc) => {
        if (Array.isArray(strc)) {
            for (let i = 0; i<strc.length; i++){
                validator(strc[i]);
            }
        }
        else {
            return narr.push(strc);
        }
    }


    validator(arr);

    return narr;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);




