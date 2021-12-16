




document.getElementById('btn').addEventListener('click', createListElement)
var list = document.getElementById('ul')
let todolist = []
function createListElement() {
    var enteredText = document.getElementById('todoinput').value
    if(enteredText === ''){
        alert('Please enter a todo')
    } else {
    if (todolist.includes(enteredText)) {
        if (confirm('Todo already exists, you still want to add it?')) {
            addTodo(enteredText)
        }
    } else {
        addTodo(enteredText)
        todolist.push(enteredText)
    }
}

}

function removeItem() {
    console.log('change')
    this.parentNode.remove();
}

function addTodo(value) {
    var li = document.createElement("li");
    li.innerHTML = value
    list.appendChild(li)
    var deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "delete");
    deleteButton.appendChild(document.createTextNode("Delete"));
    ul > li.appendChild(deleteButton).addEventListener("click", removeItem);
}

