// http://127.0.0.1:3000/index.html

// Snack 1
// Creare un array di oggetti: 
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
const bikes =
[
    {
        name: 'Trek Madone SLR 9 Gen 8',
        weight: 7.05,
    },
    {
        name: 'Canyon Ultimate CFR LTD',
        weight: 6.72, 
    },
    {
        name: 'Cervelo R5',
        weight: 6.81,
    },
    {
        name: 'Pinarello F9',
        weight: 6.8, 
    },
    {
        name: 'Specialized Roubaix SL8 Pro',
        weight: 8.1,
    },
    {
        name: 'Bianchi Infinito',
        weight: 7.2, 
    },
    {
        name: 'Willier Filante SLR',
        weight: 6.8,
    },
    {
        name: 'Bmc Roadmachine 01 FOUR',
        weight: 7.9, 
    }
] // è un array di oggetti

let minBikeWeight = {weight: 1000} // oggetto vuoto 

for (const singleBike of bikes) {
    console.log(singleBike.name);
    console.log(singleBike.weight);

    if(singleBike.weight < minBikeWeight.weight){
        minBikeWeight = singleBike;
    }

}

console.log('La bici più leggera ha un peso di ' + minBikeWeight.weight + ' kg ed è la ' + minBikeWeight.name);

// Stampare a schermo la bici con peso minore.

const resultMessage = document.getElementById('snack-1');

resultMessage.innerHTML = 'La bici più leggera ha un peso di ' + minBikeWeight.weight + ' kg ed è la ' + minBikeWeight.name;











// Snack2
// Creare un array di oggetti di squadre di calcio. 
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. 
const footballTeams = 
[
    {
        name: 'Juventus',
        points: 0,
        foulsDone: 0,
        foulsReceived: 0,
    },
    {
        name: 'Milan',
        points: 0,
        foulsDone: 0,
        foulsReceived: 0,
    },
    {
        name: 'Inter',
        points: 0,
        foulsDone: 0,
        foulsReceived: 0,
    },
    {
        name: 'Fiorentina',
        points: 0,
        foulsDone: 0,
        foulsReceived: 0,
    },
    {
        name: 'Grosseto',
        points: 0,
        foulsDone: 0,
        foulsReceived: 0,
    },
    {
        name: 'Albinoleffe',
        points: 0,
        foulsDone: 0,
        foulsReceived: 0,
    },
    {
        name: 'Oratorio San Martino',
        points: 0,
        foulsDone: 0,
        foulsReceived: 0,
    },
    {
        name: 'Montelattaia',
        points: 0,
        foulsDone: 0,
        foulsReceived: 0,
    }
]

// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”. 

// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.