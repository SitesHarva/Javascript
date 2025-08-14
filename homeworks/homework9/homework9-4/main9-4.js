let coursesAndDurationArray = [

    {title: 'JavaScript Complex', monthDuration: 5},

    {title: 'Java Complex', monthDuration: 6},

    {title: 'Python Complex', monthDuration: 6},

    {title: 'QA Complex', monthDuration: 4},

    {title: 'FullStack', monthDuration: 7},

    {title: 'Frontend', monthDuration: 4}

];

for (let el of coursesAndDurationArray) {
    let block = document.createElement('div');
    block.classList.add('item');

    let titleBlock = document.createElement('h1');
    titleBlock.classList.add('heading')
    titleBlock.innerText = el.title;
    
    let infoBlock = document.createElement('p');
    infoBlock.classList.add('descritpion');
    infoBlock.innerText = el.monthDuration;

    document.body.appendChild(block);
    block.appendChild(titleBlock);
    block.appendChild(infoBlock);
}
