$(document).ready(function () {
    //$( "#testeDom" ).text( "The DOM is now loaded and can be manipulated." );
    $("#form-cadastro").validate({
        rules: {
            nome: {
                maxlength: 100,
                minlength: 10,
                minWords: 2
            },
            telefone: {
                maxlength: 15,
                minlength: 8
            },
            email: {
                email: true
            },
            mensagem: {
                minlength: 20
            }
        },
        submitHandler: function (form) {
            //form.submit();
            alert("Seu formulário foi enviado e em breve retornaremos contato.");
        }
    });


    $("#btSubmit").click(function () {
        function handleSubmit(event) {
            event.preventDefault();
        }
        var form = document.querySelector('form');
        form.addEventListener('submit', handleSubmit);
    })
});

