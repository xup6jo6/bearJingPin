$(document).ready(function() {
    console.log("Event triggered!")
    $('#type button[class=btn]').click((event) => {
        event.preventDefault()
        $.post('./login', {
            appellation: $('.appellation_input').val(),
            account: $('.account_input').val(),
            password: $('.password_input').val(),
        }, (res) => {
            const form = document.forms['form']
            const appellation = form.elements.appellation.value;
            const account = form.elements.account.value;
            const password = form.elements.password.value;
            // alert("appellation: "+appellation+"\naccount: "+account+"\npassword: "+password);
        });
    });
});
