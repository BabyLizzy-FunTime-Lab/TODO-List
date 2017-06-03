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
  let containerClass = this.text + "Container";

  // I gave the new list item container a class name for better readability in the browser. 
  let newItemContainer = document.createElement("LI");
  newItemContainer.setAttribute("class", containerClass);

  // this.element is overwriten to include the new list item container. 
  this.element = newItemContainer;

  // This adds the new list element (newItemContainer) above the input box.
  document.getElementById("todo-list").insertBefore(this.element, document.getElementById("new-item"));

  // Now that the new list item cobtainer exist in the DOM we can load it with a label and a span.
  let newItemLabel = document.createElement("LABEL");
  newItemContainer.appendChild(newItemLabel);

  let newItemSpan = document.createElement("SPAN");
  newItemSpan.innerText = this.text;
  newItemLabel.appendChild(newItemSpan);
};

function addNewItem(text) {
  // each new list item is a new object.
  let newListItem = new TodoItem(text);

  // each new list item is pushed into the g_todoList variable array.
  g_todoList.push(newListItem);

  // The new object is now made visible with it's own display method. 
  newListItem.display();
}




const InitialItems = [
  "Step 1: buy potatoes",
  "Step 2: take over the world",
  "Step 3: there is no step 3"
];

document.addEventListener("DOMContentLoaded", 
  function() {
    // This renders the first 3 list items in the InitialItems constant.
    for (let text of InitialItems) {
      addNewItem(text);
    }

    // The "add" button
    document.getElementById("new-item-add").addEventListener("click", 
      function(event) {
        let item_text = document.getElementById("new-item-text").value;
        addNewItem(item_text);
      }
    );

  }
);

