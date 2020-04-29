
console.log("why?");

var d = new Date();
var format = "LL";
console.log(d);
nowDate = d.toLocaleDateString()
var result = moment(nowDate).format(format);
var hourString = moment(d).format("h");


$("#currentDay").text(result); 

hourNumber = parseFloat(hourString);
console.log(hourNumber)

var time10 = $("time10")
time10.value = "true"
if (time10.value === "true"){
    var number10 = -2;
}

console.log(number10)
// var textValue = document.querySelector("#timeNow");
// var help = textValue.value
// console.log(help);
 
//  console.log(textValue);

 if (number10 < hourNumber) {
    console.log("yes");
    $("#help").addClass("class past");
 }


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