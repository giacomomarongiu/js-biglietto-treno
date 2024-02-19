/*console.log("Ciao, il tuo js è ben collegato");


/*- Dichiaro due variabili "age" e "km" e specifico che mi serve un valore numerico
- Assegno loro un valore tramite promt


let user_age = Number(prompt("Inserisci la tua età"));

let user_km = Number(prompt("Inserisci la quantità di chilometri che desideri percorrere"));

console.log("Bene, hai inserito i seguenti valori", user_age, user_km);

//console.log(typeof user_age, typeof user_km); Verify number type


// - Calcolo quanto sarà la spesa totale sulla base di
//questi dati e lo assegno a una nuova variabile "total"

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
    /*- - Confronto il valore della variabile contentente "age" con 65
    // - - SE "age" è superiore applico a "total" uno sconto del 40% e lo mostro
    if (user_age >= 65) {
        total =(total) - (total * 40 / 100) //Over 65 price
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

*/



// STESSO ESERCIZIO MA INSERENDO L'ANNO DI NASCITA

console.log("Ciao, il tuo js è ben collegato");


/*- Dichiaro due variabili "age" e "km" e specifico che mi serve un valore numerico
- Assegno loro un valore tramite promt*/


let user_age = Number(prompt("Inserisci il tuo anno di nascita"));

let user_km = Number(prompt("Inserisci la quantità di chilometri che desideri percorrere"));

console.log("Bene, hai inserito i seguenti valori", user_age, user_km);

//console.log(typeof user_age, typeof user_km); Verify number type


// - Calcolo quanto sarà la spesa totale sulla base di
//questi dati e lo assegno a una nuova variabile "total"

let total = (user_km * 0.21)

//- Specifico la formattazione con cui voglio visualizzare i numeri
const formatter = new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'EUR',
})

console.log("Il prezzo pieno per il tuo biglietto è di ", formatter.format(total));

//Inserisco in una variabile la data di oggi
const my_date = new Date();
console.log("Bene, oggi è il ", my_date);

//Dichiaro una variabile per salvarci dentro l'anno corrente
let today_year = my_date.getFullYear(my_date);
//console.log(today_year); 

//Calcolo l'età sottraendo l'anno di nascita dall'anno di oggi
user_age = (today_year - user_age)

console.log("Bene, hai (o stai per compiere)", user_age, " anni, vediamo se c'è qualche sconto per te");


//- Confronto il valore della variabile contentente "age" con 18
//- SE eta è SUPERIORE o UGUALE
if (user_age > 18) {
    /*- - Confronto il valore della variabile contentente "age" con 65
    // - - SE "age" è superiore applico a "total" uno sconto del 40% e lo mostro*/
    if (user_age >= 65) {
        total = (total) - (total * 40 / 100) //Over 65 price
        console.log("Il prezzo scontato per il tuo biglietto è di ", formatter.format(total));
        // - - SE NO Visualizzo "total" senza sconti
    } else {
        total = total //Full price
        console.log("Peccato, non ti spetta nessuno sconto, pagherai", formatter.format(total));
    }
}

// VERIFICO SE HA GIA' COMPIUTO 18 ANNI
else if (user_age == 18) {
    //Dichiaro una variabile per salvarci dentro il mese corrente
    let user_month = Number(prompt("Inserisci il numero corrispondete al tuo mese di nascita"));
    // SE IL MIO MESE DI NASCITA E' SUPERIORE NON LI HO COMPIUTI
    if (user_month > my_date.getMonth(my_date)) {
        total = (total) - (total * 20 / 100) // Under 18 price
        console.log("Non hai ancora 18 anni!")
        console.log("Il prezzo scontato per il tuo biglietto è di ", formatter.format(total));    
    }
    //SE E' INFERIORE SI', NESSUNO SCONTO
    else {
        total = total //Full price
        console.log("Peccato, non ti spetta nessuno sconto, pagherai", formatter.format(total));
    }
}
else {
    //- SE NO 
    total = (total) - (total * 20 / 100) // Under 18 price
    console.log("Il prezzo scontato per il tuo biglietto è di ", formatter.format(total));
}

