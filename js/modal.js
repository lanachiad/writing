
$(document).ready(function() {
  var modal = document.getElementById('myModal');
  var button = document.getElementById("myBtn");
  var span = document.getElementsByClassName("close")[0];

  $(button).click(function(event) {
    $(modal).css("display", "block");
  })

  $(span).click(function(event) {
    $(modal).css("display", "none");
  })

  $(window).click(function(event) {
    if(event.target == modal) {
      $(modal).css("display", "none");
    }
  })
})