//User interaction doesn't work

var taskInput = document.getElementById("new-task");//add new ask
var addButton = document.getElementsByTagName("button")[0];//first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks");//incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks");//completed-tasks
//edit button
var editButton = document.createElement("button");


 var createNewTaskElement= function(taskString) {
  var listItem = document.createElement("li");
  //input check box
  var checkBox = document.createElement("input");
  //label
  var label = document.createElement("label");
  //text input
  var editInput = document.createElement("input");
  //delete button
  var deleteButton = document.createElement("button");
  //each element needs modifying

  checkBox.type = "checkbox";
  editInput.type = "text";

  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";

  label.innerText = taskString;

  //each element needs appending
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
};

  //add new task
var addTask = function() {
    console.log("Add task...");
    //Create a new list item with text from #new-task
    var listItem = createNewTaskElement(taskInput.value);
    if (taskInput.value !== "") {
      //Append listItem to incompleteTasksHolder
      incompleteTasksHolder.appendChild(listItem);
      bindTaskEvents(listItem, taskCompleted);
    }

    taskInput.value = "";
    };

//edit existing task
var editTask = function() {
  console.log("Edit task...");
  var listItem = this.parentNode;
  var editInput = listItem.querySelector("input[type=text]");
  var label = listItem.querySelector("label");
    //if the parent has the class .editMode
  var containsClass = listItem.classList.contains('editMode');
  var button = listItem.querySelector("button.edit");
  console.log(button.innerText = "Edit");
    if(containsClass) {
      //switch from .editMode
      //label text to become input's value
      label.innerText = editInput.value;
      button.innerText = "Edit";
    } else{
      //switch to .editMode
      //input value becomes label's text
      console.log(editButton.innerText = "Save");
      editInput.value = label.innerText;
      button.innerText = "Save";
    }

    //toggle .editMode
    listItem.classList.toggle("editMode");
};

//delete an existing task
var deleteTask = function() {
  console.log("Delete task...");
    //remove the parent list from the ul
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    ul.removeChild(listItem);
};

//Mark a task as complete
var taskCompleted = function() {
  console.log("Complete task...");
    //append the task list item to the #completed-tasks
    var listItem = this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, incompleteTask);
};

//Mark a task as incomplete
var incompleteTask = function () {
  console.log("Incomplete task...");
    //append the task list item to the #incomplete-tasks
    var listItem = this.parentNode;
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
};

var bindTaskEvents = function(taskListItem, checkBoxEventHandler){
  console.log("Bind list item events...");
  //select it's children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");

  //bind editTask to edit button
  editButton.onclick = editTask;

  //bind deleteTask to delete button
  deleteButton.onclick = deleteTask;

  //bind checkBoxEventHandler to checkbox
  checkBox.onchange = checkBoxEventHandler;
};

//dummy function to show
var ajaxRequest = function(){
  console.log("AJAX Request");
  editButton.innerHTML = "Save";
};


//Set the click handler to the addTask function
addButton.addEventListener("click", addTask);
editButton.addEventListener("click", ajaxRequest);

//cycle over incompleteTaskHolder ul list items
for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
    //bind events to list item's children (taskCompleted)
    bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

//cycle over completedTaskHolder ul list items
for(var i = 0; i < completedTasksHolder.children.length; i++) {
    //bind events to list item's children (incompleteTask)
    bindTaskEvents(completedTasksHolder.children[i], incompleteTask);
}
