function $fuller (str) {
    if (typeof str != "string") {
        str = str.toString();
    }
    let word = "";
    if (str[0] != "$") {
        word = "$ " + str;
        str = word;
        return str;
    }
    else{
        return str;
    }
}

console.log ($fuller(123231));

`$ ${valores.costoenvio}`; 