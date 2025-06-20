const task =[];
const taskSave={};
function addTask() {
    const inputName = document.querySelector('.input-task');
    const inputDate = document.querySelector('.input-date');
    const name = inputName.value.trim();
    const date = inputDate.value;

    if (!name || !date) {
        alert("Please enter both task name and date.");
        return;
    }

    const taskWithDate = {
        name: name,
        date: date
    };


    task.push(taskWithDate);
    localStorage.setItem('taskList',JSON.stringify(task));
    inputName.value = '';
    inputDate.value = '';
    
    displayTodoList();
}

function displayTodoList(){
    let task_list = '';
    task.forEach(function(taskObject,i){
        task_list+=`<div>${taskObject.name}</div>
            <div>${taskObject.date}</div> 
            <button class="delete-button" onclick="deleteTask(${i})">Delete</button>`;
    });
    document.querySelector('.tasks').innerHTML = task_list;
}

function deleteTask(i){
    task.splice(i,1);
    localStorage.setItem('taskList',JSON.stringify(task));
    displayTodoList();
}

window.addEventListener('load',()=>{
    const storedTasks = localStorage.getItem('taskList');
    // console.log(typeof storedTasks);
    if(storedTasks){
        const parsedTasks = JSON.parse(storedTasks);
        console.log(parsedTasks);
        task.push(...parsedTasks);
        displayTodoList();
    }
});