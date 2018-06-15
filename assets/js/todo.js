// Marks the clicked task as completed (strikes it out and brightens up the text)
$("ul").on("click", "li", function(){
  $(this).toggleClass("done");
});

// Shows/hides the "New task" input. Toggles the class to the button for the animation
$("button").on("click", function(){
  $("input").fadeToggle(500);
  $(this).toggleClass("active");
});

// Adds a new task to the list from the input when a user presses "Enter" on the keyboard 
$("input").keypress(function(event){
  if(event.which === 13){
    $(this).addTask();
  }
});

// Fades out a task and deletes it from the DOM when the span is clicked
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation(); //stops all other events from firing
});


// ------------ FUNCTIONS --------------

$.fn.addTask = function(){
  var value = $(this).val(); // saves the input field value
  $('<li>' + value + '<span><i class="fa fa-trash"></i></span></li>').appendTo("ul"); // creates a list item with a span and the saved text from the input
  $(this).val(""); // resets the input field to blank
};