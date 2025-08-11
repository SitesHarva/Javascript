Array.prototype.forEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i])
    }
};

[100, 500, 1000, 5000, 10000].forEach(i => console.log(i));


Array.prototype.filter = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])){
            result.push(this[i])
        }
    }
    return result;
};

let filteredNumbers = [100, 500, 1000, 5000, 10000].filter(i => i > 2000);
console.log(filteredNumbers);