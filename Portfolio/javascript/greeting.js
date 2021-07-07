window.onload = function (){
    var d = new Date();
    var y = "I am Saad, a student at the University of Toronto studying Computer Science. Enjoy your exploration through my website!"

    if(d.getHours() < 12){
        document.getElementById('greeting').innerHTML = "Good Morning! " + y;
    } else if(12 <= d.getHours()){
        document.getElementById('greeting').innerHTML = "Good Afternoon! " + y;
    } else if(17 < d.getHours()){
        document.getElementById('greeting').innerHTML = "Good Evening! " + y;
    } else if(20 < d.getHours()){
        document.getElementById('greeting').innerHTML = "Wow it's pretty late! " + y;
    }
}