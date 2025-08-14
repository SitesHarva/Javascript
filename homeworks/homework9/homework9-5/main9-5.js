let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


for (let item of coursesArray) {
    let block = document.createElement('div');
    let title = document.createElement('h3');
    title.innerText = item.title;

    let durationPart = document.createElement('div');
    durationPart.classList.add('durationPart');
    let modules = document.createElement('div');
    let modulesList = document.createElement('ul');

    for (let module of item.modules) {
        let moduleItem = document.createElement('li');
        moduleItem.innerText = module;
        modulesList.appendChild(moduleItem);
    }

    let monthD = document.createElement('p');
    monthD.innerText = item.monthDuration;

    let hourD = document.createElement('p');
    hourD.innerText = item.hourDuration;

    document.body.appendChild(block);
    durationPart.append(monthD, hourD);
    modules.appendChild(modulesList);
    block.append(title, durationPart, modules);
}