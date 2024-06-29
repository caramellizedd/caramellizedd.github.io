// Modern Theme Scripts
$(function () {
    $(".topnav").load("navbar.html");
    $(".mtopnav").load("mnavbar.html");
});
// Mobile Navigation Logic
function myFunction() {
    var x = document.getElementById("mobilenav");
    if (x.className === "mtopnav") {
      x.className += " responsive";
    } else {
      x.className = "mtopnav";
    }
  }