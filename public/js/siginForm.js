$().ready(function() {
    $("#siginForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email:{
                required: true,
                email: true
            },
            password:{
                required: true,
                minlength: 5
            },
            confirm_password:{
                required: true,
                minlength: 5,
                equalTo: "#password"
            }
        },
        messages: {
            
        }
    })
})