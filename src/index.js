const todoList = [];
function addTodo() {
    
      const input=document.getElementById("todo-input");
      const newTask=input.value.trim();
    if (newTask === null) {
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