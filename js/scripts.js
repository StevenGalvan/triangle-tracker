//Business Logic
function hideResultsAndError() {
  document.getElementById("error-message").setAttribute("class", "hidden");
  document.getElementById("equilateral").setAttribute("class", "hidden");
  document.getElementById("isosceles").setAttribute("class", "hidden");
  document.getElementById("scalene").setAttribute("class", "hidden");
}
window.onload = function() {
  hideResultsAndError();

  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResultsAndError();
    const side1 = parseInt(document.querySelector("input#side1").value);
    const side2 = parseInt(document.querySelector("input#side2").value);
    const side3 = parseInt(document.querySelector("input#side3").value);
  
  if ( side1 && side2 && side3) {
    if (side1 === side2 && side2 === side3) {
      document.getElementById("equilateral").removeAttribute("class");
    } else if (side1 === side2 && side2 !==side3 || side2 === side3 && side1 !== side3 || side1 === side3 && side1 !== side2) {
      document.getElementById("isosceles").removeAttribute("class");
    } else if (side1 !== side2 && side1 !== side3) {
    document.getElementById("scalene").removeAttribute("class");
    } 
    } else {
      document.getElementById("error-message").removeAttribute("class");
    }
  }; 
};