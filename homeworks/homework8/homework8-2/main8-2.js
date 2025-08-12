function copyObj(obj) {
    for (let e in obj) {
        if (obj[e] === undefined) {
            console.log('в обєкті є поле undefined');
            return;
        } else if ((Number.isNaN(obj[e]))) {
            console.log('в обєкті є поле NaN');
            return;
        } else if (obj[e] === null) {
            console.log('в обєкті є поле null');
            return;
        } 
    }

    let copy = {};

    for (let key in obj) {
        if (typeof obj[key] === 'function') {
            copy[key] = obj[key];
        } else {
            copy[key] = obj[key];
        }
    }
    console.log(copy);

        // let object = JSON.stringify(obj);
        // let parsedObj = JSON.parse(object);
        // console.log(parsedObj);
    
}
copyObj({name: 'vasya', age: '31', greetings() {return 'hello'}});
copyObj({name: 'vasya', age: undefined});
copyObj({name: 'vasya', age: null});
copyObj({name: 'vasya', age: NaN});
