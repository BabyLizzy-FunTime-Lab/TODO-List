// This global variable holds the array of all TODO items.
let g_todoList = [];

// This keeps track of the number of list items that are done.
let doneListItems;

function TodoItem(text) {
  this.text = text;
  this.isDone = false;
  this.element = null;
}

TodoItem.prototype.display = function() {
  let newItem_container = document.createElement("li");
  newItem_container.setAttribute("id", "item-container");

  let newItem_Label = document.createElement("label");
  document.getElementById("item-container").appendChild("")



  this.element = /* TODO */null;

  // This will add this.element to the list - you don't need to modify this.
  document.getElementById("todo-list").insertBefore(this.element, document.getElementById("new-item"));
};

