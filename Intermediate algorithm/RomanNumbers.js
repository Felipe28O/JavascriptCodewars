function convertToRoman(num) {
    let str = num.toString();
    let m = str[str.length-4];
    let c = str[str.length-3];
    let d = str[str.length-2];
    let u = str[str.length-1];
    let rtn = "";
    
    if (m>0){
        switch (m) {
            case "1":
                rtn = rtn + "M";
                break;
            case "2":
                rtn = rtn + "MM";
                break;
            case "3":
                rtn = rtn + "MMM";
                break;
        }
    }
    if (c>0){
        switch (c) {
            case "1":
                rtn = rtn + "C";
                break;
            case "2":
                rtn = rtn + "CC";
                break;
            case "3":
                rtn = rtn + "CCC";
                break;
            case "4":
                rtn = rtn + "CD";
                break;
            case "5":
                rtn = rtn + "D";
                break;
            case "6":
                rtn = rtn + "DC";
                break;
            case "7":
                rtn = rtn + "DCC";
                break;
            case "8":
                rtn = rtn + "DCCC";
                break;
            case "9":
                rtn = rtn + "CM";
                break;
        }
    }
    if (d>0){
        switch (d) {
            case "1":
                rtn = rtn + "X";
                break;
            case "2":
                rtn = rtn + "XX";
                break;
            case "3":
                rtn = rtn + "XXX";
                break;
            case "4":
                rtn = rtn + "XL";
                break;
            case "5":
                rtn = rtn + "L";
                break;
            case "6":
                rtn = rtn + "LX";
                break;
            case "7":
                rtn = rtn + "LXX";
                break;
            case "8":
                rtn = rtn + "LXXX";
                break;
            case "9":
                rtn = rtn + "XC";
                break;
        }
    }
    if (u>0){
        switch (u) {
            case "1":
                rtn = rtn + "I";
                break;
            case "2":
                rtn = rtn + "II";
                break;
            case "3":
                rtn = rtn + "III";
                break;
            case "4":
                rtn = rtn + "IV";
                break;
            case "5":
                rtn = rtn + "V";
                break;
            case "6":
                rtn = rtn + "VI";
                break;
            case "7":
                rtn = rtn + "VII";
                break;
            case "8":
                rtn = rtn + "VIII";
                break;
            case "9":
                rtn = rtn + "IX";
                break;
        }
    }    

    return rtn;
   }
   
  console.log(convertToRoman(3999));