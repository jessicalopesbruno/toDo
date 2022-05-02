export function addTask(db, title = ""){
    // criando uma nova tarefa
    const task = document.createElement('div');
    // const id = Number(db.length) + 1;
    task.classList.add('task');
    task.setAttribute('id', db.id);

    const taskBody = `
        <div><input type="checkbox" id="check_${db.id}"></div>
            <div>
                <div><span class="title-task">${title?title:db.title}</span></div>
            </div>
        <div>Star</div>
        `;


    task.innerHTML = taskBody;
    document.querySelector(".tasks").appendChild(task);
}
    
export function removeTask(){
alert("Removendo uma nova tarefa")
}

export function updateTask(){
    alert("Alterando uma nova tarefa")
}

export function getAllTasks(x){
    x.forEach((item)=> {
        addTask(item);
    })
}

export function getTaskById(){
    alert("Exibindo uma tarefa")
}
