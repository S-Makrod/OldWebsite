function carousel(name){
    let images = [];

    if(name == "deck.html"){
        images[0] = "deck.jpg";  
        images[1] = "deck2.jpg";
        images[2] = "deck3.jpg";
        images[3] = "deck4.jpg";
    } else if(name == "rpg.html"){
        images[0] = "rpg.jpg";  
        images[1] = "rpg2.jpg";
        images[2] = "rpg3.jpg";
        images[3] = "rpg4.jpg";
    } else if(name == "conway.html"){
        images[0] = "conway.jpg";  
        images[1] = "conway2.jpg";
        images[2] = "conway3.jpg";
        images[3] = "conway4.jpg";
    } else if(name == "app.html"){
        images[0] = "app.png";  
        images[1] = "app2.png";
        images[2] = "app3.png";
        images[3] = "app4.png";
        images[4] = "app5.png";  
        images[5] = "app6.png";
        images[6] = "app7.png";
        images[7] = "app8.png";
        images[8] = "app9.png";  
        images[9] = "app10.png";
        images[10] = "app11.png";
        images[11] = "app12.png";
        images[12] = "app13.png";  
        images[13] = "app14.png";
        images[14] = "app15.png";
    } else if(name == "resume.html"){
        images[0] = "resume.png";  
        images[1] = "resume2.png";
        images[2] = "resume3.png";
        images[3] = "resume4.png";
        images[4] = "resume5.png";  
        images[5] = "resume6.png";
        images[6] = "resume7.png";
        images[7] = "resume8.png";
    } else if(name == "redstream.html"){
        images[0] = "redstream.png";  
        images[1] = "redstream2.png";
        images[2] = "redstream3.png";
        images[3] = "redstream4.png";
        images[4] = "redstream5.png";  
        images[5] = "redstream6.png";
        images[6] = "redstream7.png";
    } else if(name == "auto.html"){
        images[0] = "auto2.png";  
        images[1] = "auto3.png";
        images[2] = "auto4.png";
        images[3] = "auto.png";
        images[4] = "auto5.png";  
        images[5] = "auto6.png";
        images[6] = "auto7.png";
    }

    return images;
}

function reveal(){
    document.getElementById("left").style.visibility = "visible";
    document.getElementById("right").style.visibility = "visible";
}

function hide(){
    if(window.innerWidth >= 800){
        document.getElementById("left").style.visibility = "hidden";
        document.getElementById("right").style.visibility = "hidden";
    }
}

function next(){
    let path = window.location.pathname;
    let page = path.split("/").pop();
    let images = [];
    images = carousel(page);

    var x = document.getElementById("one").src;
    x = x.split("/").pop();
    var y = images.indexOf(x);

    if(y == images.length - 1){
        document.getElementById("one").src = "../images/" + images[0];
    } else{
        document.getElementById("one").src = "../images/" + images[y+1];
    } 
}

function back(){
    let path = window.location.pathname;
    let page = path.split("/").pop();
    let images = [];
    images = carousel(page);

    var x = document.getElementById("one").src;
    x = x.split("/").pop();
    var y = images.indexOf(x);

    if(y == 0){
        document.getElementById("one").src = "../images/" + images[images.length - 1];
    } else{
        document.getElementById("one").src = "../images/" + images[y-1];
    } 
}

function toggle(){
    let toggler = document.getElementById("toggle").children[0];

    if(toggler.classList.contains("fa-pause-circle")){
        toggler.classList.remove("fa-pause-circle");
        toggler.classList.add("fa-play-circle");
        clearInterval(image_carousel_run);
    } else {
        toggler.classList.remove("fa-play-circle");
        toggler.classList.add("fa-pause-circle");
        image_carousel_run = setInterval(next, 3000);
    }
}

if(!(/iPhone|iPad|iPod|Android|webOS|BlackBerry|Opera Mini|IEMobile/i.test(navigator.userAgent) )) {
    window.onresize = function(){
        if(window.innerWidth < 800){
            document.getElementById("left").style.visibility = "visible";
            document.getElementById("right").style.visibility = "visible";
        } else {
            hide();
        }
    }
}


document.getElementById("left-arrow").addEventListener("mouseover", reveal);
document.getElementById("left-arrow").addEventListener("mouseout", hide);
document.getElementById("left-arrow").addEventListener("click", back);

document.getElementById("right-arrow").addEventListener("mouseover", reveal);
document.getElementById("right-arrow").addEventListener("mouseout", hide);
document.getElementById("right-arrow").addEventListener("click", next);

document.getElementById("image-carousel").addEventListener("mouseover", reveal);
document.getElementById("image-carousel").addEventListener("mouseout", hide);

document.getElementById("toggle").addEventListener("click", toggle);
document.getElementById("toggle").addEventListener("mouseover", reveal);
document.getElementById("toggle").addEventListener("mouseout", hide);

var image_carousel_run = setInterval(next, 3000);