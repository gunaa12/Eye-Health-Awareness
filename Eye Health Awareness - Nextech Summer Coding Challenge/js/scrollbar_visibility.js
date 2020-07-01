window.onscroll = function() {
    myFunction()
};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
    if (scrolled == 0) {
        document.getElementById("upbtn").style.visibility = "hidden";
        document.getElementById("downbtn").style.visibility = "visible";
    } else {
        document.getElementById("upbtn").style.visibility = "visible";
        document.getElementById("downbtn").style.visibility = "hidden";
    }
}