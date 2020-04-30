var time9 = $("#time9");
time9.value = 9;

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
console.log(hourString)


$("#currentDay").text(result); 

hourNumber = parseFloat(hourString);
console.log(hourNumber)

//idGrab is time variable
function timeColor(idGrab) {
  
console.log("this is id Grab " + idGrab.value)
console.log("this is hourNumber " + hourNumber)
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


// function numberBackground (timeNumber)
// var time10 = $("#time10")

// console.log(number10)
// var textValue = document.querySelector("#timeNow");
// var help = textValue.value
// console.log(help);
 
//  console.log(textValue);

// if (number9 < hourNumber) {
//     $("#help").addClass("class past");
//  }

//  if (number10 < hourNumber) {
//     $("#help").addClass("class past");
//  }




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