/* function fetchHtml () {
    fetch ('client-data.html')
      .then( response => response.text() )
      .then
}
*/

let myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("photo_model");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3500); 
}