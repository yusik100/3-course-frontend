// Завдання 1

document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const pibInput = document.getElementById('pib');
    const phoneInput = document.getElementById('phone');
    const idcardInput = document.getElementById('idcard');
    const bdateInput = document.getElementById('bdate');
    const emailInput = document.getElementById('email');

    const pibRegex = /^[А-ЯІЇЄҐа-яіїєґA-Za-z]+ [А-ЯІЇЄҐA-Z]\.[А-ЯІЇЄҐA-Z]\.$/;
    
    const phoneRegex = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
    
    const idcardRegex = /^[А-ЯІЇЄҐA-Z]{2} №\d{6}$/;

    const bdateRegex = /^\d{2}\.\d{2}\.\d{4}$/;

    const emailRegex = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+\.com$/;

    let hasErrors = false;

    function validateField(inputElement, regex) {
        if (!regex.test(inputElement.value)) {
            inputElement.classList.add('error');
            hasErrors = true;
        } else {
            inputElement.classList.remove('error');
        }
    }

    validateField(pibInput, pibRegex);
    validateField(phoneInput, phoneRegex);
    validateField(idcardInput, idcardRegex);
    validateField(bdateInput, bdateRegex);
    validateField(emailInput, emailRegex);

    if (!hasErrors) {
        const resultWindow = window.open('', '', 'width=400,height=300');
        const htmlContent = `
            <h3>Введена інформація:</h3>
            <p><b>ПІБ:</b> ${pibInput.value}</p>
            <p><b>Телефон:</b> ${phoneInput.value}</p>
            <p><b>ID-card:</b> ${idcardInput.value}</p>
            <p><b>Дата народж.:</b> ${bdateInput.value}</p>
            <p><b>e-mail:</b> ${emailInput.value}</p>
        `;
        resultWindow.document.body.innerHTML = htmlContent;
    }
});

// Завдання 2

const tableContainer = document.getElementById('table-container');
const colorPicker = document.getElementById('color-picker');

const TARGET_CELL_NUMBER = 9;
const table = document.createElement('table');
let cellCounter = 1;

for (let i = 0; i < 6; i++) {
    const tr = document.createElement('tr');
    
    for (let j = 0; j < 6; j++) {
        const td = document.createElement('td');
        td.textContent = cellCounter;
        td.dataset.row = i;
        td.dataset.col = j;
        
        if (cellCounter === TARGET_CELL_NUMBER) {
            
            td.addEventListener('mouseover', function() {
                const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                this.style.backgroundColor = randomColor;
            });

            td.addEventListener('click', function() {
                this.style.backgroundColor = colorPicker.value;
            });

            td.addEventListener('dblclick', function() {
                const startRow = parseInt(this.dataset.row);
                const colIndex = parseInt(this.dataset.col);
                const chosenColor = colorPicker.value;
                const allRows = table.querySelectorAll('tr');

                for (let r = startRow; r < 6; r += 2) {
                    const targetCell = allRows[r].querySelectorAll('td')[colIndex];
                    targetCell.style.backgroundColor = chosenColor;
                }
            });
        }
        
        tr.appendChild(td);
        cellCounter++;
    }
    table.appendChild(tr);
}

tableContainer.appendChild(table);