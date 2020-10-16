document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector("h1")
    title.textContent = "Alfred rules"

    const redListItem = document.querySelector('li.red');
    redListItem.textContent = "ALFRED";
    redListItem.classList.add('bold');
    console.dir(redListItem);

    const newListItem = document.createElement('li');
    newListItem.textContent = "Purple";
    newListItem.classList.add('purple');
    console.log(newListItem)

    const list = document.querySelector('ul');
    list.appendChild(newListItem);
});