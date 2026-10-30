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