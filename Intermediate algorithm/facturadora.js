function producto ({
    idProducto,
    precio,
    nombre,
    stock

}){
    function getIdProducto () {
       return idProducto; 
    }
    return {getIdProducto}
}

let leche =  new producto ({idProducto: 3, precio: 10000, nombre: "leche entera", stock: 10});

console.log(leche.getIdProducto());