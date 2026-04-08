const buttons = document.querySelectorAll('.task-btn');
const taskCounter = document.getElementById('taskCount'); // the 06 number
const completedCounter = document.getElementById('completedCount'); // the 23 number

buttons.forEach(btn => {
  btn.addEventListener('click', () => {

    // Disable button
    btn.disabled = true;
    btn.classList.add("opacity-50", "cursor-not-allowed");
    btn.textContent = "Completed";

    // Decrease task count (06 → 05 → 04 ...)
    let currentTasks = parseInt(taskCounter.textContent);
    if (currentTasks > 0) {
      taskCounter.textContent = currentTasks - 1;
    }

    // Increase completed count (23 → 24 → 25 ...)
    let completed = parseInt(completedCounter.textContent);
    completedCounter.textContent = completed + 1;

    // Success alert
    alert("Board updated successfully");
  });
});
