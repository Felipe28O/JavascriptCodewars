let arr = [[1,2,3],
           [3,1,2],
           [4,2,1]]


for (let pos = 0; pos<=2; pos++){
    let hola = arr[pos].every((current)=> current == arr[pos][0]);
    let adios = arr.every((current,index)=> arr[index][pos]==arr[0][pos])
    let tardes = arr.every((current, index)=> arr[index][index]==arr[0][0]);
    console.log(tardes);
}