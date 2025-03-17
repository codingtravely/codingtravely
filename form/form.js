$(document).ready(function () {
  var elmclass = ".card input";
  $(elmclass + ":first").focus();
  $(elmclass).keydown(function (e) {

    if (e.key == "Enter" || e.key == "ArrowDown") {
      e.preventDefault();
      var nextIndex = $(elmclass).index(this) + 1;
      var next = $(elmclass).eq(nextIndex);
      next.focus();
    }
    if (e.key == "ArrowUp") {
      e.preventDefault();
      var prevIndex = $(elmclass).index(this) - 1;
      var prev = $(elmclass).eq(prevIndex);
      prev.focus();
    }
  });
  $("#new").click(function (e) {
    console.log(window.location);
    var thePopup = window.open('form.html', "Add New", "menubar=0,location=0,height=700,width=700");
  });
  $('form').submit(function (e) {
    e.preventDefault();
    console.log(window.name);
    if (window.name == "Add New") {
      window.close();
    }
  });
});
