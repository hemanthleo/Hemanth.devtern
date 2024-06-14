document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const dateInput = document.getElementById('date-input');
    const taskList = document.getElementById('task-list');
  
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      addTask(taskInput.value, dateInput.value);
      taskInput.value = '';
      dateInput.value = '';
    });
  
    function addTask(task, date) {
      const li = document.createElement('li');
  
      li.innerHTML = `
        <span>${task} - ${date}</span>
        <div>
          <button class="complete-btn">Complete</button>
          <button class="delete-btn">Delete</button>
        </div>
      `;
  
      const completeBtn = li.querySelector('.complete-btn');
      const deleteBtn = li.querySelector('.delete-btn');
  
      completeBtn.addEventListener('click', () => {
        li.classList.toggle('completed');
      });
  
      deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
      });
  
      taskList.appendChild(li);
    }
  });
  