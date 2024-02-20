console.log("Ciao, il tuo js è ben collegato");


//- Dichiaro due variabili "age" e "km" e specifico che mi serve un valore numerico
//  - Assegno loro un valore tramite promt


let user_age;

let user_km;

//- Creo una funzione dentro add.EventListener

document.querySelector('.btn_element').addEventListener('click', function(){
    user_age = Number(document.getElementById("my_user_age").value);
    user_km = Number(document.getElementById("my_user_km").value);
    console.log("Bene, hai inserito i seguenti valori", user_age, user_km);
    let total = (user_km * 0.21)

    //- Specifico la formattazione con cui voglio visualizzare i numeri
    const formatter = new Intl.NumberFormat('it-IT', {
        style: 'currency',
        currency: 'EUR',
    })
    
    console.log("Il prezzo pieno per il tuo biglietto è di ", formatter.format(total));
    
    //- Confronto il valore della variabile contentente "age" con 18
    //- SE eta è SUPERIORE o UGUALE
    if (user_age >= 18) {
        //- - Confronto il valore della variabile contentente "age" con 65
        // - - SE "age" è superiore applico a "total" uno sconto del 40% e lo mostro
        if (user_age >= 65) {
            total = (total) - (total * 40 / 100) //Over 65 price
            console.log("Il prezzo scontato per il tuo biglietto è di ", formatter.format(total));
            // - - SE NO Visualizzo "total" senza sconti
        } else {
            total = total //Full price
            console.log("Peccato, non ti spetta nessuno sconto, pagherai", formatter.format(total));
        }
    } else {
        //- SE NO 
        total = (total) - (total * 20 / 100) // Under 18 price
        console.log("Il prezzo scontato per il tuo biglietto è di ", formatter.format(total));
    }

})


