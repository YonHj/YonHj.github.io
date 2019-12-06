var time = 0.1;
var breaktime = 0.1;

$(document).ready(function() {
    console.log("hej");
    $("#startbreak").hide();
    $("#menu").hide();
    
$("#start").click(function(){
    console.log("clicked");
    $("#start").hide();
    time *= 60;
    $("body").css("background-color", "#55ae95");
    $("#text").html("Pomodoro Timer");
    var counter = setInterval(timer, 1000);
    function timer(){
        time-=1;
        if(time===0){
            clearInterval(counter);
            $("#startbreak").show();
            $("body").css("background-color", "#ffac8e");
            breaktime = .1;
            $("#text").html("Time for a break");
        }
        if(time%60>=10){
            $("#clock").html(Math.floor(+time/60)+":"+time%60);
        }
        else{
            $("#clock").html(Math.floor(time/60)+":"+"0"+time%60);
        }
        console.log(time);
           
    }
});
$("#startbreak").click(function(){
    console.log("break started");
    $("#startbreak").hide();
    $("#text").html("Break");
    breaktime *= 60;
    var counter = setInterval(timer, 1000);
    function timer(){
        breaktime-=1;
        if(breaktime===0){
            clearInterval(counter)
            $("#start").show();
            $("body").css("background-color", "#3f4d71");
            time = .1;
            $("#text").html("Time to get back to work"); 
        }
         if(breaktime%60>=10){
            $("#clock").html(Math.floor(breaktime/60)+":"+breaktime%60);
        }
        else{
            $("#clock").html(Math.floor(breaktime/60)+":"+"0"+breaktime%60);
        }
        console.log(breaktime);
           
}});
    
$("#settings").click(function(){
   $("#menu").slideToggle(); 
});

});

            



