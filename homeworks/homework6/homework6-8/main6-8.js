let coursesAndDurationArray = [

    {title: 'JavaScript Complex', monthDuration: 5},

    {title: 'Java Complex', monthDuration: 6},

    {title: 'Python Complex', monthDuration: 6},

    {title: 'QA Complex', monthDuration: 4},

    {title: 'FullStack', monthDuration: 7},

    {title: 'Frontend', monthDuration: 4}

];

function sortMonths(arr) {
        let sortedId = arr.map((value, index) => ({...value, id: index + 1}));
        console.log(sortedId);

        let sort = arr.filter(value => value.monthDuration > 5);
        sort.map((value, index) => {
            value.id = index;
            return value;
        })
        console.log(sort);
        
        return arr.sort((a, b) => b.monthDuration - a.monthDuration);
}
console.log(sortMonths(coursesAndDurationArray));