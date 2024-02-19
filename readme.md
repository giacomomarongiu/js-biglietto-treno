# Instruction
Descrizione:
Trenitalia ha bisogno di un programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65 (fortunelli :older_adult:).
L'output del prezzo finale va messo fuori in forma umana (con massimo due cifre decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca - come quelle fatte in classe :wink:


## Steps
- Dichiaro due variabili "eta" e "km" e specifico che mi serve un valore numerico
- Assegno loro un valore tramite promt
- Calcolo quanto sarà la spesa totale sulla base di questi dati e lo assegno a una nuova variabile "total"
- Specifico la formattazione con cui voglio visualizzare i numeri
- Confronto il valore della variabile contentente "eta" con 18
- SE l'età è SUPERIORE o UGUALE
- - Confronto il valore della variabile contentente "eta" con 65
- - SE "eta" è superiore applico a "total" uno sconto del 40% e lo mostro
- - SE NO Visualizzo "total" senza sconti
- SE NO applico a "total" uno sconto del 20% e lo mostro



### Tools
variabili
funzioni
promnt
Intl.NumberFormat object
if else
log