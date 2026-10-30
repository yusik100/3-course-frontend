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