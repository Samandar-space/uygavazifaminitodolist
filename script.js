
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');


addBtn.addEventListener('click', () => {
    const taskText = todoInput.value.trim();

    // Input bo'sh bo'lsa, element qo'shmaymiz
    if (taskText === '') {
        alert('Iltimos, matn kiriting!');
        return;
    }

    // 1. createElement() yordamida yangi ro'yxat elementi (li) yaratamiz
    const li = document.createElement('li');
    
    // Vazifa matnini kiritamiz
    li.textContent = taskText;

    // 2. innerHTML orqali element yoniga "Delete" tugmasini qo'shamiz
    const btnWrapper = document.createElement('span');
    btnWrapper.innerHTML = `<button class="delete-btn">Delete</button>`;
    li.append(btnWrapper);

    // O'chirish tugmasiga hodisa (event) biriktiramiz
    const deleteBtn = btnWrapper.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        li.remove(); // Elementni o'chirish
    });

    // 1. append() yordamida yaratilgan li elementini ul ichiga joylaymiz
    todoList.append(li);

    // Kiritish maydonini tozalaymiz
    todoInput.value = '';
});