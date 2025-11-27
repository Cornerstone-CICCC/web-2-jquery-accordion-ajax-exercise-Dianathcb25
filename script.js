$(function() {
  // your code here

  $(".accordion-header").on("click", function () {
    $(".accordion-content").not($(this).next()).slideUp(500)
    $(this).next().toggle(500)
  })
  
  function toDoList(todos) {
    for (let i = 0; i < todos.length; i++) {
      $(".todos ul").append(`<li>${todos[i].todo}</li>`)
    }
  }

  $("button").on("click", function () {
    $.ajax({
      url: "https://dummyjson.com/todos",
      type: "GET",
      success: function (data) {
        toDoList(data.todos)
      },
      error: function (err) {
        console.error(err);
      }
    })
  })
})