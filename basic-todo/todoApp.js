const addTaskBtn = document.querySelector(".addTask");
const todoInput = document.querySelector(".todoInput");
const todos = document.querySelector(".todos");
const complateButton = document.querySelector("complateButton");
const deleteButton = document.querySelector("deleteButton");

const complateBtn = (e) => {
    e.currentTarget.parentElement.querySelector(".todoText").classList.toggle("complated");
};

const deleteBtn = (e) => {
    e.currentTarget.parentElement.remove();
}

const todoCreate = (todoText) => {
    const todoItemElement = document.createElement("li");
    todoItemElement.className = "todosItem";

    const textElement = document.createElement("p");
    textElement.className = "todoText"
    textElement.innerText = todoText;
    
    const complateButton = document.createElement("button");
    complateButton.clasName = "complateButton";
    complateButton.innerText= "Complate";
    complateButton.addEventListener("click", complateBtn)

    const deleteButton = document.createElement("button");
    deleteButton.clasName = "deleteButton";
    deleteButton.innerText= "Delete";
    deleteButton.addEventListener("click", deleteBtn)
    

    todoItemElement.appendChild(textElement);
    todoItemElement.appendChild(complateButton);
    todoItemElement.appendChild(deleteButton);
    todos.appendChild(todoItemElement)
    todoInput.value = "";
    todoInput.focus();
};

const addTask = () => {
    if (todoInput.value === "" || todoInput.value === null) {
        alert("To-do Giriniz!")
    } else {
        todoCreate(todoInput.value);
    }
};

addTaskBtn.addEventListener("click", addTask);



