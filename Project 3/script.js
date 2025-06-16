// DOM Elements
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const dueDateInput = document.getElementById('due-date');
const filterSelect = document.getElementById('filter');
const clearAllBtn = document.getElementById('clear-all');

// Initialize the app
window.addEventListener('load', loadTasks);

// Add Task Functionality
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const taskItem = document.createElement('li');
    const dueDate = dueDateInput.value;
    
    taskItem.innerHTML = `
      <span>${taskText}</span>
      ${dueDate ? `<span class="due-date">Due: ${dueDate}</span>` : ''}
      <button class="complete-btn">✓</button>
      <button class="delete-btn">✗</button>
    `;
    
    // Add completion toggle
    const completeBtn = taskItem.querySelector('.complete-btn');
    completeBtn.addEventListener('click', () => {
      taskItem.classList.toggle('completed');
      saveTasks();
    });
    
    // Add delete functionality
    const deleteBtn = taskItem.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
      taskList.removeChild(taskItem);
      saveTasks();
    });
    
    taskList.appendChild(taskItem);
    taskInput.value = '';
    dueDateInput.value = '';
    saveTasks();
  }
}

addBtn.addEventListener('click', addTask);

// Filter Tasks
filterSelect.addEventListener('change', (e) => {
  const tasks = document.querySelectorAll('li');
  tasks.forEach(task => {
    const showAll = e.target.value === 'all';
    const showActive = e.target.value === 'active' && !task.classList.contains('completed');
    const showCompleted = e.target.value === 'completed' && task.classList.contains('completed');
    task.style.display = (showAll || showActive || showCompleted) ? 'flex' : 'none';
  });
});

// Clear All Tasks
clearAllBtn.addEventListener('click', () => {
  taskList.innerHTML = '';
  localStorage.removeItem('tasks');
});

// Local Storage Functions
function saveTasks() {
  const tasks = [];
  document.querySelectorAll('li').forEach(task => {
    tasks.push({
      text: task.querySelector('span').textContent,
      completed: task.classList.contains('completed'),
      dueDate: task.querySelector('.due-date')?.textContent.replace('Due: ', '')
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  savedTasks.forEach(task => {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <span>${task.text}</span>
      ${task.dueDate ? `<span class="due-date">Due: ${task.dueDate}</span>` : ''}
      <button class="complete-btn">✓</button>
      <button class="delete-btn">✗</button>
    `;
    if (task.completed) taskItem.classList.add('completed');
    taskList.appendChild(taskItem);
    
    // Reattach event listeners to loaded tasks
    taskItem.querySelector('.complete-btn').addEventListener('click', () => {
      taskItem.classList.toggle('completed');
      saveTasks();
    });
    
    taskItem.querySelector('.delete-btn').addEventListener('click', () => {
      taskList.removeChild(taskItem);
      saveTasks();
    });
  });
}

// Allow adding tasks with Enter key
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});