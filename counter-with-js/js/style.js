let count = 0;
function plusIcon() {
    document.body.style.backgroundColor = 'green';

    count++;
    const counter = document.getElementById("count");
    counter.innerText = count;

}
const minusbtn = document.getElementById('minus-btn');
minusbtn.addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
    count--;
    const counter = document.getElementById("count");
    counter.innerText = count;
})