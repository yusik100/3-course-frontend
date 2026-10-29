const element10 = document.getElementById('element-10');
const element11 = document.querySelector('#element-11');

element10.addEventListener('click', function() {
    this.classList.toggle('clicked-style-10');
});

element11.addEventListener('click', function() {
    this.classList.toggle('clicked-style-11');
});