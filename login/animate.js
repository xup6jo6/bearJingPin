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
        $('.logo').toggleClass('logo-1');
        return delay(1000);
    }).then(function(){
        $('.typein').toggleClass('typein1');
        return delay(0);
    });
})
