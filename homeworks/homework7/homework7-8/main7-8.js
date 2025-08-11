class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let CinderellaArray = [
    new Cinderella('vanya', 19, 36),
    new Cinderella('vanya', 29, 37),
    new Cinderella('vanya', 49, 45),
    new Cinderella('vanya', 19, 34),
    new Cinderella('vanya', 29, 40),
    new Cinderella('vanya', 59, 38),
    new Cinderella('vanya', 38, 37),
    new Cinderella('vanya', 25, 36),
    new Cinderella('vanya', 20, 35),
    new Cinderella('vanya', 31, 39),
];

class Prince {
    constructor(name, age, foundSize) {
        this.name = name;
        this.age = age;
        this.footSize = foundSize
    }
}

let prince = new Prince('petya', 25, 35);

for (let size of CinderellaArray) {
    if (size.footSize === prince.footSize) {
        console.log(`Принц ${prince.name} знайшов попелюшку ${size.name}`);
    }
}

let foundCinderella = CinderellaArray.find(size => size.footSize === prince.footSize);
if (foundCinderella) {
    console.log(`принц ${prince.name} знайшов попелюшку ${foundCinderella.name}`);
}