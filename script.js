document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-task');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  function addTask(taskText, save = true) {
    const text = taskText || taskInput.value.trim(); // Use provided text or input value
    if (text === '') {
      alert('Please enter a task');
      return;
    }

    // Create list item and remove button
    const li = document.createElement('li');
    li.textContent = text;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');

    // Add click event to remove button
    removeButton.onclick = () => {
      taskList.removeChild(li);
      // Update Local Storage after removal
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      const updatedTasks = storedTasks.filter(task => task !== text);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    // Append elements and clear input
    li.appendChild(removeButton);
    taskList.appendChild(li);
    if (save) {
      taskInput.value = ''; // Clear input only for new tasks
      // Save to Local Storage
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(text);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
  }

  // Function to load tasks from Local Storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // Don't save when loading
  }

  // Load tasks on page load
  loadTasks();

  // Add event listeners
  addButton.addEventListener('click', () => addTask());
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
