
// salviamo tutti gli elementi dentro alle variabili costanti
const DOM_UL_FATHER = document.querySelector('#padre_item');
const DOM_BUTTON_PREV = document.querySelector('#but_prev');
const DOM_BUTTON_NEXT = document.querySelector('#but_next');
const DOM_BUTTONS_SELECT_IMG = document.querySelector('#buttons_down_select_img');

// creiamo delle array per salvataggio degli elementi da creare
const DOM_LI_ELEMENTS_CREATED = [];
const DOM_BUTTONS_ELEMENTS_CREATED = [];

// assegnamo la quantità di elementi da creare
const NUM_IMG_FOR_INSERT = 5;

// creaiamo una variabile di tipo number per usarlo come indice che cambiera sempre
let index_img = 0;

// numero di secondi per setInterval in milisecondi
const number_of_seconds = 3000;

// variabile per setInterval
let intervallo;
// funzione per setInterval
function GO_interval() {
    // creazione di un set interval per il passaggio automatico con un il range di 5s
    intervallo = setInterval(avvanzamentoDelleImg, number_of_seconds);
}
// chiammiamo la funzione setInterval
GO_interval();

// un for per la creazione del layout
for (let i = 0; i < NUM_IMG_FOR_INSERT; i++) {

    // creaiamo un elemento di tipo <li></li>
    const _li_create = document.createElement('li');
    // creaiamo un elemento di tipo <img>
    const _img_create = document.createElement('img');
    // creaiamo un elemento di tipo <button></button>
    const _button_create = document.createElement('button');

    // assegnamo classi di partenza agli elementi
    _li_create.className = 'item';
    _img_create.className = 'img-fluid';
    _button_create.className = 'selector_img';

    // assegnamo ai primi elementi creati le classi per l'attivazione
    if (i === 0) {
        _li_create.classList.add('active');
        _button_create.classList.add('active_img');
    }

    // assegnamo alla <img> creata al src il link da prender l'immagine
    _img_create.src = `./assets/img/0${i + 1}.jpg`;

    // pushamo dentro a una array per tenerla salvata
    DOM_LI_ELEMENTS_CREATED.push(_li_create);
    DOM_BUTTONS_ELEMENTS_CREATED.push(_button_create);

    // assegnamo un nuovo attributo all'elemento creato 
    _button_create.setAttribute('num', i);

    // appendiamo agli elementi nel DOM
    _li_create.append(_img_create);
    DOM_UL_FATHER.append(_li_create);
    DOM_BUTTONS_SELECT_IMG.append(_button_create);
}


// creazione di un for per tutti gli elementi button generati in precedenza
for (let i = 0; i < DOM_BUTTONS_ELEMENTS_CREATED.length; i++) {
    // al click ddi un qualsiasi button
    DOM_BUTTONS_ELEMENTS_CREATED[i].addEventListener('click', () => {

        // puliamo intervallo
        clearInterval(intervallo);
        // e lo riassegnamo
        GO_interval();

        // il nostro index_img e uguale al attributo del stesso pulsante
        index_img = parseInt(DOM_BUTTONS_ELEMENTS_CREATED[i].getAttribute('num'));

        // un for per tutti gli elementi button creati in precedenza
        for (let f = 0; f < DOM_LI_ELEMENTS_CREATED.length; f++) {
            // rimoviamo a tutti gli elementi le classi per l'attivazione
            DOM_LI_ELEMENTS_CREATED[f].classList.remove('active');
            DOM_BUTTONS_ELEMENTS_CREATED[f].classList.remove('active_img');
        }

        // inseriamo la classe per l'attivazione solo al elemento deciso dal index_img
        DOM_LI_ELEMENTS_CREATED[index_img].classList.add('active');
        DOM_BUTTONS_ELEMENTS_CREATED[index_img].classList.add('active_img');
    });
}


// al click del pulsante precedente
DOM_BUTTON_PREV.addEventListener('click', () => {

    // puliamo intervallo
    clearInterval(intervallo);
    // e lo riassegnamo
    GO_interval();

    // se index_img e maggiore del valore 0
    if (index_img > 0) {
        // rimuovi le classi per l'attivazione da quella presente
        DOM_LI_ELEMENTS_CREATED[index_img].classList.remove('active');
        DOM_BUTTONS_ELEMENTS_CREATED[index_img].classList.remove('active_img');

        // aggiungi le classi per l'attivazione a quella precedente
        DOM_LI_ELEMENTS_CREATED[index_img - 1].classList.add('active');
        DOM_BUTTONS_ELEMENTS_CREATED[index_img - 1].classList.add('active_img');

        // incrementiamo in meno di 1 l'index_img
        index_img--;
    }
    // ALTRIMENTI:
    else {
        // usiamo specifici numeri per la precisione per rimuovere nel nostro caso e = 0
        DOM_BUTTONS_ELEMENTS_CREATED[0].classList.remove('active_img');
        DOM_LI_ELEMENTS_CREATED[0].classList.remove('active');

        // usiamo specifici numeri per la precisione per aggiungere nel nostro caso la lunghezza del array degli elementi - 1
        DOM_BUTTONS_ELEMENTS_CREATED[DOM_LI_ELEMENTS_CREATED.length - 1].classList.add('active_img');
        DOM_LI_ELEMENTS_CREATED[DOM_LI_ELEMENTS_CREATED.length - 1].classList.add('active');

        // assegnamo al index_img il numero finale
        index_img = DOM_LI_ELEMENTS_CREATED.length - 1;
    }
});


// al click del pulsante prossegui
DOM_BUTTON_NEXT.addEventListener('click', () => {
    avvanzamentoDelleImg();
});

// creata una funzione esterna per poter riprenderla anche con setInterval
function avvanzamentoDelleImg() {

    // puliamo intervallo
    clearInterval(intervallo);
    // e lo riassegnamo
    GO_interval();

    // se index_img e minore del valore della lunghezza del array - 1
    if (index_img < DOM_LI_ELEMENTS_CREATED.length - 1) {
        // rimuovi le classi per l'attivazione da quella presente
        DOM_LI_ELEMENTS_CREATED[index_img].classList.remove('active');
        DOM_BUTTONS_ELEMENTS_CREATED[index_img].classList.remove('active_img');

        // aggiungi le classi per l'attivazione a quella che prossegue
        DOM_LI_ELEMENTS_CREATED[index_img + 1].classList.add('active');
        DOM_BUTTONS_ELEMENTS_CREATED[index_img + 1].classList.add('active_img');

        // incrementiamo in più di 1 l'index_img
        index_img++;
    }
    // ALTRIMENTI:
    else {
        // usiamo specifici numeri per la precisione per rimuovere nel nostro caso e la lunghezza del arrayi - 1
        DOM_LI_ELEMENTS_CREATED[DOM_LI_ELEMENTS_CREATED.length - 1].classList.remove('active');
        DOM_BUTTONS_ELEMENTS_CREATED[DOM_LI_ELEMENTS_CREATED.length - 1].classList.remove('active_img');

        // usiamo specifici numeri per la precisione per aggiungere nel nostro caso = 0
        DOM_LI_ELEMENTS_CREATED[0].classList.add('active');
        DOM_BUTTONS_ELEMENTS_CREATED[0].classList.add('active_img');

        // assegnamo al index_img il numero di inizio = 0
        index_img = 0;
    }
}