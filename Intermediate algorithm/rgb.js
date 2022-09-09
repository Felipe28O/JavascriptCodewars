function rgb(r, g, b){
    function val(n){
        (n<0)? n=0:"";
        (n>255)? n=255: "";
        return n.toString(16).toUpperCase().padStart(2,0);
    }
    return `${val(r)}${val(g)}${val(b)}` 
  }
  console.log(rgb(255, -4, 23));