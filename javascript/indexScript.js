function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
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

function navHeight() {
    if (window.innerWidth >= 800) {
        var body = document.body, html = document.documentElement;
        var height = Math.max(body.offsetHeight, html.clientHeight, html.offsetHeight);

        document.getElementById("nav").style.height = height + "px";
    } else {
        document.getElementById("nav").style.height = "10vh";
    }
}



window.onload = function () {
    var d = new Date();
    var y = "I am Saad, a student at the University of Toronto studying Computer Science. Enjoy your exploration through my website!";

    var x = d.getHours();

    if (x < 12) {
        document.getElementById('greeting').innerHTML = "Good Morning! " + y;
    } else if (12 <= x && x <= 17) {
        document.getElementById('greeting').innerHTML = "Good Afternoon! " + y;
    } else if (17 < x && x <= 20) {
        document.getElementById('greeting').innerHTML = "Good Evening! " + y;
    } else if (20 < x) {
        document.getElementById('greeting').innerHTML = "Wow it's pretty late! " + y;
    }

    navHeight();
}

if(!(/iPhone|iPad|iPod|Android|webOS|BlackBerry|Opera Mini|IEMobile/i.test(navigator.userAgent) )) {
    window.onresize = function(){ location.reload(); }
}