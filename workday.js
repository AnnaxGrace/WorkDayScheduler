var time9 = $("#time9");
time9.value = 9;
// var Form9 = $("#form9").value;
// console.log(Form9)


var time10 = $("#time10");
time10.value = 10;

var time11 = $("#time11");
time11.value = 11;

var time12 = $("#time12");
time12.value = 12;

var time1 = $("#time1");
time1.value = 13;

var time2 = $("#time2");
time2.value = 14;

var time3 = $("#time3");
time3.value = 15;

var time4 = $("#time4");
time4.value = 16;

var time5 = $("#time5");
time5.value = 17;

var d = new Date();
var format = "LL";
console.log(d);
nowDate = d.toLocaleDateString()
var result = moment(nowDate).format(format);

var hourString = moment(d).format("H");
hourNumber = parseFloat(hourString);

$("#currentDay").text(result); 

//idGrab is time variable
function timeColor(idGrab) {
  
    if (idGrab.value > hourNumber) {
        idGrab.addClass("class future");
    }
    else if (idGrab.value === hourNumber) {
        idGrab.addClass("class present");
    }
    else if (idGrab.value < hourNumber) {
        idGrab.addClass("class past");
    }
}

timeColor(time9);
timeColor(time10);
timeColor(time11);
timeColor(time12);
timeColor(time1);
timeColor(time2);
timeColor(time3);
timeColor(time4);
timeColor(time5);

renderLastRegistered();

function renderLastRegistered() {
    var Form9 = localStorage.getItem("Form9");
    var Form10 = localStorage.getItem("Form10");
    var Form11 = localStorage.getItem("Form11");
    var Form12 = localStorage.getItem("Form12");
    var Form1 = localStorage.getItem("Form1");
    var Form2 = localStorage.getItem("Form2");
    var Form3 = localStorage.getItem("Form3");
    var Form4 = localStorage.getItem("Form4");
    var Form5 = localStorage.getItem("Form5");

    $("#form9").attr("placeholder", Form9);
    $("form9").attr("style", "color:black;");
    console.log(Form9);
  
  
  }

$(".btn9").on("click", function(event) {
    event.preventDefault();

    var Form9 = document.querySelector("#form9").value;
    if (Form9 === "") {
        console.log("no text");
    }
    else {
    localStorage.setItem("Form9", Form9);
    }

});

$(".btn9").on("click", function(event) {
    event.preventDefault();

    var Form9 = document.querySelector("#form9").value;
    if (Form9 === "") {
        console.log("no text");
    }
    else {
    localStorage.setItem("Form9", Form9);
    }

});

$(".btn10").on("click", function(event) {
    event.preventDefault();

    var Form10 = document.querySelector("#form10").value;
    if (Form10 === "") {
        console.log("no text");
    }
    else {
    localStorage.setItem("Form10", Form10);
    }

});

$(".btn11").on("click", function(event) {
    event.preventDefault();

    var Form11 = document.querySelector("#form11").value;
    if (Form11 === "") {
        console.log("no text");
    }
    else {
    localStorage.setItem("Form11", Form11);
    }

});

$(".btn12").on("click", function(event) {
    event.preventDefault();

    var Form12 = document.querySelector("#form12").value;
    if (Form12 === "") {
        console.log("no text");
    }
    else {
    localStorage.setItem("Form12", Form12);
    }

});

$(".btn1").on("click", function(event) {
    event.preventDefault();

    var Form1 = document.querySelector("#form1").value;
    if (Form1 === "") {
        console.log("no text");
    }
    else {
    localStorage.setItem("Form1", Form1);
    }

});

$(".btn2").on("click", function(event) {
    event.preventDefault();

    var Form2 = document.querySelector("#form2").value;
    if (Form2 === "") {
        console.log("no text");
    }
    else {
    localStorage.setItem("Form2", Form2);
    }

});

$(".btn3").on("click", function(event) {
    event.preventDefault();

    var Form3 = document.querySelector("#form3").value;
    if (Form3 === "") {
        console.log("no text");
    }
    else {
    localStorage.setItem("Form3", Form3);
    }

});

$(".btn4").on("click", function(event) {
    event.preventDefault();

    var Form4 = document.querySelector("#form4").value;
    if (Form4 === "") {
        console.log("no text");
    }
    else {
    localStorage.setItem("Form4", Form4);
    }

});

$(".btn5").on("click", function(event) {
    event.preventDefault();

    var Form5= document.querySelector("#form5").value;
    if (Form5 === "") {
        console.log("no text");
    }
    else {
    localStorage.setItem("Form5", Form5);
    }

});


// let myVar = [
//     {
//         time: "0900",
//         event: "event09",
//     },
//     {
//         time: "1000",
//         event: "event10",
//     },
//     {
//         time: "1100",
//         event: "event11",
//     },
//     {
//         time: "1200",
//         event: "event12",
//     },
//     {
//         time: "1300",
//         event: "event13",
//     },
//     {
//         time: "1400",
//         event: "event14",
//     },
//     {
//         time: "1500",
//         event: "event15",
//     },
//     {
//         time: "1600",
//         event: "event16",
//     },
//     {
//         time: "1700",
//         event: "event17",
//     }];
//     for(let i = 0; i < myVar.length; i++)
//     {
//         let head = myVar[i].time;
//         console.log(myVar[i].time);
//         let newTime = $("<row>");
//         newTime.attr("id", myVar[i].time);
//         newTime.addClass("row");
//         $("#headtable").append(newTime);
//         let newDivTime = $("<div>");
//         newDivTime.text(myVar[i].time);
//         newDivTime.addClass("col-sm-3");
//         $("#0900").append(newDivTime);
//         let newDivSched = $("<input>");
//         newDivSched.text(myVar[i].event);
//         newDivSched.addClass("col-sm-6 input");
//         newDivSched.attr("data-name", myVar[i].time);
//         //console.log(newDivSched);
//         $("#0900").append(newDivSched);
//         let newDivBtn = $("<button>");
//         newDivBtn.text("submit");
//         newDivBtn.attr("data-name", i);
//         newDivBtn.addClass("col-sm-3 submitbuttons");
//         $("#0900").append(newDivBtn);
//     }
//     $(".input").on("keyup", function(){
//         let newstring = this.value;

//         console.log(newstring);
//         $(".submitbuttons").on("click", function(){
//             event.preventDefault();
//             let btnclick = $(this).attr("data-name");
//             console.log(btnclick);
//             myVar[btnclick].event = newstring;
//         })
//     })