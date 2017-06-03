// This global variable holds the array of all TODO items.
let g_todoList = [];

// This will keep track of the number of list items that are done.
let doneListItems = 0;

// This is the constructor for the new list item.
function TodoItem(text) {
  this.text = text;
  this.isDone = false;  // This attribute is not essential for my code but I did use it to practice a bit.
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

  // This event listener waits for the checkbox to be clicked.
  // A new varaible is made for this because within the event listener "this" points to
  // the element that was clicked and not the TodoItem object. 
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
    this.isDone = true; // My code doesn't actually need this line. 
    doneListItems += 1;
    countDoneItems.innerText = doneListItems;
  } 

  // If the checkbox is not checked and the item is crossed out, 
  // this will uncross the item and substract 1 from the done items counter.
  if (checkbtn === false && this.element.classList.contains("done")) {
    this.element.classList.remove("done");
    this.isDone = false; // My code doesn't actually need this line.
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
};

// This checks all the items as done or noy done.
function markAll(newIsDone) {
  // This is what happends when the "all done" button is clicked.
  if (newIsDone === "done") {
    // The done items counter gets maxed out.
    let countDoneItems = document.getElementById("count-done");
    doneListItems = g_todoList.length;
    countDoneItems.innerText = doneListItems;

    // check all checkboxes.
    let allCheckboxes = document.querySelectorAll("input[type='checkbox']");
    for (var i = 0; i < allCheckboxes.length; i++) {
      allCheckboxes[i].checked = true;
    };

    // cross out all items
    let allListItems = document.querySelectorAll("li.Container");
    for (var i = 0; i < allListItems.length; i++) {
      allListItems[i].classList.add("done");
    };

    // This changes all the isDone attributes of the TodoItem objects to true.
    for (var i = 0; i < g_todoList.length; i++) {
      g_todoList[i].isDone = true;
    };
  };

  // This is what happends when the "none done" button is clicked.
  if (newIsDone === "undone") {
    // The done items counter is set to 0. 
    let countDoneItems = document.getElementById("count-done");
    doneListItems = 0;
    countDoneItems.innerText = doneListItems;

    // all the checkboxes get unchecked.
    let allCheckboxes = document.querySelectorAll("input[type='checkbox']");
    for (var i = 0; i < allCheckboxes.length; i++) {
      allCheckboxes[i].checked = false;
    };

    // This uncrosses all the items that were crossed out.
    let allListItems = document.querySelectorAll("li.Container");
    for (var i = 0; i < allListItems.length; i++) {
      allListItems[i].classList.remove("done");
    };

    // This changes all the isDone attributes of the TodoItem objects to false.
    for (var i = 0; i < g_todoList.length; i++) {
      g_todoList[i].isDone = false;
    };
  };
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

    // The "all done" button.
    document.getElementById("mark-all-done").addEventListener("click",
      function (event) {
        markAll("done");
      }
    );

    // The "none done" button.
    document.getElementById("mark-all-undone").addEventListener("click",
      function (event) {
        markAll("undone");
      }
    );    
    
  }
);

