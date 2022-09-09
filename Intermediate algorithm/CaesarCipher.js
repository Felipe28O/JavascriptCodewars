function rot13(str) {
    let alphabet = {
        0: "A",
        1: "B",
        2: "C",
        3: "D",
        4: "E",
        5: "F",
        6: "G",
        7: "H",
        8: "I",
        9: "J",
        10: "K",
        11: "L",
        12: "M",
        13: "N",
        14: "O",
        15: "P",
        16: "Q",
        17: "R",
        18: "S",
        19: "T",
        20: "U",
        21: "V",
        22: "W",
        23: "X",
        24: "Y",
        25: "Z"
    }
    let letters = Object.values(alphabet);
    let newWord = "";
    let position = 0;


    for (let i = 0; i<str.length; i++){
        position = letters.indexOf(str[i]);
        if (position == -1){
            newWord = newWord + str[i];
        }
        else{
        if (position>=13){
            newWord = newWord + alphabet[position-13];
        }else {
        if (position<=12 ) {
            newWord = newWord + alphabet[position+13];
        }
        }
        }
    }

    return newWord;
  }
  
  rot13("SERR PBQR PNZC");