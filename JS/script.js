// script.js
document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");
  
    let tasks = [];
  
    // Adiciona nova tarefa
    function addTask(task) {
      if (task.trim() === "") return;
      tasks.push({ text: task, completed: false });
      renderTasks();
      taskInput.value = "";
    }
  
    // Marca tarefa concluída
    function completeTask(index) {
      tasks[index].completed = !tasks[index].completed;
      renderTasks();
    }
  
    // Remove tarefa
    function deleteTask(index) {
      tasks.splice(index, 1);
      renderTasks();
    }
  
    // Renderiza lista de tarefas
    function renderTasks() {
      taskList.innerHTML = "";
      tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = task.completed ? "completed" : "";
  
        const taskText = document.createElement("span");
        taskText.textContent = task.text;
  
        const completeButton = document.createElement("button");
        completeButton.textContent = "Concluir";
        completeButton.className = "complete-btn";
        completeButton.onclick = () => completeTask(index);
  
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Excluir";
        deleteButton.onclick = () => deleteTask(index);
  
        li.appendChild(taskText);
        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
      });
    }
  
    // Clique pra adicionar tarefa
    addTaskButton.addEventListener("click", () => addTask(taskInput.value));
  
    // Permite pressionar "Enter" pra adicionar tarefa
    taskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") addTask(taskInput.value);
    });
  });
  