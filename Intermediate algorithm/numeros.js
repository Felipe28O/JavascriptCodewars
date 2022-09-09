let condition = true;
let counter;
let semiword ="";
let word ="";
for (let i = 5; i>=0; i--){
    counter = 0;
    condition = true;
    while(condition){
        if(counter!=i){
            semiword += i.toString();
            counter++;
        }
        else{
            word += semiword +" ";
            semiword = " ";
            condition=false;
        }
    }
}

console.log(word)