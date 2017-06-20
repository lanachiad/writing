$(document).ready(function() {

  $("#WBBtn").click(function(event) {
    $("#WBModal").css("display", "block");
  })
  $("#PSBtn").click(function(event) {
    $("#PSModal").css("display", "block");
  })

  $("#WBSpan").click(function(event) {
    $("#WBModal").css("display", "none");
  })
  $("#PSSpan").click(function(event) {
    $("#PSModal").css("display", "none");
  })

  $(window).click(function(event) {
    var WBmodal = document.getElementById("WBModal");
    var PSmodal = document.getElementById("PSModal");
    if(event.target == WBmodal) {
      $("#WBModal").css("display", "none");
    }
    if(event.target == PSmodal) {
      $("#PSModal").css("display", "none");
    }
  })

})