// This global variable holds the array of all TODO items.
let g_todoList = [];

// This will keep track of the number of list items that are done.
let doneListItems = 0;

// This is the constructor for the new list item.
function TodoItem(text) {
  this.text = text;
  this.isDone = false;
  this.element = null;
}

// This is the addition to the prototype of the new list item. 
TodoItem.prototype.display = function() {
  let containerClass = this.text + " Container";

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

  // This is the checkbox with eventlistener.
  let newItemCheckbox = document.createElement("INPUT");
  newItemCheckbox.setAttribute("type", "checkbox");
  newItemLabel.appendChild(newItemCheckbox);

  // José: Check why this works!!
  let todoItem = this;
  newItemCheckbox.addEventListener("click",
    function (event) {
      todoItem.toggleDone();
    }
  );

  // this is the span.
  let newItemSpan = document.createElement("SPAN");
  newItemSpan.innerText = this.text;
  newItemLabel.appendChild(newItemSpan);
};

// This function strikes items of the list and sets how many items have been done.
TodoItem.prototype.toggleDone = function(event) {
  let checkbtn = this.element.querySelector("input[type='checkbox']").checked;
  let countDoneItems = document.getElementById("count-done");

  // If the checkbox is checked this will cross out the item and add 1 to the done items counter.
  if (checkbtn === true) {
    this.element.classList.add("done");
    doneListItems += 1;
    countDoneItems.innerText = doneListItems;
  } 

  // If the checkbox is not checked and the item is crossed out, 
  // this will uncross the item and substract 1 from the done items counter.
  if (checkbtn === false && this.element.classList.contains("done")) {
    this.element.classList.remove("done");
    doneListItems -= 1;
    countDoneItems.innerText = doneListItems;
  }
};

// This function creates/displays the new list Item object and sets the total number of items. 
function addNewItem(text) {
  // each new list item is a new object.
  let newListItem = new TodoItem(text);

  // each new list item is pushed into the g_todoList variable array.
  g_todoList.push(newListItem);

  // This sets the total amount of list items on screen.
  let countTotal = document.getElementById("count-total");
  countTotal.innerText = g_todoList.length;

  // The new object is now made visible with it's own display method. 
  newListItem.display();

  // newListItem.toggleDone();
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

    // The "add" button and it's functionality.
    document.getElementById("new-item-add").addEventListener("click", 
      function(event) {
        let item_text = document.getElementById("new-item-text").value;
        addNewItem(item_text);

      }
    );

    console.log(g_todoList);
  }
);

