const todoForm = document.getElementById("todoAddForm");
const todoInput = document.getElementById("todoName"); 
const todoList = document.querySelector(".list-group");
const todoClear = document.getElementById("todoClearButton");
const todoListForm = document.getElementById("todoListForm")
const todoSearch = document.getElementById("todoSearch");

let todos = [];

runEvents();

function runEvents() {
    todoForm.addEventListener("submit", createTodo);
    todoList.addEventListener("click", deleteTodo);
    document.addEventListener("DOMContentLoaded", pageLoaded);
    todoClear.addEventListener("click",todoClearFull);
    todoSearch.addEventListener("keyup", todoFilter);
}

function pageLoaded() {
    checkTodoFromStorage();
    todos.forEach(function(todo) {
        addTodoUI(todo);
    });
}

// Todo Oluşturma
function createTodo(e) {
    const todoText = todoInput.value.trim(); 
    if (todoText === "" || todoText === null) {
        showAlert("warning", "Lütfen Todo Ekleyiniz!");
        return;
    } 
    // Arayüz
    else {
        addTodoUI(todoText);
        addTodoStorage(todoText);
        showAlert("success", "Todo Eklendi!");
    }
    
    // Storage Depolama
    e.preventDefault();
};

// Todo Yazdırma
function addTodoUI(newTodo) {
    const todo = document.createElement("li");
    todo.className = "list-group-item d-flex justify-content-between";
    todo.textContent = newTodo;

    const todoLink = document.createElement("a");
    todoLink.href = "#";
    todoLink.className = "delete-item";

    const todoIcon = document.createElement("i");
    todoIcon.className = "fa fa-remove";

    todoLink.appendChild(todoIcon);
    todo.appendChild(todoLink);

    const todoList = document.querySelector(".list-group");
    todoList.appendChild(todo);
    todoInput.value = "";
};

// Alert Gösterme
function showAlert(type,message) {
    const alert = document.createElement("div");
    const firstCardBody = document.querySelectorAll(".card-body")[0];
    alert.className = `alert mt-3 alert-${type}`;
    alert.textContent  = message;
    firstCardBody.appendChild(alert);

    setTimeout(function(){
        alert.remove();
    },1500);
}

//! Tüm Todoları Temizleme
function todoClearFull() {
    const todoLists = document.querySelectorAll(".list-group-item");
    if (todoLists.length > 0) {
        todoLists.forEach(function(todo) {
            todo.remove();
        });

        // Storage Delete
        todos = [];
        localStorage.setItem("todos", JSON.stringify(todos));
        showAlert("success", "Tüm liste temizlendi!")
    } else {
        showAlert("warning", "Silmek için en az bir değer olmalı!")
    }
}

// Todo Silme
function deleteTodo(e) {
    if (e.target.classList.contains("fa-remove")) {
       // UI Delete
       const todo = e.target.parentElement.parentElement;
       todo.remove();

       // Storage Delete
       removeTodoStorage(todo.textContent);
       showAlert("danger", "Todo Silindi!");

    }
}

function removeTodoStorage(removeTodo) {
    checkTodoFromStorage();
    todos.forEach(function(todo,index) {
        if (removeTodo === todo) {
            todos.splice(index,1);
        }
    }); 
    localStorage.setItem("todos",JSON.stringify(todos));
}


// Storage Ekleme

function addTodoStorage(newTodo) {
    checkTodoFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function checkTodoFromStorage() {
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}

// Filtreleme
function todoFilter(e) {
    const filterValue = e.target.value.toLowerCase().trim();
    const todoLists = document.querySelectorAll(".list-group-item");
    if (todoLists.length>0) {
        todoLists.forEach(function(todo) {
            if (todo.textContent.toLowerCase().trim().includes(filterValue)) {
                todo.setAttribute("style", "display : block");
            } else {
                todo.setAttribute("style", "display : none !important");
            }
        });

    }else {
        showAlert("warning", "Filtreleme yapılacak todo listesi boş!");
    }
} 