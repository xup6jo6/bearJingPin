$(document).ready(function(){
    console.log("Event triggered!")
    var delay = function(s){
        return new Promise(function(resolve,reject){
        setTimeout(resolve,s); 
        });
    };

    delay().then(function(){
        return delay(1500); 
    }).then(function(){
        $('.R1').toggleClass('R1-1');
        return delay(1000); 
    }).then(function(){
        $('.R2').toggleClass('R2-1');     
        return delay(1000); 
    }).then(function(){
        $('.R2').toggleClass('R2-2');     
        return delay(1000); 
    }).then(function(){
        $('.R2').toggleClass('R2-3');
        return delay(1000);
    }).then(function(){
        $('.R1').toggleClass('fadeout');
        $('.R2').toggleClass('fadeout');
        $(".register1").fadeIn(1000);
        $(".login1").fadeIn(1000);
    });
    
    
    $(".register1").click(function(){
        $('.logo').toggleClass('logo-1');
        $(".register1").fadeOut(1000);
        $(".login1").fadeOut(1000);
        delay(1000);
        $('.login2').toggleClass('login2S');
        $('.register2').toggleClass('register2B disable-btn');
        $(".login2").fadeIn(1000);
        $(".register2").fadeIn(1000);
        $("#registerblock").fadeIn(1000);
    });
    $(".login1").click(function(){
        $('.logo').toggleClass('logo-1');
        $(".register1").fadeOut(1000);
        $(".login1").fadeOut(1000);
        delay(1000); 
        $('.login2').toggleClass('login2B disable-btn');
        $('.register2').toggleClass('register2s');
        $(".login2").fadeIn(1000);
        $(".register2").fadeIn(1000);
        $("#loginblock").fadeIn(1000);
    });
    $(".register2").click(function(){
        $("#loginblock").fadeOut();
        $('.login2').toggleClass('login2S login2B disable-btn');
        $('.register2').toggleClass('register2S register2B disable-btn');
        $("#registerblock").fadeIn();
    });
    $(".login2").click(function(){
        $("#registerblock").fadeOut();
        $('.login2').toggleClass('login2S login2B disable-btn');
        $('.register2').toggleClass('register2S register2B disable-btn');
        $("#loginblock").fadeIn();
    });
})
