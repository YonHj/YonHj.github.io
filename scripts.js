var time;
var breaktime;
var idletime = 0;
var interval;
var autostart;


$(document).ready(function() {
    $("#startbreak").hide();
    $("#menu").hide();
    $("#reset").hide();
    $("#resetbreak").hide();
    var alarm = $("#alarm")[0];
    $("#start").click(function() {
        timerclick();
    });
    $("#startbreak").click(function() {
        breakclick();
    });
    $("#reset").click(function() {
        reset();
    });
    $("#resetbreak").click(function() {
        resetbreak();
    })
    $("#settings").click(function(){
        $("#menu").slideToggle(); 
    });
   
    
});

function timerclick(){
    time = parseFloat($("#timertime").val());
    if(time<=0){
        alert("Please enter a number above 0");
    }
    else {
        $("#start").hide();
        $("#resetbreak").hide();
        $("#reset").show();
        time *= 60;
        //formatting
        if(time%60>=10){
            $("#clock").html(Math.floor(+time/60)+":"+time%60);
        }
        else{
            $("#clock").html(Math.floor(time/60)+":"+"0"+time%60);
        }
        $("body").css("background-color", "#55ae95");
        $("#text").html("Work");
        //timer
        interval = setInterval(timer, 1000);
        function timer(){
            time-=1;
            //what happens when counter finished
            if(time===0){
                clearInterval(interval);
                $("#startbreak").show();
                $("body").css("background-color", "#ffac8e");
                $("#text").html("Time for a break");
                $("#clock").hide();
                $("#reset").hide();
                alarm.play();
                autostart = $("#autostart").is(":checked");
                if (autostart ==  true) {
                    breakclick();
                }
            }
            //formatting
            if(time%60>=10){
                $("#clock").html(Math.floor(+time/60)+":"+time%60);
            }
            else{
                $("#clock").html(Math.floor(time/60)+":"+"0"+time%60);
            }
        }
    }
}

function breakclick(){
 breaktime = parseFloat($("#breaktime").val());
    if(time<0){
        alert("Please enter a number above 0");
    }
    else {
        $("#clock").show();
        $("#resetbreak").show();
        $("#startbreak").hide();
        $("#text").html("Break");
        breaktime *= 60;
        if(breaktime%60>=10){
                $("#clock").html(Math.floor(breaktime/60)+":"+breaktime%60);
        }
        else {
                $("#clock").html(Math.floor(breaktime/60)+":"+"0"+breaktime%60);
        }
        interval = setInterval(timer, 1000);
        function timer(){
            breaktime-=1;
            if(breaktime===0){
                clearInterval(interval)
                $("#start").show();
                $("#resetbreak").hide();
                $("body").css("background-color", "#3f4d71");
                $("#text").html("Time to get back to work");
                alarm.play();
                autostart = $("#autostart").is(":checked");
                if (autostart ==  true) {
                    timerclick();
                }
            }
             if(breaktime%60>=10){
                $("#clock").html(Math.floor(breaktime/60)+":"+breaktime%60);
            }
            else{
                $("#clock").html(Math.floor(breaktime/60)+":"+"0"+breaktime%60);
            }
}}};

function reset(){
    clearInterval(interval);
    timerclick();
}

function resetbreak(){
    clearInterval(interval);
    breakclick();
}

 var idleInterval = setInterval(idleIncrement, 5000);
    $(this).mousemove(function (e) {
        idletime = 0;
    });

    $(this).keypress(function (e) {
        idletime = 0;
    });


function idleIncrement() {
    idletime += 1;
    if (idletime > 6) {
        $("#menu").hide(500);
    }
}






            



