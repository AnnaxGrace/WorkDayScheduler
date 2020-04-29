
console.log("why?");

var date = "2020-04-03" 
var format = "LLLL";
var result = moment(date).format(format);

$("#currentDay").text(result); 
// $("#currentDay").attr("style", "color:pink;");
// $(".workNow").html("<h1>Hello friends!</h1>");


let myVar = [
    {
        time: "0900",
        event: "event09",
    },
    {
        time: "1000",
        event: "event10",
    },
    {
        time: "1100",
        event: "event11",
    },
    {
        time: "1200",
        event: "event12",
    },
    {
        time: "1300",
        event: "event13",
    },
    {
        time: "1400",
        event: "event14",
    },
    {
        time: "1500",
        event: "event15",
    },
    {
        time: "1600",
        event: "event16",
    },
    {
        time: "1700",
        event: "event17",
    }];
    for(let i = 0; i < myVar.length; i++)
    {
        let head = myVar[i].time;
        // console.log(myVar[i].time);
        let newTime = $("<row>");
        newTime.attr("id", myVar[i].time);
        newTime.addClass("row");
        $("#headtable").append(newTime);
        let newDivTime = $("<div>");
        newDivTime.text(myVar[i].time);
        newDivTime.addClass("col-sm-3");
        $("#0900").append(newDivTime);
        let newDivSched = $("<input>");
        newDivSched.text(myVar[i].event);
        newDivSched.addClass("col-sm-6 input");
        newDivSched.attr("data-name", myVar[i].time);
        //console.log(newDivSched);
        $("#0900").append(newDivSched);
        let newDivBtn = $("<button>");
        newDivBtn.text("submit");
        newDivBtn.attr("data-name", i);
        newDivBtn.addClass("col-sm-3 submitbuttons");
        $("#0900").append(newDivBtn);
    }
    $(".input").on("keyup", function(){
        let newstring = this.value;

        console.log(newstring);
        $(".submitbuttons").on("click", function(){
            event.preventDefault();
            let btnclick = $(this).attr("data-name");
            console.log(btnclick);
            myVar[btnclick].event = newstring;
        })
    })