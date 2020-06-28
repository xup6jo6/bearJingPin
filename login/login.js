/*$('#login-button').click(function(){
  $('#login-button').fadeOut("slow",function(){
    $("#container-login").fadeIn();
    TweenMax.from("#container-login", .4, { scale: 0, ease:Sine.easeInOut});
    TweenMax.to("#container-login", .4, { scale: 1, ease:Sine.easeInOut});
  });
});

$(".close-btn").click(function(){
  TweenMax.from("#container-login", .4, { scale: 1, ease:Sine.easeInOut});
  TweenMax.to("#container-login", .4, { left:"0px", scale: 0, ease:Sine.easeInOut});
  $("#container-login, #forgotten-container, #container-register").fadeOut(800, function(){
    $("#login-button").fadeIn(800);
  });
});
*/
/* Forgotten Password */
/*$('#forgotten').click(function(){
  $("#container-login").fadeOut(function(){
    $("#forgotten-container").fadeIn();
  });
});*/


/*$(".login-post").on("click",function(event){
  event.preventDefault();//使a自带的方法失效，即无法调整到href中的URL(http://www.baidu.com)
  $.ajax({
         type: "POST",
         url: "/login/post",
         contentType:"application/json",
         data: JSON.stringify({email:$('.email')[0].value,password:$('.password')[0].value}),//参数列表
         dataType:"json",
         success: function(result){
            //请求正确之后的操作
            if(result.status=='fail'){
              alert(result.message)
            }else{
              document.location.href ='/'
            }
         }
  });
});*/


/*$(".register").on("click",function(event){
  $('#container-login').fadeOut("slow",function(){
    $("#container-register").fadeIn();
    TweenMax.from("#container-register", .4, { scale: 0, ease:Sine.easeInOut});
    TweenMax.to("#container-register", .4, { scale: 1, ease:Sine.easeInOut});
  });
});*/
$(".register-post").on("click",function(event){
  // document.location.href ='/login/register'
  var appellation = $(".appellationR_input")[0].value
  var account = $(".accountR_input")[0].value
  var password = $(".passwordR_input")[0].value
  //alert("appellation:"+appellation+"\npassword:"+password);

  if(password=='' || account == '' || appellation == ''){
      //alert("Please fill in the blank");
      console.log("Please Fill in the blank");
      //$('#alert').show()
  }
  else{
      event.preventDefault();//使a自带的方法失效，即无法调整到href中的URL(http://www.baidu.com)
      $.ajax({
            type: "POST",
            url: "/register/post",
            contentType:"application/json",
            //dataType:"json",
            data:JSON.stringify({
                appellation:$('.appellationR_input')[0].value,
                account:$(".accountR_input")[0].value,
                password:$('.passwordR_input')[0].value
            }),//参数列表
            success:function(result){
                console.log('Ajax Success');
                //document.location.href ='/Home/test.html'
                //请求正确之后的操作
                if(result.status=='fail'){
                    alert(result.message)
                }
                else{
                    //document.location.href ='/Home/test.html'
                }
            },
            /*error:function(XMLHttpRequest, textStatus, errorThrown){
                console.log("Failed");
                console.log(XMLHttpRequest.status);
                console.log(XMLHttpRequest.readyState);
                console.log(textStatus);
            }*/
      });
      
  }
  console.log("AAAAAAAAAAAAAAEEEEEEEEEEEEEEEEE");
});
