const task =[];
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

    inputName.value = '';
    inputDate.value = '';
    
    displayTodoList();
}

function displayTodoList(){
    let task_list = '';
    for(let i = 0 ; i<task.length; i++){
        taskobject = task[i];
        task_list+=`<div>${taskobject.name}</div>
            <div>${taskobject.date}</div> 
            <button class="delete-button" onclick="deleteTask(${i})">Delete</button>`;    

    }
    document.querySelector('.tasks').innerHTML = task_list;
}

function deleteTask(i){
    task.splice(i,1);
    displayTodoList();
}

