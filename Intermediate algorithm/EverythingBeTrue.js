function truthCheck(collection, pre) {

    let arr = collection.map( element => element[pre]);
  
    for (let i = 0; i<arr.length; i++) {
        if (arr[i]) {
            
        }
        else {
            return false;
        }
    }

    return true;
  }
  
  truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");