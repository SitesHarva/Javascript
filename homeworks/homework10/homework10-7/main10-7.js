function addToLocalStorage(arrayName, objToAdd) {
    let item = localStorage.getItem(arrayName);
    if (!item) {
        throw new Error('немає масиву');
    } 
    let array = JSON.parse(item);
    if (typeof objToAdd === 'object') {
        array.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(array));
}
addToLocalStorage('sessionList', {});