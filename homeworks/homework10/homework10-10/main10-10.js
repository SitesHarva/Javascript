const objects = [];
const objectForPage = 10;
let currentPage = 0;

for (let i = 0; i <= 100; i++) {
    objects.push(i);
}

function showObjects() {
    let container = document.getElementById('objectsContainer');
    container.innerHTML = '';

    let start = currentPage * objectForPage;
    let end = start + objectForPage;

    for (let i = start; i < end && i < objects.length; i++) {
        let arrays = document.createElement('div');
        
        arrays.innerText = `object ${objects[i]}`;
        container.appendChild(arrays);
    }
}

function changeObjects(direction) {
    currentPage += direction;

    if (currentPage < 0) {
        currentPage = 0
    }
    if (currentPage > 9) {
        currentPage = 9
    }
    showObjects();
}
showObjects();

const prevButton = document.getElementById('prevBtn');
prevButton.onclick = function() {
    changeObjects(-1);
}

const nextButton = document.getElementById('nextBtn');
nextButton.onclick = function() {
    changeObjects(1);
}