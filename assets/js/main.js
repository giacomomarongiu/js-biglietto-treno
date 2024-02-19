console.log("Ciao, il tuo js è ben collegato");


/*- Dichiaro due variabili "eta" e "km" e specifico che mi serve un valore numerico
- Assegno loro un valore tramite promt*/


let user_age = Number(prompt("Inserisci la tua età"));

let user_km = Number(prompt("Inserisci la quantità di chilometri che desideri percorrere"));

console.log("Bene, hai inserito i seguenti valori", user_age, user_km);

console.log(typeof user_age, typeof user_km); //Verify number type


// - Calcolo quanto sarà la spesa totale sulla base di
//questi dati e lo assegno a una nuova variabile "total"


let total = (user_km * 0.21)
console.log("Il prezzo pieno per il tuo biglietto è di ", total, "euro");


//- Confronto il valore della variabile contentente "eta" con 18
//- SE l'età è SUPERIORE o UGUALE

if (user_age >= 18) {
    /*- - Confronto il valore della variabile contentente "eta" con 65
    - - SE "eta" è superiore applico a "total" uno sconto del 40% e lo mostro
    - - SE NO Visualizzo "total" senza sconti*/
    if (user_age >= 65) {
        total = (total * 40 / 100) //Over 65 price
    } else {
        total = total //Full price
    }
} else {
    total = (total * 20 / 100) // Under 18 price

}

