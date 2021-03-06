var todoInput = document.querySelector(".todo-input");
var todoBtn = document.querySelector(".todo-button");
var todoOutput = document.querySelector(".todo-output");
var filterOp =document.querySelector(".filter-todo");

todoBtn.addEventListener("click", addTask);
todoOutput.addEventListener("click", deleteCheck);
filterOp.addEventListener("click", filterTodo)


function addTask(event) {

    event.preventDefault();

    var todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-div");

    var todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    todoItem.innerText = todoInput.value
    todoDiv.appendChild(todoItem)

    var todoComplete = document.createElement("button");
    todoComplete.classList.add("todo-complete");
    todoComplete.innerHTML = '<i class =" fas fa-check-square" ></i>'
    todoDiv.appendChild(todoComplete)

    var todoTrash = document.createElement("button");
    todoTrash.classList.add("todo-trash");
    todoTrash.innerHTML = '<i class =" fas fa-trash" ></i>'
    todoDiv.appendChild(todoTrash)

    todoOutput.appendChild(todoDiv)
}

function deleteCheck(event) {
    var item = event.target;
    if (item.classList[0] === "todo-trash") {
        var todo = item.parentElement;

        todo.classList.add("fall");
        todo.addEventListener("transitionend", function(){
            todo.remove();
        })
        
    }

    if (item.classList[0] === "todo-complete") {
        var todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}


function filterTodo(event){
    var todos = todoOutput.childNodes;
    todos.forEach(function(todo){
        switch(event.target.value){
            case "all":
                todo.style.display= "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display= "flex";
                }
                else{
                    todo.style.display= "none"; 
                }
            case "incomplete":
                if(todo.classList.contains("incomplete")){
                    todo.style.display= "flex";
                }
                else{
                    todo.style.display= "none"; 
                }
        }
    });
}