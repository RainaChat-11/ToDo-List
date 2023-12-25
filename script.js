const input = document.querySelector(".input-box");
const button = document.querySelector(".add-button");
const todolist = document.querySelector(".todo-list");

button.addEventListener("click", addToDo);
todolist.addEventListener("click", deleteToDo);

function addToDo(e) 
{
    e.preventDefault();

    const todoDiv = document.createElement('div'); // Use document.createElement instead of document.createDocumentFragment
    todoDiv.classList.add("todo-container");

    const todoItem = document.createElement('li'); // Use document.createElement instead of document.createDocumentFragment
    todoItem.classList.add("todo-item");
    todoItem.innerText = input.value;
    todoDiv.appendChild(todoItem);

    const deleteButton = document.createElement('button'); // Use document.createElement instead of document.createDocumentFragment
    deleteButton.classList.add("delete-btn");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    todoDiv.appendChild(deleteButton);

    const completeButton = document.createElement('button'); // Use document.createElement instead of document.createDocumentFragment
    completeButton.classList.add("complete-btn");
    completeButton.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    todoDiv.appendChild(completeButton);

    todolist.appendChild(todoDiv); // Use todolist instead of todoDiv to append to the list
    input.value = "";
}

function deleteToDo(event){

    const item = event.target;
    if(item.classList[0] === "delete-btn")
    {
        const delItem = item.parentElement;
        delItem.remove();
    }
    if(item.classList[0] === "complete-btn")
    {
        const delItem = item.parentElement;
        delItem.classList.toggle("completed");
    }
}