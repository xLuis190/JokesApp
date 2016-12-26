$(document).ready(function(){

  var h2Element = $("h2");
  var button = $("#getJoke");
  button.on('click',function(){
    var name = $("#name").val(),
    lastName = $("#lastname").val();
    if(name === "" || lastName === ""){
      alert("Put your name")
      return;
    }
      h2Element.html(" ");
      h2Element.removeClass("animated fadeIn")
      $.ajax({
      url:"https://api.icndb.com/jokes/random?firstName="+name+"&lastName="+lastName+"&limitTo=[nerdy]",
      success: function(result){
        h2Element.addClass("animated fadeIn text-xs-center");
        h2Element.html(result.value.joke)

      },
      error: function(error){
        console.log(error);
      }
    })
  })


});
