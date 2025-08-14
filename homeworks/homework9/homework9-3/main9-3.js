let coursesAndDurationArray = [

    {title: 'JavaScript Complex', monthDuration: 5},

    {title: 'Java Complex', monthDuration: 6},

    {title: 'Python Complex', monthDuration: 6},

    {title: 'QA Complex', monthDuration: 4},

    {title: 'FullStack', monthDuration: 7},

    {title: 'Frontend', monthDuration: 4}

];

for (let item of coursesAndDurationArray) {
    let block = document.createElement('div');
    block.innerText = `${item.title} ${item.monthDuration}`
    document.body.appendChild(block);
}
