//example input
/*
ISBN     : 1 1 1 2 2 2 3 3 3  9
position : 1 2 3 4 5 6 7 8 9 10


@process 

(1*1 + 1*2 + 1*3 + 2*4 + 2*5 + 2*6 + 3*7 + 3*8 + 3*9 + 9*10) % 11 = 0

if = 0 

@return true
*/

function validISBN10(isbn) {
    // TODO: return true if (and only if) isbn is a valid 10-digit ISBN.
    return(/[0-9X]{10}/i.test(isbn) && /[0-9]{9}[0-9X]{1}/i.test(isbn) && isbn.split("").join(" ").replace(/X/g,10).split(" ").reduce((previusValue,currentValue,index)=>previusValue+=currentValue*(index+1),0)%11==0)
}
console.log(validISBN10("1112223339"))