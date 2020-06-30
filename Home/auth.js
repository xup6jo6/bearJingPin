function getInfo(){
    $.ajax({
        type: "POST",
        url: "/getInfo",
        contentType:"application/json",
        //dataType:"json",
        data:JSON.stringify({
            account:loginAccount
        }),//参数列表
        success:function(result){
            console.log('Ajax Success');
            console.log('result:'+result);
            console.log("status:"+result.status);
            console.log("msg:"+result.message);
            console.log('account:'+result.user.account)
            console.log('money:'+result.user.money)
            var para = document.getElementById('para');
            para.innerHTML = result.user.account;
            //请求正确之后的操作
            if(result.status=='fail'){
                alert(result.message)
            }
            else{
                alert(result.message)
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
    return true;
}
$( document ).ready(function() {
    console.log( "ready!" );
    $autoRefresh = getInfo();
    if($autoRefresh){
        console.log("---Auto Refresh---");
        setInterval(function(){ 
            getInfo();
        }, 10000);  //預設10000毫秒自動重複執行cartnumber()函數
    }
});
var loginAccount = localStorage.getItem("Account");
console.log("User:" + loginAccount);
