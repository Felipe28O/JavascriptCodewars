function bitCounting (number) { //number will be the number that will be on binary after and the output will be the number of 1 on the binary number 
    //Example input = 1234;



    let condition = true;
    let counter = 0;
    let outBinary = 0;
    let potent = 0;
    while (condition) {
        if (number>=potent){
            counter++;
            potent = Math.pow(2, counter);
             
            
           
        }
        else{
            break;
        }
    }
    while(counter!=0){ 
            counter--; 
            potent = Math.pow(2, counter);
            if(number>=potent){
                outBinary += 1;
                number = number - potent;
               
               
            }

            if(number==0){
                condition = false;
            }
          
                       
        }
    
    return outBinary;
    //Binary number = 10011010010
    //Example output = 5
}
bitCounting(10);