function validParentheses(parens) {
   
    if (parens.match(/\(/g)!=null && parens.match(/\)/g)!=null){
        return parens.match(/\(/g).length==parens.match(/\)/g).length;
    }
    else{
        if(parens.match(/\(/g)==null && parens.match(/\)/g)==null){
        return true;
        }
        else{
            return false;
        }
    }
    
  }

console.log(validParentheses("())("));