let todoList = [
  {
    item: "buy milk",
    dueDate: "9/4/2025",
  },
  {
    item: "go to college",
    dueDate: "9/4/2025",
  },
];
displayItems();

function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let dateElement = document.querySelector("#todo-date");
  let todoItem = inputElement.value;
  let tododate = dateElement.value;
  todoList.push({item:todoItem,dueDate:tododate});
  inputElement.value = '';
  dateElement.value = '';

  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector(".todo-container");
  let newHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    let item = todoList[i].item;
    let dueDate = todoList[i].dueDate;

    newHtml += `
      <div>
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class="btn-todo" onclick="todoList.splice(${i},1); displayItems();">Delete</button>
      </div>
    
    
    `;
  }
  containerElement.innerHTML = newHtml;
}
