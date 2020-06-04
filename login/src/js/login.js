$(document).ready(function() {
    console.log("Event triggered!")
    $('#type button[class=btn]').click(function() {
        event.preventDefault()
        $.ajax({
            type: "POST",
            url: "./src/js/login.php", 
            dataType: "json",
            data: { 
                appellation: $('#type input[name=appellation]').val(),
                account: $('#type input[name=account]').val(),
                password: $('#type input[name=password]').val(),
            },
            success: function(data) {
                if (data) { 
                    $("#type")[0].reset(); //重設 ID 為 demo 的 form (表單)
                    console.log(data);
                    window.location.href = "../Home/test.html";
                } else { //否則讀取後端回傳 json 資料 errorMsg 顯示錯誤訊息
                    $("#type")[0].reset(); //重設 ID 為 demo 的 form (表單)
                    console.log(data.errorMsg)
                }
            },
            error: function(jqXHR) {
                $("#type")[0].reset(); //重設 ID 為 demo 的 form (表單)
                console.log(jqXHR.status)
            }
        });
    });
});
