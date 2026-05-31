const todoList = [];
function AddTodo() { 
    const newTask=prompt("Enter the new task:");


if(newTask!==null && newTask.trim()!==""){
    const nTask=newTask.trim()
 todoList.push(nTask);

 const ul=document.getElementById("todo-list");

 const li=document.createElement("li");
 li.textContent= nTask;

 li.classList.add("todo-item-box");
 ul.appendChild(li);
}
else{
 alert("Task cannot be empty");
}

}