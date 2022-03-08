const form = document.getElementById('form');
const listElement = document.querySelector('ul');
const inputElement = document.getElementById('enter-todo');
const addButton = document.getElementById('add-button');

function addButtonHandler(event) {
  event.preventDefault();
  const todo = inputElement.value;
  if (todo) {
    const todoElement = document.createElement('li');
    todoElement.append(todo);
    listElement.append(todoElement);
    inputElement.value = '';
  }

  registerHoverListeners();
  registerRemoveListeners();
}

function hoverHandler(event) {
  event.target.classList.toggle('todo-done');
}

function deleteHandler(li) {
  li.preventDefault();
  li.target.remove();
}

addButton.addEventListener('click', addButtonHandler);

function registerHoverListeners() {
  listElement
    .querySelectorAll('li')
    .forEach((element) => element.addEventListener('click', hoverHandler));
}

function registerRemoveListeners() {
  listElement
    .querySelectorAll('li')
    .forEach((element) =>
      element.addEventListener('contextmenu', deleteHandler)
    );
}

registerHoverListeners();
registerRemoveListeners();
