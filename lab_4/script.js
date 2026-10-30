const element10 = document.getElementById('element-10');
const element11 = document.querySelector('#element-11');

function toggleColors() {
    if (!this.classList.contains('color-variant-1') && !this.classList.contains('color-variant-2')) {
        this.classList.add('color-variant-1');
    } else {
        this.classList.toggle('color-variant-1');
        this.classList.toggle('color-variant-2');
    }
}

element10.addEventListener('click', toggleColors);
element11.addEventListener('click', toggleColors);

const buttonAdd = document.getElementById('add-pic');
const buttonIncrease = document.getElementById('increase');
const buttonDecrease = document.getElementById('decrease');
const buttonDelete = document.getElementById('delete-pic');

const photoLink = document.querySelector('#photo-wrapper a');

buttonAdd.addEventListener('click', () => {
    if (!document.getElementById('lviv-photo')) {
        const createdImg = document.createElement('img');
        createdImg.id = 'lviv-photo';
        createdImg.src = 'lviv.jpg';
        createdImg.alt = 'Фото міста Львів';
        createdImg.width = 900; 
        
        photoLink.appendChild(createdImg);
    }
});

buttonIncrease.addEventListener('click', () => {
    const targetImg = document.getElementById('lviv-photo');
    if (targetImg) {
        targetImg.width = targetImg.width + 50;
    }
});

buttonDecrease.addEventListener('click', () => {
    const targetImg = document.getElementById('lviv-photo');
    if (targetImg && targetImg.width > 50) {
        targetImg.width = targetImg.width - 50;
    }
});

buttonDelete.addEventListener('click', () => {
    const targetImg = document.getElementById('lviv-photo');
    if (targetImg) {
        targetImg.remove(); 
    }
});