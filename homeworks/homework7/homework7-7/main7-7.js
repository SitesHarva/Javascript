class Builder{
    constructor(model, creator, year, maxSpeed, hp) {
        this.model = model;
        this.creator = creator;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.hp = hp;
}
    drive () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    info () {
        for (let key in this) {
            console.log(key, this[key]);
        }
    };
    increaseMaxSpeed (newSpeed) {
        if (newSpeed > 0) this.maxSpeed = this.maxSpeed + newSpeed;
    };
    changeYear (newYear) {
        if (newYear > 1815) this.year = newYear;
    };
    addDriver (driverObj) {
        if (driverObj) this.driver = driverObj;
    };
}
let car = new Builder('tesla', 'Musk', 2025, 300, 1000);
car.drive();
car.info();
car.increaseMaxSpeed(10);
car.changeYear(1991);
car.addDriver({});
console.log(car);

