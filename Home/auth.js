var userMoney;
var loginAccount = localStorage.getItem("Account");
console.log("User:" + loginAccount);
function onClick(){
    userMoney = document.getElementById('mmoney').innerHTML;
    userMoney ++;
    document.getElementById('mmoney').innerHTML = userMoney;
}
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
            console.log("status:"+result.status);
            console.log("msg:"+result.message);
            console.log('account:'+result.user.account)
            console.log('money:'+result.user.money)
            usermoney = result.user.money;
            document.getElementById('para').innerHTML = result.user.account;
            document.getElementById('mmoney').innerHTML = result.user.money;
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
function saveInfo(){
    userMoney = document.getElementById('mmoney').innerHTML;
    $.ajax({
        type: "POST",
        url: "/getInfo/save",
        contentType:"application/json",
        //dataType:"json",
        data:JSON.stringify({
            account:loginAccount,
            money:userMoney
        }),//参数列表
        success:function(result){
            console.log('Save Ajax Success');
            //请求正确之后的操作
        }
    });
}

$( document ).ready(function() {
    console.log( "ready!" );
    userMoney = document.getElementById('mmoney').innerHTML;
    $autoRefresh = getInfo();
    if($autoRefresh){
        console.log("---Auto Refresh---");
        setInterval(function(){ 
            saveInfo();
        }, 10000);  //預設10000毫秒自動重複執行cartnumber()函數
    }
});

