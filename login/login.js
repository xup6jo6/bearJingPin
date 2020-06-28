$(".login-post").on("click",function(event){
  event.preventDefault();//使a自带的方法失效，即无法调整到href中的URL(http://www.baidu.com)
  $.ajax({
         type: "POST",
         url: "/login/post",
         contentType:"application/json",
         data: JSON.stringify({
             account:$('.accountL_input')[0].value,
             password:$('.passwordL_input')[0].value
         }),//参数列表
         success: function(result){
            //请求正确之后的操作
            console.log('Ajax Success');
            console.log('result:'+result);
            console.log("status:"+result.status);
            console.log("msg:"+result.message);
            if(result.status=='fail'){
                alert(result.message)
            }
            else{
                document.location.href ='/Home/test.html'
            }
         }
  });
});


$(".register-post").on("click",function(event){
  // document.location.href ='/login/register'
  var appellation = $(".appellationR_input")[0].value
  var account = $(".accountR_input")[0].value
  var password = $(".passwordR_input")[0].value
  if(/*password=='' || account == '' || appellation == ''*/false){
      //alert("Please fill in the blank");
      /*console.log("Please Fill in the blank");
      alert("註冊資料不可為空白");
      history.go(0);*/
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
                console.log('result:'+result);
                console.log("status:"+result.status);
                console.log("msg:"+result.message);
                //document.location.href ='/Home/test.html'
                //请求正确之后的操作
                if(result.status=='fail'){
                    alert(result.message)
                }
                else{
                    document.location.href ='/Home/test.html'
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

});
