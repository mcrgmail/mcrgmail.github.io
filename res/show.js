function showFunction(id) {
  var x = document.getElementById(id+'_inner');
  var x_arrow = document.getElementById(id+'_arrow');

  if (x.style.display === "none") {
    x.style.display = "block";
    x_arrow.style.transform = "translate(0%, 0%) rotate(225deg)" ;
  } else {
    x.style.display = "none";
    x_arrow.style.transform = "translate(0%, 0%) rotate(45deg)";
  }
}