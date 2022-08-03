
// creiamo le variabili
const numbers_js = [];
const numbers_user = [];
const number_guessed = [];
let score = 0;


// una while per generare numeri random
while (numbers_js.length < 5) {

    // una variabile con il numero random generato
    const num = number_random_generator(10, 99);

    // SE il numero non e incluso nel array
    if (!numbers_js.includes(num)) {
        // pusciamo il numero
        numbers_js.push(num);
    }
}


// attiviamo una alert
alert(numbers_js.join(', '));


// con setTimeout chiamiamo la funzione dopo 30 seccondi
setTimeout(controls_numbers, 300);


function controls_numbers() {

    // un loop per il completamento del numeri utente
    while (numbers_user.length < numbers_js.length) {

        // un prompt per prendere il valore del utente
        const number = parseInt(prompt('Inserisci qui un solo numero, per favore'));

        // SE il valore e un intero
        if (!isNaN(number)) {

            // pusciamo il valore del utente in un array
            numbers_user.push(number);

            // SE il numero e incluso nel array dei numeri da indovinare e se i numeri indovinati non si trovano nel array dei indovinati
            if (numbers_js.includes(number) && !number_guessed.includes(number)) {

                // score + 1
                score++;

                // pusciamo nel array numeri indovinati
                number_guessed.push(number);
            }
        }
    }

    // un console log per il score
    console.log(`Il tuo score è di ${score},`);

    // un console log per i numeri da indovinare
    console.log(`i numeri da indovinare sono ${numbers_js.join(', ')}`);

    // un console log per i numeri indovinati
    // SE il numero e maggiore di 1
    if (number_guessed.length > 1) {

        // prendi l'ultimo valore del array
        const ultimo = number_guessed.pop();

        // LOG
        console.log(`è TU hai indovinato ${number_guessed.join(', ')} è ${ultimo},`);

    }
    // ALTRIMENTI:
    // SE la lunghezza del array e < o =
    else if (number_guessed.length <= 0) {

        // LOG
        console.log(`è TU NON hai indovinato neanche uno`);

    }
    // ALTRIMENTI:
    else {

        // LOG
        console.log(`è TU hai indovinato solo ${number_guessed.join(', ')},`);

    }

    // LOG
    console.log(`questi sono i numeri che hai inserito ${numbers_user.join(', ')}`);
}

// funzione per i numeri random da min a max
function number_random_generator(min, max) {

    // ritorno del valore
    return Math.floor(Math.random() * (max - min + 1)) + min;
}