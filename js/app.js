//User interaction doesn't work

var taskInput = document.getElementById("new-task");//add new ask
var addButton = document.getElementsByTagName("button")[0];//first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks");//incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks");//completed-tasks

var createNewTaskElement= function(taskString) {
  var listItem = document.createElement("li");
  //input check box
  var checkBox = document.createElement("input");
  //label
  var label = document.createElement("label");
  //text input
  var editInput = document.createElement("input");
  //edit button
  var editButton = document.createElement("button");
  //delete button
  var deleteButton = document.createElement("button");
  //each element needs to by modified and appended
  return listItem;
};

  //add new task
var addTask = function() {
    console.log("Add task...");
    //Create a new list item with text from #new-task
    var listItem = createNewTaskElement("Some new task");
    //Append listItem to incompleteTasksHolder
    };

//edit existing task
var editTask = function() {
  //When edit button is pressed
  console.log("Edit task...");
    //if the parent has the class .editMode
      //switch from .editMode
      //label text to become input's value
    //else
      //switch to .editMode
      //input value becomes label's text

    //toggle .editMode
};

//delete an existing task
var deleteTask = function() {
  //when the delete button is pressed
  console.log("Delete task...");
    //remove the parent list from the ul
};

//Mark a task as complete
var taskCompleted = function() {
  //when the checkbox is checked
  console.log("Complete task...");
    //append the task list item to the #completed-tasks
};

//Mark a task as incomplete
var incompleteTask = function () {
  //When checkbox is unchecked
  console.log("Incomplete task...");
    //append the task list item to the #incomplete-tasks
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


//Set the click handler to the addTask function
addButton.onclick = addTask;

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
