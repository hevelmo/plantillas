$(document).ready(function() {
        $('.open-panel').addClass('animated fadeInRight').attr('style', 'opacity: 1; visibility: visible;');
    /*
    $('body').on('click', '.active-panel', function(event) {
        event.preventDefault();
        $('#usuario').addClass('only');
        $('.if-is-open-panel').addClass('animated bounceOut').removeClass('bounceIn');
        $('#password').removeAttr('data-validation-data');
        $('#error_data_password').removeClass('invalid_message');
        $('.open-panel').addClass('animated fadeInRight').removeClass('fadeOutRight').attr('style', 'opacity: 1; visibility: visible;');
    });
    $('body').on('click', '.close-panel-box', function(event) {
        event.preventDefault();
        $('#usuario').removeClass('only');
        $('.if-is-open-panel').addClass('animated bounceIn');
        $('#password').attr('data-validation-data', 'required|data');
        $('#error_data_password').addClass('invalid_message');

        $('.open-panel').removeClass('fadeInRight').addClass('animated fadeOutRight');
    });
    */
    var $usuario = $('#usuario'), $password = $('#password');
    $password.on('focusout', function () {
        $.validate_input($password);
    });
    $usuario.on('focusout', function () {
        $.validate_input($usuario);
    });
    $('body').on('click', '#iniciar-sesion', function(){
        var datos=$('#signin').serialize();
        var $usuario = $('#usuario'), $password = $('#password');
        $password.on('focusout', function () {
            $.validate_input($password);
        });
        $usuario.on('focusout', function () {
            $.validate_input($usuario);
        });
        var $btnSend = $('.boton-enviar');
        $btnSend.removeAttr('disabled');
        var form_errors = 0;
        if (!$.validate_input($usuario)) {
            form_errors++;
            $usuario.focus();
        }
        if (!$.validate_input($password)) {
            form_errors++;
            $password.focus();
        }
        if (form_errors == 0) {
            $btnSend.css('cursor', 'auto').prop('disabled', true);
            //$btnSend.parent('#loader_send_icon').css('display', 'block');
            $.ajax({
                type:"POST",
                url:"templates/signin.php",
                data:{datos:datos},
                success:function(data){
                    if(data==1){
                        console.log(data);
                    }else{
                        console.log(data);
                    }
                }
            });
            return false;
        }
    });
});