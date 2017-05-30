// This global variable holds the array of all TODO items.
let g_todoList = [];

// You may want to have another global variable for keeping track of the number of 'done' items, but that's not the only solution.

function TodoItem(text) {
  this.text = text;
  this.isDone = false;
  this.element = null;
}

TodoItem.prototype.display = function() {
  
  // G
  // TODO: assignment
  // Hints:
  // - Create this HTML (or something like this) using document.createElement() and its friends.
  /*
  <li>
    <label>
      <input type="checkbox">
      <span>TODO item text</span>
    </label>
  </li>
  */
  // - Attach a "click" event handler to the checkbox. When clicked, it should run this.toggleDone(). Remember that 'this' means 
  // something else inside event handlers!! If you try something like this, IT WILL NOT WORK:
  /*
  checkbox.addEventListener(
    "click",
    function() {
      this.toggleDone();
    }
  );
  */
  // Instead, you will need to use an intermediate variable:
  /*
  let todoItem = this;
  checkbox.addEventListener(
    "click",
    function() {
      todoItem.toggleDone();
    }
  );
  */
  // You can also equivalently write the following, which does this automatically:
  // checkbox.addEventListener("click", this.toggleDone.bind(this));
  // G

  this.element = /* TODO */null;

  // This will add this.element to the list - you don't need to modify this.
  document.getElementById("todo-list").insertBefore(this.element, document.getElementById("new-item"));
};

TodoItem.prototype.toggleDone = function(event) {
  // TODO: assignment
  // Hints:
  // - To add the 'done' class to the <li>: this.element.classList.add("done")
  // - To remove the 'done' class from the <li>: this.element.classList.remove("done")
  // - To check or uncheck the checkbox: this.element.querySelector("input[type='checkbox']").checked = /* boolean value */;
};

function addNewItem(text) {
  // TODO: assignment
  // Hints:
  // - Create a new TodoItem object and call its display() method.
  // - Don't forget to put it into g_todoList.
  // - Remember to update the counters in the HTML!
}

function markAll(newIsDone) {
  // TODO: assignment
}

const InitialItems = [
  "Step 1: buy potatoes",
  "Step 2: take over the world",
  "Step 3: there is no step 3"
];

document.addEventListener(
  "DOMContentLoaded",
  function() {
    for (let text of InitialItems) {
      addNewItem(text);
    }

    // TODO: assignment
  }
);