let array = ['Main','Products','About us','Contacts'];

let ul = document.createElement('ul');
document.body.appendChild(ul);

for (let item of array) {
    let li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
}