// This global variable holds the array of all TODO items.
let g_todoList = [];

// This will keep track of the number of list items that are done.
let doneListItems;

function TodoItem(text) {
  this.text = text;
  this.isDone = false;
  this.element = null;
}

TodoItem.prototype.display = function() {
  let containerId = this.text + "Container";
  let labelId = this.text + "Label";
  let spanId = this.text + "Span";

  let newItemContainer = document.createElement("LI");
  newItemContainer.setAttribute("id", containerId);

  this.element = newItemContainer;

  // This will add this.element to the list - you don't need to modify this.
  document.getElementById("todo-list").insertBefore(this.element, document.getElementById("new-item"));

  let newItemLabel = document.createElement("LABEL");
  newItemLabel.setAttribute("id", labelId);
  document.getElementById(containerId).appendChild(newItemLabel);

  let newItemSpan = document.createElement("SPAN");
  newItemSpan.setAttribute("id", spanId);
  newItemSpan.innerText = this.text;
  document.getElementById(labelId).appendChild(newItemSpan);

};

function addNewItem(text) {
  // each item is an object.
  let newListItem = new TodoItem(text);

  g_todoList.push(newListItem);
  console.log(g_todoList);

  newListItem.display();
}



document.addEventListener("DOMContentLoaded", function() {

  // The "add" button
  document.getElementById("new-item-add").addEventListener("click", function(event) {
    console.log("add button works");

    let item_text = document.getElementById("new-item-text").value;
    console.log(item_text);

    addNewItem(item_text);

  });
});

