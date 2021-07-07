function dropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}
  
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

window.onchange = function() {
  if(window.innerWidth >= 800){
    var body = document.body, html = document.documentElement;
    var height = Math.max( body.offsetHeight, html.clientHeight, html.offsetHeight );

    document.getElementById("nav").style.height = height + "px";
  }
}