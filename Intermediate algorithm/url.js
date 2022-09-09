function domainName(url){
    return url.replace(/https?:\/\//,"").replace(/www./,"").replace(/\.[\w\W]+/,"");
  }
console.log(domainName("www.xakep.ru"));