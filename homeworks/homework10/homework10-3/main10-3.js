let form = document.forms.form;
let sendButton = form.submit;

sendButton.addEventListener('click', function (e) {
    e.preventDefault();

    const infoBlock = document.createElement('div');

    let nameValue = form.name.value;
    let surnameValue = form.surname.value;
    let ageValue = form.age.value;

    let object = {nameValue, surnameValue, ageValue};
    console.log(object);

    infoBlock.innerText = `name:    ${object.nameValue}, surname:   ${object.surnameValue}, age:    ${object.ageValue}`;
    document.body.appendChild(infoBlock);
});