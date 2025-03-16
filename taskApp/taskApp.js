const taskList = document.querySelector("#task-list");
const inputButton = document.getElementById("inButton");
const todoValue = document.getElementById("todoValue");
const clearButton = document.getElementById("clearButton");
const card = document.querySelector(".card:nth-child(3)");
const filterButtons = document.querySelectorAll(".filter-btn");

let todos = [];

const todoCreate = (e) => {
    const newTodo = todoValue.value;
    if (newTodo === null || newTodo === "") {
        showAlert("warning","Lütfen Boş Bırakmayınız!")
    } else {
        addTodoUI(newTodo);
        addTodoStorage(newTodo);
        showAlert("success","Görev Başarıyla Eklendi!")
        todoValue.focus();
        card.style.display = "block";
    }
    e.preventDefault();
};

const addTodoUI = (newTodo, checked = false) => {
    const taskItem = document.createElement("li");
    taskItem.className = "task list-group-item";
    
    const formCheck = document.createElement("div");
    formCheck.className = "form-check";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.className = "form-check-input";
    input.checked = checked;
    input.addEventListener("change", updateTodoStatus);
    
    const label = document.createElement("label");
    label.className = "form-check-label";
    label.innerHTML = newTodo;
    if (checked) {
        label.style.textDecoration = "line-through";
    }

    formCheck.appendChild(input);
    formCheck.appendChild(label);
    taskItem.appendChild(formCheck);
    taskList.appendChild(taskItem);
    todoValue.value = "";
};

const addTodoStorage = (newTodo) => {
    checkStorage();
    todos.push({ text: newTodo, checked: false });
    localStorage.setItem("todos", JSON.stringify(todos));
};

const checkStorage = ()  => {
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
};

const loadTodos = () => {
    checkStorage();
    if (todos.length === 0) {
        card.style.display = "none";
    } else {
        card.style.display = "block";
        todos.forEach(todo => addTodoUI(todo.text, todo.checked));
    }
};

const clearList = () => {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    localStorage.removeItem("todos");
    todos = [];
    card.style.display = "none";
    showAlert("danger","Tüm Görevler Silindi!")
};


const showAlert = (type,message)  => {
    const cardHeader = document.querySelector(".card-header")
    const div = document.createElement("div");
    div.className = `alert alert-${type} mt-3`
    div.innerText = message;
    cardHeader.appendChild(div);

    setTimeout(function () {
        div.remove();
    },2500);
};

const filterTasks = (filter) => {
    const tasks = document.querySelectorAll(".task");
    tasks.forEach(task => {
        const checkbox = task.querySelector(".form-check-input");
        const label = task.querySelector(".form-check-label");
        switch (filter) {
            case "all":
                task.style.display = "block";
                break;
            case "completed":
                task.style.display = checkbox.checked ? "block" : "none";
                break;
            case "pending":
                task.style.display = !checkbox.checked ? "block" : "none";
                break;
        }
    });
};

const updateTodoStatus = (e) => {
    const label = e.target.nextElementSibling;
    const todoText = label.innerText;
    todos = todos.map(todo => {
        if (todo.text === todoText) {
            todo.checked = e.target.checked;
        }
        return todo;
    });
    localStorage.setItem("todos", JSON.stringify(todos));
    label.style.textDecoration = e.target.checked ? "line-through" : "none";
};



runEvent();
loadTodos();

function runEvent() {
    inputButton.addEventListener("click", todoCreate);
    todoValue.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            todoCreate(event);
        }
    });
    clearButton.addEventListener("click", clearList);
    filterButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            filterTasks(e.target.dataset.filter);
        });
    });
};