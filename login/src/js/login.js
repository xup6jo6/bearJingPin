$(document).ready(function() {
    console.log("Event triggered!")
    $('#type button[class=btn]').click((event) => {
        event.preventDefault()
        $.post('./login', {
            appellation: $('.appellation_input').val(),
            account: $('.account_input').val(),
            password: $('.password_input').val(),
        }, (res) => {
            var a =res.appellation;
            var b =res.account;
            var c =res.password;
            alert("appellation: "+a+"\naccount: "+b+"\npassword: "+c);
        });
    });
});
