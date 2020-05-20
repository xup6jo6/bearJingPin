$(document).ready(function() {
    console.log("Event triggered!")
    $('#type button[class=btn]').click((event) => {
        event.preventDefault()
        $.post('./login', {
            appellation: $('#type input[name=appellation]').val(),
            account: $('#type input[name=account]').val(),
            password: $('#type input[name=password]').val(),
        }, (res) => {
            console.log(res);
            var Appellation =res['appellation'];
            var Account =res['account'];
            var Password =res['password'];
            alert("appellation: "+Appellation+"\naccount: "+Account+"\npassword: "+Password);
        });
    });
});
