Readme dell'esercizio e una bozza delle soluzioni applicate inizialmente

Ciao ragazzi,
esercizio di oggi: calcolo del prezzo del biglietto del treno
cartella/repo: js-biglietto-treno
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
   
    form o prompt (n°1):
    Gentile cliente, le diamo informazioni sulle nostre tariffe:
    . il prezzo del biglietto è definito in base ai km (0.21 € al km)
    . va applicato uno sconto del 20% per i minorenni
    . va applicato uno sconto del 40% per gli over 65.

    form o prompt (n°2):
    domanda: Ora le chiediamo gentilmente di specificare alcune informazioni:
            Per quante persone vuole prenotare i biglietti?
    var :   let NumeroDeiPasseggeri = tot

    form o prompt (n°3):
    domanda: Quanti di questi passeggeri sono minorenni?
    var :    let NumeroDeiMinorenni = tot  

    form o prompt (n°4):
    domanda: Quanti di questi passeggeri sono over 65?
    var :    let NumeroDegliOver65 = tot  

    form o prompt (n°5):
    domanda: Quanti Kilometri vuole percorrere?
    var :    let KmDaPercorrere = tot




Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
. il prezzo del biglietto è definito in base ai km (0.21 € al km)
. va applicato uno sconto del 20% per i minorenni
. va applicato uno sconto del 40% per gli over 65.

    let CostoPerPersonaInBaseAiKilometri = (KmDaPercorrere * 0.21)
    let CostoPerPiuPersone = (CostoPerPersonaInBaseAiKilometri * NumeroDeiPasseggeri)

            PER MINORENNI:
    let CostoScontatoPerSingoloMinorenne = (CostoPerPersonaInBaseAiKilometri / 20%)
    let CostoScontatoPerTuttiIMinorenniPresenti = (CostoScontatoPerSingoloMinorenne * NumeroDeiMinorenni)
            PER OVER65:
    let CostoScontatoPerSingoloOver65 = (CostoPerPersonaInBaseAiKilometri / 40%)
    let CostoScontatoPerTuttiIOver65Presenti = (CostoScontatoPerSingoloOver65 * NumeroDegliOver65)
            TOTALE:
    let totale = (CostoPerPiuPersone 
     - CostoScontatoPerTuttiIMinorenniPresenti 
     - CostoScontatoPerTuttiIOver65Presenti)





L'output del prezzo finale va messo fuori in forma umana - con massimo due decimali, per indicare centesimi sul prezzo.
Questo richiederà un minimo di ricerca.
Il risultato andrà visualizzato in un apposito elemento <p> del  codice HTML.
Buon lavoro a tutti!