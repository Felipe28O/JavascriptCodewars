function palindrome(str) {
    let rgx = /[^a-zA-Z0-9]/g
    str = str.toLowerCase();
    str = str.replace(rgx,"");
    let word = ""; 
    for (let i = str.length-1; i>=0; i--) {
        word = word + str[i];
    }
    if (word == str){
        return true
    }
    else {
        return false
    }
}
  console.log(palindrome("A man, a plan, a canal. Panama"));


  console.log(26000+13000+10000)