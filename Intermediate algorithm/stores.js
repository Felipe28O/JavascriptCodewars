const stores = {
    d1: {
        papitasBQ: 3500,
        papitasLimon: 3200,
        mani: 800,
        cafe: 8000,
        azucar: 3500,
        papel: 3000,
    },
    olimpica: {
        papitasBQ: 3600,
        papitasPollo: 3500,
        mani: 850,
        cafe: 8010,
        azucar: 3200,
        papel: 3500,
    },
    exito: {
        papitasBQ: 3650,
        papitasLimon: 3200,
        mani: 790,
        cafe: 8000,
        azucar: 3500,
        papel: 3000,
        gomitas: 4520,
    },
    otra: {
        papitasBQ: 3700,
        papitasLimon: 3200,
        cafe: 7000,
        azucar: 3000,
        papel: 3200,
        gomitas: 4320,
    },
};

const shoppingList = ['papitasPollo','papitasBQ','cafe','gomitas','mani']

function searchProducts(shoppingList){
let storeArr = Object.keys(stores);
let needStores={}


    storeArr.forEach(store => {
        shoppingList.forEach(element=>{
           if ( stores[store][element] != undefined){
            needStores[store][element] = stores[store][element];
           }
        })
    
  });
       
  return availableShops
}

searchProducts(shoppingList)