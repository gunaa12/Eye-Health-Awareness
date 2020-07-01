var monday_start_value = 0
var tuesday_start_value = 0
var wednesday_start_value = 0
var thursday_start_value = 0
var friday_start_value = 0
var saturday_start_value = 0
var sunday_start_value = 0

function start() {
    document.getElementById("section-1").style.display = "block";
    document.getElementById("score-display").style.visibility = "visible";
}

function calculate() {
    var total = monday_start_value + tuesday_start_value + wednesday_start_value + thursday_start_value + friday_start_value + saturday_start_value + sunday_start_value;
    var minutes = total * 60;
    var min = 2*7*60;
    var max = 3*7*60;
    var score = 0;
    if (minutes > min) {
        if (minutes < max) {
            score = 1;
        } else {
            score = 2;
        }
    }
    
    document.getElementById("score-display").innerHTML = score;
    document.getElementById("explanation").style.display = "block";
    document.getElementById("score-table").style.display = "block";
    document.getElementById("section-3").style.display = "block";
    if (score == 0) {
        document.getElementById("good_job").style.display = "block";
    }
    if (score == 1) {
        document.getElementById("brink").style.display = "block";
    }
    if (score == 2) {
        document.getElementById("too_much_screen_time").style.display = "block";
    }
}

function showyes() {
    document.getElementById("yes").style.display = "block";
    document.getElementById("yes-1").style.display = "block";
    document.getElementById("no").style.display = "none";
    document.getElementById("no-1").style.display = "none";
}

function showno() {
    document.getElementById("yes").style.display = "none";
    document.getElementById("yes-1").style.display = "none";
    document.getElementById("no").style.display = "block";
    document.getElementById("no-1").style.display = "block";
}

function reset() {
    monday_start_value = 0;
    tuesday_start_value = 0;
    wednesday_start_value = 0;
    thursday_start_value = 0;
    friday_start_value = 0;
    saturday_start_value = 0;
    sunday_start_value = 0;
    document.getElementById("monday_screen_time").innerHTML = monday_start_value;
    document.getElementById("tuesday_screen_value").innerHTML = tuesday_start_value;
    document.getElementById("wednesday_screen_value").innerHTML = wednesday_start_value;
    document.getElementById("thursday_screen_value").innerHTML = thursday_start_value;
    document.getElementById("friday_screen_value").innerHTML = friday_start_value;
    document.getElementById("saturday_screen_value").innerHTML = saturday_start_value;
    document.getElementById("sunday_screen_value").innerHTML = sunday_start_value;
    document.getElementById("score-display").innerHTML = "-";
    document.getElementById("score-table").style.display = "none";
    document.getElementById("section-3").style.display = "none";
    document.getElementById("good_job").style.display = "none";
    document.getElementById("brink").style.display = "none";
    document.getElementById("too_much_screen_time").style.display = "none";
}

function increase(day) {
    switch (day) {
        case 'monday':
            if (monday_start_value < 24) {
                monday_start_value++;
                document.getElementById("monday_screen_time").innerHTML = monday_start_value;
            }
            else {
                alert("You have reached max hours limit for the day!");
            }
            break;
        case 'tuesday':
            if (tuesday_start_value < 24) {
                tuesday_start_value++;
                document.getElementById("tuesday_screen_value").innerHTML = tuesday_start_value;
            }
            else {
                alert("You have reached max hours limit for the day!");
            }
            break;
        case 'wednesday':
            if (wednesday_start_value < 24) {
                wednesday_start_value++;
                document.getElementById("wednesday_screen_value").innerHTML = wednesday_start_value;
            }
            else {
                alert("You have reached max hours limit for the day!");
            }
            break;
        case 'thursday':
            if (thursday_start_value < 24) {
                thursday_start_value++;
                document.getElementById("thursday_screen_value").innerHTML = thursday_start_value;
            }
            else {
                alert("You have reached max hours limit for the day!");
            }
            break;
        case 'friday':
            if (friday_start_value < 24) {
                friday_start_value++;
                document.getElementById("friday_screen_value").innerHTML = friday_start_value;
            }
            else {
                alert("You have reached max hours limit for the day!");
            }
            break;
        case 'saturday':
            if (saturday_start_value < 24) {
                saturday_start_value++;
                document.getElementById("saturday_screen_value").innerHTML = saturday_start_value;
            }
            else {
                alert("You have reached max hours limit for the day!");
            }
            break;
        case 'sunday':
            if (sunday_start_value < 24) {
                sunday_start_value++;
                document.getElementById("sunday_screen_value").innerHTML = sunday_start_value;
            }
            else {
                alert("You have reached max hours limit for the day!");
            }
            break;
    }
}

function decrease(day) {
    switch (day) {
        case 'monday':
            if (monday_start_value > 0){
                monday_start_value--;
                document.getElementById("monday_screen_time").innerHTML = monday_start_value;
            }
            break;
        case 'tuesday':
            if (tuesday_start_value > 0){
                tuesday_start_value--;
                document.getElementById("tuesday_screen_value").innerHTML = tuesday_start_value;
            }
            break;
        case 'wednesday':
            if (wednesday_start_value > 0){
                wednesday_start_value--;
                document.getElementById("wednesday_screen_value").innerHTML = wednesday_start_value;
            }
            break;
        case 'thursday':
            if (thursday_start_value > 0){
                thursday_start_value--;
                document.getElementById("thursday_screen_value").innerHTML = thursday_start_value;
            }
            break;
        case 'friday':
            if (friday_start_value > 0){
                friday_start_value--;
                document.getElementById("friday_screen_value").innerHTML = friday_start_value;
            }
            break;
        case 'saturday':
            if (saturday_start_value > 0){
                saturday_start_value--;
                document.getElementById("saturday_screen_value").innerHTML = saturday_start_value;
            }
            break;
        case 'sunday':
            if (sunday_start_value > 0){
                sunday_start_value--;
                document.getElementById("sunday_screen_value").innerHTML = sunday_start_value;
            }
            break;
    }
}