// Array
let bocker = ['The Dirt', 'Welcome to the Jungle', 'Long hard road out of hell', 'Heroin diaries'];
console.log('Första boken: ' + bocker[0]);
console.log('Sista boken: ' + bocker[bocker.length - 1]);
console.log('Alla böcker (a-ö): ' + bocker.sort());
console.log('Antal böcker: ' + bocker.length);

// Funktioner
function hello() {
    console.log('Hello World!')
}
hello(); hello(); hello(); hello(); hello();

// Beräkna summa
function summa(tal1, tal2) {
    return tal1 + tal2;
}
console.log(summa(3, 7));

function summa2(tal1, tal2, tal3) {
    return tal1 + tal2 + tal3;
}
console.log(summa2(9, 23, 39));

// Beräkna medelvärde
function medel(tal1, tal2) {
    return (tal1 + tal2) / 2;
}
console.log(medel(90, 110));

function medel2(tal1, tal2, tal3) {
    return (tal1 + tal2 + tal3) / 3;
}
console.log(medel2(180, 220, 200));

// swap-alogritm
let var1 = 532;
let var2 = 120;

function swap(tal1, tal2) {
    let temp = tal1;
    var1 = tal2;
    var2 = temp;
}
swap(var1, var2);

console.log('var1 = ' + var1);
console.log('var2 = ' + var2);

// Arbeta med objekt

let dator = {
    tillverkare: 'Lenovo',
    processor: 'Intel i7',
    ram: '16GB',
    os: 'Microsoft Windows 10'
}

console.log(dator);

// Objekt Fiat
let car = {
    name: 'Fiat',
    model: '500',
    weight: 850,
    color: 'White',
    start: function () {
        console.log(this.name + ' startar.');
    },
    drive: function () {
        console.log(this.name + ' kör.');
    },
    brake: function () {
        console.log(this.name + ' bromsar.');
    },
    stop: function () {
        console.log(this.name + ' stannar.');
    }
}
car.start();
car.drive();
car.brake();
car.stop();

// Objekt pokemon

let pokemon = {
    name: 'Picachu',
    type: 'Electric',
    health: 70,
    attack: function () {
        console.log(this.name + ' attacks!.');
    },
    dodge: function () {
        console.log(this.name + ' dodges!.');
    },
    evolve: function () {
        console.log(this.name + ' evolves!');
    }
}
pokemon.attack();
pokemon.dodge();
pokemon.evolve();

// Bilkonstruktor

function Car(regnr, fabrikat, vaxellada, miltal, tillverkningsar, bransle) {
    this.regnr = regnr;
    this.fabrikat = fabrikat;
    this.vaxellada = vaxellada;
    this.miltal = miltal;
    this.tillverkningsar = tillverkningsar;
    this.bransle = bransle;
}

let volvo = new Car('ABC123', 'Volvo', 'Manuell', 12345, 2015, 'Bensin');
let saab = new Car('XYZ789', 'Saab', 'Automat', 5432, 2017, 'Diesel');

console.log(volvo);
console.log(saab);

console.log('');

// Hundkonstruktor

function Dog(breed, size, age, color) {
    this.breed = breed;
    this.size = size;
    this.age = age;
    this.color = color;
    this.eat = function () { console.log(this.breed + ' eats!'); }
    this.sleep = function () { console.log(this.breed + ' sleeps!'); }
    this.sit = function () { console.log(this.breed + ' sits!'); }
    this.run = function () { console.log(this.breed + ' runs!'); }
}

let hund1 = new Dog('Napolitan Mastiff', 'Large', 5, 'Black');
let hund2 = new Dog('Maltese', 'Small', 2, 'White');
let hund3 = new Dog('Chow Chow', 'Medium', 3, 'Brown');
console.log(hund1);
console.log(hund2);
console.log(hund3);
hund1.eat();
hund2.sleep();
hund3.sit();
hund1.run();

// Funktion som ändrar första bokstaven i en sträng till stor bokstav

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1, str.length);
}
console.log(capitalize("sträng från helvetet"));


// Att skicka en array till max()

function maxArray(tal) {
    let max = 0;
    for (i = 0; i < tal.length; i++)
        if (tal[i] > max)
            max = tal[i];
    return max;
}
console.log(maxArray([1, 32, 3432, 54, 363, 23]));
console.log(maxArray([1, 32, 3432, 33454, 5363, 23]));


// Max och min maxMin()

function maxMin(tal) {
    let max = 0;
    let min = Number.MAX_VALUE;
    for (i = 0; i < tal.length; i++) {
        if (tal[i] > max)
            max = tal[i];
        if (tal[i] < min)
            min = tal[i];
    }
    return 'Max is: ' + max + '\nMin is: ' + min + '\n';
}
console.log(maxMin([1, 32, 3432, 54, 363, 23]));
console.log(maxMin([32, 23, 12, 5, 3432, 33454, 5363, 23]));

console.log('');

// Avståndsformeln

let x1 = 2;
let y1 = 5;
let x2 = -5;
let y2 = -10;

console.log(Math.sqrt( Math.pow(x2-x1,2) + Math.pow(y2-y1,2) ));
console.log('...');

// Arbeta med datum - Skriv ut datum i formatet YYMMDD

let datum = new Date();
let year = datum.getFullYear().toString().substring(2);
let month = ((datum.getMonth()+1).toString().length === 2) ? (datum.getMonth()+1).toString() : '0'+(datum.getMonth()+1);
let date = (datum.getDate()).toString().length === 2 ? datum.getDate().toString() : '0'+datum.getDate();
console.log(''+year+month+date);

// Visa klockan i formatet HH:nn:ss
console.log(datum.toTimeString().substr(0,8));

// Visa datum i formatet Fredag den 26 oktober 2018
let dag = ['Söndag','Måndag','Tisdag','Onsdag','Torsdag','Fredag','Lördag'];
let manad = ['januari','februari','mars','april','maj','juni','juli','augusti','september','oktober','november','december'];

console.log(dag[datum.getDay()] +' den ' + datum.getDate() +' '+ manad[datum.getMonth()] +' '+ datum.getFullYear());

