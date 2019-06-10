function createTodoItem(title) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classname = 'checkbox';

    const label = document.createElement('label');
    label.innerText = title;
    label.classname = 'title';

    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.classname = 'textfield';

    const editButton = document.createElement('button');
    editButton.innerText = 'Изменить';
    editButton.classname = 'edit';

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Удалить';
    deleteButton.classname = 'delete';

    const listItem = document.createElement('li');
    listItem.classname = 'todo-item';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return listItem;
}

function addTodoItem(event) {
    event.preventDefault();

    if (addInput.value === '') return alert('Zadacha name');

    const todoItem = createTodoItem(addInput.value);
    todoList.appendChild(todoItem);
    addInput.value = '';
}

const todoForm = document.getElementById('todo-form');
const addInput = document.getElementById('add-input');
const todoList = document.getElementById('todo-list');
const todoItems = document.querySelectorAll('.todo-item');

todoForm.addEventListener('submit', addTodoItem);