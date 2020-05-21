$(document).ready(function() {
    console.log("Event triggered!")
    $('#type button[class=btn]').click((event) => {
        event.preventDefault()
        $.post('./login', {
            appellation: $('.appellation_input').val(),
            account: $('.account_input').val(),
            password: $('.password_input').val(),
        }, (res) => {
            window.location.href = "../Home/test.html";
        });
    });
});
