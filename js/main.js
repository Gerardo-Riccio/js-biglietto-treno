////////////////////////////////
//tuteliamoci

'use strict';

console.log('sono collegato al doc html');

// //tuteliamoci
////////////////////////////////

////////////////////////////////
//domande per l'utente
//numero di passeggeri
const NumeroDeiPasseggeri = parseInt(Number(prompt('Per quante persone vuole prenotare i biglietti?')));
// //numero di passeggeri

// presenza di minorenni

const SeSonoPresentiMinorenni = String(prompt('Sono presenti minorenni? (si o no)'));
let NumeroDeiMinorenni = 0;

if (SeSonoPresentiMinorenni === 'si') {
    NumeroDeiMinorenni = parseInt(Number(prompt('Quanti di questi passeggeri sono minorenni?')));
} else {
    NumeroDeiMinorenni = 0;
}
// //presenza di minorenni


// presenza di over65
const SeSonoPresentiOver65 = String(prompt('Sono presenti Over65? (si o no)'));
let NumeroDegliOver65 = 0;
if (SeSonoPresentiOver65 === 'si') {
    NumeroDegliOver65 = parseInt(Number(prompt('Quanti di questi passeggeri sono over 65?')));
} else {
    NumeroDegliOver65 = 0;
}
// //presenza di over65


// Km da percorrere
const KmDaPercorrere = parseInt(Number(prompt('Quanti Kilometri vuole percorrere?')));
// //Km da percorrere
//  //domande per l'utente
////////////////////////////////







// Calcolare Prezzo finale
let CostoPerPersonaInBaseAiKilometri = (KmDaPercorrere * 0.21)
let CostoPerPiuPersone = (CostoPerPersonaInBaseAiKilometri * NumeroDeiPasseggeri)

         //PER MINORENNI:
let CostoScontatoPerSingoloMinorenne = 0;
let CostoScontatoPerTuttiIMinorenniPresenti = 0;
if (NumeroDeiMinorenni !== 0) {
    CostoScontatoPerSingoloMinorenne = (CostoPerPersonaInBaseAiKilometri * 20 / 100);
    CostoScontatoPerTuttiIMinorenniPresenti = (CostoScontatoPerSingoloMinorenne * NumeroDeiMinorenni);
} else {
    //niente
}



//         //PER OVER65:
let CostoScontatoPerSingoloOver65 = 0;
let CostoScontatoPerTuttiIOver65Presenti = 0;
if (NumeroDegliOver65 !== 0) {
    CostoScontatoPerSingoloOver65 = (CostoPerPersonaInBaseAiKilometri * 40 / 100);
    CostoScontatoPerTuttiIOver65Presenti = (CostoScontatoPerSingoloOver65 * NumeroDegliOver65);
} else {
    //niente
}


        //TOTALE:
let totale = (CostoPerPiuPersone - CostoScontatoPerTuttiIMinorenniPresenti - CostoScontatoPerTuttiIOver65Presenti);
// //Calcolare Prezzo finale


// INIZIO - operazioni di eliminazione dei numeri dopo la virgola (massimo due decimali, per indicare centesimi sul prezzo.)
// INIZIO - Prezzo Totale)
totale = totale.toString();  // conversione numero in stringa
    //// Inizio - blocco preso da https://www.mrw.it/javascript/gestione-numeri-decimali-javascript_7048.html
    var numero = totale;             
    var arr_num = numero.split(".");
    if (numero.indexOf(".") != (-1))
    {
        if (arr_num[1].length == 1)
        {
            numero += 0;
        }
        else
        {
            numero = arr_num[0] + "." + arr_num[1].substring(0, 2);
        }
        numero = parseFloat(numero);
    }
    else
    {
        numero = parseInt(numero);
    }
    //// Fine - blocco preso da https://www.mrw.it/javascript/gestione-numeri-decimali-javascript_7048.html
totale = parseFloat(numero);   // riconversione stringa in numero
// FINE - Prezzo Totale)

// INIZIO - Prezzo Minorenni)
    // INIZIO Parte1 - per singolo Minorenne
    CostoScontatoPerSingoloMinorenne = CostoScontatoPerSingoloMinorenne.toString();  // conversione numero in stringa
        //// Inizio - blocco preso da https://www.mrw.it/javascript/gestione-numeri-decimali-javascript_7048.html
        var numero = CostoScontatoPerSingoloMinorenne;             
        var arr_num = numero.split(".");
        if (numero.indexOf(".") != (-1))
        {
            if (arr_num[1].length == 1)
            {
                numero += 0;
            }
            else
            {
                numero = arr_num[0] + "." + arr_num[1].substring(0, 2);
            }
            numero = parseFloat(numero);
        }
        else
        {
            numero = parseInt(numero);
        }
        //// Fine - blocco preso da https://www.mrw.it/javascript/gestione-numeri-decimali-javascript_7048.html
    CostoScontatoPerSingoloMinorenne = parseFloat(numero);   // riconversione stringa in numero      
    // FINE Parte1 - per singolo Minorenne
    
    // INIZIO Parte2 - Totale Minorenni
    CostoScontatoPerTuttiIMinorenniPresenti = CostoScontatoPerTuttiIMinorenniPresenti.toString();  // conversione numero in stringa
        //// Inizio - blocco preso da https://www.mrw.it/javascript/gestione-numeri-decimali-javascript_7048.html
        var numero = CostoScontatoPerTuttiIMinorenniPresenti;             
        var arr_num = numero.split(".");
        if (numero.indexOf(".") != (-1))
        {
            if (arr_num[1].length == 1)
            {
                numero += 0;
            }
            else
            {
                numero = arr_num[0] + "." + arr_num[1].substring(0, 2);
            }
            numero = parseFloat(numero);
        }
        else
        {
            numero = parseInt(numero);
        }
        //// Fine - blocco preso da https://www.mrw.it/javascript/gestione-numeri-decimali-javascript_7048.html
    CostoScontatoPerTuttiIMinorenniPresenti = parseFloat(numero);   // riconversione stringa in numero   
    // FINE Parte2 - Totale Minorenni
// FINE - Prezzo Minorenni)

// INIZIO - Prezzo Over65)
    // INIZIO Parte1 - per singolo Over65
    CostoScontatoPerSingoloOver65 = CostoScontatoPerSingoloOver65.toString();  // conversione numero in stringa
        //// Inizio - blocco preso da https://www.mrw.it/javascript/gestione-numeri-decimali-javascript_7048.html
        var numero = CostoScontatoPerSingoloOver65;             
        var arr_num = numero.split(".");
        if (numero.indexOf(".") != (-1))
        {
            if (arr_num[1].length == 1)
            {
                numero += 0;
            }
            else
            {
                numero = arr_num[0] + "." + arr_num[1].substring(0, 2);
            }
            numero = parseFloat(numero);
        }
        else
        {
            numero = parseInt(numero);
        }
        //// Fine - blocco preso da https://www.mrw.it/javascript/gestione-numeri-decimali-javascript_7048.html
    CostoScontatoPerSingoloOver65 = parseFloat(numero);   // riconversione stringa in numero    
    // FINE Parte1 - per singolo Over65
    // INIZIO Parte2 - Totale Over65
    CostoScontatoPerTuttiIOver65Presenti = CostoScontatoPerTuttiIOver65Presenti.toString();  // conversione numero in stringa
        //// Inizio - blocco preso da https://www.mrw.it/javascript/gestione-numeri-decimali-javascript_7048.html
        var numero = CostoScontatoPerTuttiIOver65Presenti;             
        var arr_num = numero.split(".");
        if (numero.indexOf(".") != (-1))
        {
            if (arr_num[1].length == 1)
            {
                numero += 0;
            }
            else
            {
                numero = arr_num[0] + "." + arr_num[1].substring(0, 2);
            }
            numero = parseFloat(numero);
        }
        else
        {
            numero = parseInt(numero);
        }
        //// Fine - blocco preso da https://www.mrw.it/javascript/gestione-numeri-decimali-javascript_7048.html
    CostoScontatoPerTuttiIOver65Presenti = parseFloat(numero);   // riconversione stringa in numero    
    // FINE Parte2 - Totale Over65

// FINE - Prezzo Over65)
// FINE - operazioni di eliminazione dei numeri dopo la virgola (massimo due decimali, per indicare centesimi sul prezzo.)


        //Visualizzazione in HTML:
document.getElementById('DatiGenerali').innerHTML=
`
--------- Somma totale dei biglietti ---------- 
<br>
Numero Di Passeggeri: ${NumeroDeiPasseggeri}
<br>
Kilometri Da Percorrere: ${KmDaPercorrere}
<br>
Numero Di Minorenni Presenti: ${NumeroDeiMinorenni}
<br>
Numero Di Over65 Presenti: ${NumeroDegliOver65}
<br>
---------------------------------------- 
`;

if (NumeroDeiMinorenni !== 0) {
    document.getElementById('ScontoMinorenni').innerHTML=
    `
    - 20% di sconto minorenni (-${CostoScontatoPerSingoloMinorenne}Euro su ${NumeroDeiMinorenni} passeggeri Minorenni = ${CostoScontatoPerTuttiIMinorenniPresenti}Euro di sconto)
    `;
}
if (NumeroDegliOver65 !== 0) {
    document.getElementById('ScontoOver65').innerHTML=
    `
    - 40% di sconto Over65 (-${CostoScontatoPerSingoloOver65}Euro su ${NumeroDegliOver65} passeggeri Over65 = ${CostoScontatoPerTuttiIOver65Presenti}Euro di sconto)
    `;
}




document.getElementById('TotalePrezzo').innerHTML=
`
----------------------------------------
<br>
Importo totale dei biglietti : ${totale} Euro
`;



        // //Visualizzazione in HTML:


//ps: verificare se occorre la virgola in alcuni numeri che l'utente specifica

