function nodelists (classElement) {
    let nodelist = document.getElementsByClassName(classElement);
    return arrElemenst = Array.apply(null, nodelist);
   }
   
   function btnBinding(classBtn, classinp){
   let inputslct;  
   
   nodelists(classinp).map((element)=> {
        element.addEventListener("focus", ()=> {
            inputslct = event.target       
        })});        
   nodelists(classBtn).map((elementbtn)=> {        
        elementbtn.addEventListener("click", ()=>{
            inputslct.value = elementbtn.value                     
                })});      
            }

    btnBinding("caracter1", "inputstxt")