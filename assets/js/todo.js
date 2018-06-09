$("li").on("click", function(){
  $(this).toggleClass("done");
});

$("button").on("click", function(){
  $("input").fadeToggle(400);
  $(this).toggleClass("active");
})

$("input").keypress(function(event){
  if(event.which === 13){
    $(this).addTask();
  }
});


$.fn.addTask = function(){
  var value = $(this).val();
  $("<li></li>").text(value).appendTo("ul");
  $(this).val("");
};