document.addEventListener("DOMContentLoaded", () => {
});

function añadir_1 (a) {
    const input = a.previousElementSibling;
    const lista = input.previousElementSibling;
    const li = document.createElement('li');
    li.innerHTML += input.value;;
    lista.appendChild(li);
    input.value = '';
    input.focus();
}
function añadir_2 (a) {
    const input = a.previousElementSibling;
    const textArea = a.nextElementSibling;
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    const p = document.createElement('p');
    const lista = input.previousElementSibling;
    h4.innerHTML += input.value;
    p.innerHTML = textArea.value;
    div.appendChild(h4);
    div.appendChild(p);
    lista.appendChild(div);
    input.value = '';
    input.focus();
    textArea.value = '';
    textArea.focus();
}
