
const todoInput = document.querySelector('.todo-input');
const addBtn = document.querySelector('.add-btn');
const todoList = document.querySelector('.todo-list');


addBtn.addEventListener('click', () => {
    const taskText = todoInput.value.trim();

    
    if (taskText === '') {
        alert('Iltimos, matn kiriting!');
        return;
    }

    const li = document.createElement('li');
    
  
    li.textContent = taskText;

    const btnWrapper = document.createElement('span');
    btnWrapper.innerHTML = `<button class="delete-btn">Delete</button>`;
    li.append(btnWrapper);

    const deleteBtn = btnWrapper.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        li.remove(); 
    });

    todoList.append(li);

    todoInput.value = '';
});