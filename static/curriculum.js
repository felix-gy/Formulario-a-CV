document.addEventListener("DOMContentLoaded", () => {
    document.querySelector()
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
