const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const li = document.createElement('li');
    
    li.textContent = input.value;
    
    const deleteButton = document.createElement('button');
    
    deleteButton.textContent = 'Elimina';

    deleteButton.classList.add('delete-button');
    
    deleteButton.addEventListener('click', function() {
        list.removeChild(li);
    });
    
    li.appendChild(deleteButton);
    
    list.appendChild(li);
    
    input.value = '';
});
