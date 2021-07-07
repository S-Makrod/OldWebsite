function reveal(){
    if(window.innerWidth >= 800){
        document.getElementById("left").style.visibility = "visible";
        document.getElementById("right").style.visibility = "visible";
    }
}

function hide(){
    if(window.innerWidth >= 800){
        document.getElementById("left").style.visibility = "hidden";
        document.getElementById("right").style.visibility = "hidden";
    }
}

function next(){
    var x = document.getElementsByClassName("current")[0].id;

    document.getElementById(x).removeAttribute("class");
    document.getElementById(x).style.display = "none";

    if(x == "one"){
        document.getElementById("two").style.display = "inline";
        document.getElementById("two").className = "current";
    } else if(x == "two"){
        document.getElementById("three").style.display = "inline";
        document.getElementById("three").className = "current";
    } else if(x == "three"){
        document.getElementById("four").style.display = "inline";
        document.getElementById("four").className = "current";
    } else if(x == "four"){
        document.getElementById("one").style.display = "inline";
        document.getElementById("one").className = "current";
    }
}

function back(){
    var x = document.getElementsByClassName("current")[0].id;

    document.getElementById(x).removeAttribute("class");
    document.getElementById(x).style.display = "none";

    if(x == "one"){
        document.getElementById("four").style.display = "inline";
        document.getElementById("four").className = "current";
    } else if(x == "two"){
        document.getElementById("one").style.display = "inline";
        document.getElementById("one").className = "current";
    } else if(x == "three"){
        document.getElementById("two").style.display = "inline";
        document.getElementById("two").className = "current";
    } else if(x == "four"){
        document.getElementById("three").style.display = "inline";
        document.getElementById("three").className = "current";
    }
}

