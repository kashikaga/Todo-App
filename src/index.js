const todoList = [];
function addTodo() {
    const newTask = prompt("Enter the new task:");

    if (newTask === null || newTask.trim() === "") {
        alert("Task cannot be empty");
        return;
    }


    const nTask = newTask.trim()
    todoList.push(nTask);

    const ul = document.getElementById("todo-list");

    const li = document.createElement("li");
    li.textContent = nTask;
    li.classList.add("todo-item-box");

    const del= document.createElement("button");
    del.textContent="-";
    del.classList.add("delete-btn");
    
    del.onclick= function(){
        const index=todoList.indexOf(nTask);
        if(index !== -1){
            todoList.splice(index, 1);
        }

        li.remove();
    };

    li.appendChild(del);
    
    ul.appendChild(li);


}