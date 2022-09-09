let RomanNumerals = {
fromRoman(romanNumber){
    let value = 0;
    switch (true){
        case /IX/.test(romanNumber):
            value += 9
            romanNumber = romanNumber.replace(/IX/,"");
            break;
        case /VIII/.test(romanNumber):
            value += 8
            romanNumber =romanNumber.replace(/VIII/,"");
            break;
        case /VII/.test(romanNumber):
            value += 7
            romanNumber =romanNumber.replace(/VII/,"");
            break;
        case /VI/.test(romanNumber):
            value += 6;
            romanNumber =romanNumber.replace(/VI/,"");
            break;
        case /IV/.test(romanNumber):
            value += 4;
            romanNumber =romanNumber.replace(/IV/,"");
            break;
        case /V/.test(romanNumber):
            value += 5;
            romanNumber =romanNumber.replace(/V/,"");
            break;
     
        case /III/.test(romanNumber):
            value += 3;
            romanNumber =romanNumber.replace(/III/,"");
            break;
        case /II/.test(romanNumber):
            value += 2;
            romanNumber =romanNumber.replace(/II/,"");
            break;
        case /I/.test(romanNumber):
            value += 1;
            romanNumber =romanNumber.replace(/I/,"");
            break;
    }
    switch (true) {
        case /XC/.test(romanNumber):
            value += 90
             romanNumber = romanNumber.replace(/XC/,"");
            break;
        case /LXXX/.test(romanNumber):
            value += 80
            romanNumber = romanNumber.replace(/LXXX/,"");
            break;
        case /LXX/.test(romanNumber):
            value += 70
            romanNumber = romanNumber.replace(/LXX/,"");
            break;
        case /LX/.test(romanNumber):
            value += 60
            romanNumber = romanNumber.replace(/LX/,"");
            break;
        case /XL/.test(romanNumber):
            value += 40
            romanNumber = romanNumber.replace(/XL/,"");
            break;
        case /L/.test(romanNumber):
            value += 50
            romanNumber = romanNumber.replace(/L/,"");
            break;
      
        case /XXX/.test(romanNumber):
            value += 30
            romanNumber = romanNumber.replace(/XXX/,"");
            break;
        case /XX/.test(romanNumber):
            value += 20
            romanNumber = romanNumber.replace(/XX/,"");
            break;
        case /X/.test(romanNumber):
            value += 10
            romanNumber = romanNumber.replace(/X/,"");
            break;
    }
    switch (true){
        case /CM/.test(romanNumber):
            value += 900
            romanNumber = romanNumber.replace(/CM/,"");
            break;
        case /DCCC/.test(romanNumber):
            value += 800
            romanNumber = romanNumber.replace(/DCCC/,"");
            break;
        case /DCC/.test(romanNumber):
            value += 700
            romanNumber = romanNumber.replace(/DCC/,"");
            break;
        case /DC/.test(romanNumber):
            value += 600
            romanNumber =  romanNumber.replace(/DC/,"");
            break;
        case /CD/.test(romanNumber):
            value += 400
            romanNumber = romanNumber.replace(/CD/,"");
            break;
        case /D/.test(romanNumber):
            value += 500
            romanNumber = romanNumber.replace(/D/,"");
            break;
        
        case /CCC/.test(romanNumber):
            value += 300
            romanNumber = romanNumber.replace(/CCC/,"");
            break;
        case /CC/.test(romanNumber):
            value += 200
            romanNumber = romanNumber.replace(/CC/,"");
            break;
        case /C/.test(romanNumber):
            value += 100
            romanNumber = romanNumber.replace(/C/,"");
            break;
    }
    switch (true) {
        case /MMM/.test(romanNumber):
            value += 3000;
            romanNumber = romanNumber.replace(/MMM/,"");
            break; 
        case /MM/.test(romanNumber):
            value += 2000;
            romanNumber = romanNumber.replace(/MM/,"");
            break;
        case /M/.test(romanNumber):
            value += 1000;
            romanNumber = romanNumber.replace(/M/,"");
            break;}

  
    
  
    return value;
    }
,

toRoman (number) {
    let nNumber = number.toString();
    let tho = nNumber[nNumber.length-4];
    let cent = nNumber[nNumber.length-3];
    let dec =  nNumber[nNumber.length-2];
    let unt = nNumber[nNumber.length-1];
    nNumber = "";

    switch (tho) {
        case "1":
            nNumber = nNumber+"M";
            break;
    
        case "2":
            nNumber = nNumber+"MM";
            break;
        case "3":
            nNumber = nNumber+"MMM";
            break;
    }
    switch (cent) {
        case "1":
            nNumber = nNumber+"C";
            break;
    
        case"2":
            nNumber = nNumber+"CC";
            break;
        case"3":
            nNumber = nNumber+"CCC";
            break;
        
        case"4":
            nNumber = nNumber+"CD";
            break;
        case"5":
            nNumber = nNumber+"D";
            break;
        case"6":
            nNumber = nNumber+"DC";
            break;
        case"7":
            nNumber = nNumber+"DCC";
            break;
        case"8":
            nNumber = nNumber+"DCCC";
            break;
        case"9":
            nNumber = nNumber+"CM";
            break;
    }
    switch (dec) {
        case "1":
            nNumber = nNumber+"X";
            break;
    
        case "2":
            nNumber = nNumber+"XX";
            break;
        
        case "3":
            nNumber = nNumber+"XXX";
            break;
        
        case "4":
            nNumber = nNumber+"XL";
            break;
        
        case "5":
            nNumber = nNumber+"L";
            break;
        case "6":
            nNumber = nNumber+"LX";
            break;

        case "7":
            nNumber = nNumber+"LXX";
            break;
        case "8":
            nNumber = nNumber+"LXXX";
            break;
        case "9":
            nNumber =  nNumber+"XC";
    }
    switch (unt) {
        case "1":
            nNumber =  nNumber+"I";
            break;
        case "2":
            nNumber =  nNumber+"II";
            break;
        case "3":
            nNumber =  nNumber+"III";
            break;
        case "4":
            nNumber = nNumber+"IV";
            break;
        case "5":
            nNumber = nNumber+"V";
            break;
        case "6":
            nNumber = nNumber+"VI";
            break;
        case "7":
            nNumber = nNumber+"VII";
            break;
        case "8":
            nNumber = nNumber+"VIII";
            break;
        case "9":
            nNumber = nNumber+"IX";

    }
    return nNumber;
}
}
console.log(RomanNumerals.fromRoman("MMMXCIX"));