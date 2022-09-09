function spinWords(string){
    let phrase ="";
    let counter = 0;
    let words = string.split(" ").filter(word=> word.length>=5).map(word=>word= word.split("").reverse().join("")
      );

     
      string.split(" ").forEach(Element=> {
          
          if(Element.length>=5){
            phrase+=words[counter] + " ";
            counter++
          }
          else{
            phrase+=Element +" ";
          }
      });
      return phrase.trim();
  }

console.log(spinWords("Hola onix es un gato que es muy guapo ademas es un gato volador y bolon"));