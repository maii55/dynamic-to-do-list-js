document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-task');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim(); // Get and trim input value
    if (taskText === '') {
      alert('Please enter a task'); // Alert if input is empty
      return;
    }

    // Create list item and remove button
    const li = document.createElement('li');
    li.textContent = taskText;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn'); // Add class using classList.add

    // Add click event to remove button
    removeButton.onclick = () => {
      taskList.removeChild(li); // Remove the list item
    };

    // Append elements and clear input
    li.appendChild(removeButton);
    taskList.appendChild(li);
    taskInput.value = ''; // Clear input field
  }

  // Add event listeners
  addButton.addEventListener('click', addTask); // Call addTask on button click
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask(); // Call addTask on Enter key press
    }
  });
});
