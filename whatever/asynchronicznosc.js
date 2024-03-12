// function asyncfunction(callback){
//     setTimeout(()=>{
//         callback("Dane pobrane z serwera")
//     }, 2000)
// }

// console.log("Start. Jesteśmy przed wywołaniem funkcji async")

// console.log("Wywołuję funkcję async")
// asyncfunction( data => {console.log("Otrzymane dane: ", data)})

// console.log("Tekst umieszczony PO funkcji asynchronicznej")
function pobierzDane(url){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            if(Math.random() > 0.5){
                resolve({dane:"Przykładowe dane"})
            } else {
                reject(new Error("Błąd pobierania danych"))
            }
        }, 1000)
    })
}

async function obslugiwaniePobierania(){
    try{
        console.log("Pobieranie log...")
        const odpowiedz = await pobierzDane("https://Bartosz.Country")
        console.log("pobrane dane: ", odpowiedz.dane)
    }catch(eer){
        console.error("Błąd: ",err.message)
    }
}

pobierzDane("https://tojest.suchy.pedalaż.pl")
    .then( odpowiedz => { console.log("Dane: ", odpowiedz.dane)})
    .catch( blad => { console.error("Błąd: ", blad.message)})

console.log("Pobieranie danych...")
obslugiwaniePobierania()
for (let i = 0; i < 10; i++) {
    console.log(`Aktualny numer: ${i}`);   
}