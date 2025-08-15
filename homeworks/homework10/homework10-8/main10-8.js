const table = document.getElementById('table');
const generatorForms = document.forms.generatorForm;

const tableGenerator = generatorForms;

tableGenerator.onsubmit = function(e) {
    table.innerText = '';
    e.preventDefault();
    const linesValue = +generatorForms.lines.value;
    const cellsValue = +generatorForms.cells.value;
    const dataValue = generatorForms.data.value;

    for (let i = 0; i < linesValue; i++) {
        const tr = document.createElement('tr'); 
        for (let k = 0; k < cellsValue; k++) {
            const td = document.createElement('td'); 
            td.innerText = dataValue;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}