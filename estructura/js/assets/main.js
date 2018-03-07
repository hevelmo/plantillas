$(document).ready(function() {
    $('body').on('click', '.active-panel', function(event) {
        event.preventDefault();
        $('#usuario').addClass('only');
        $('.if-is-open-panel').addClass('animated bounceOut').removeClass('bounceIn');
        $('.open-panel').addClass('animated fadeInRight').removeClass('fadeOutRight').attr('style', 'opacity: 1; visibility: visible;');
    });
    $('body').on('click', '.close-panel-box', function(event) {
        event.preventDefault();
        $('#usuario').removeClass('only');
        $('.if-is-open-panel').removeClass('bounceOut').addClass('animated bounceIn');
        $('.open-panel').removeClass('fadeInRight').addClass('animated fadeOutRight');
    });
    $('body').on('click', '#iniciar-sesion', function(){
        var datos=$('#signin').serialize();
        $.ajax({
            type:"POST",
            url:"templates/signin.php",
            data:{datos:datos},
            success:function(r){
                if(r==1){
                    console.log(r);
                }else{
                    console.log(r);
                }
            }
        });
        return false;
    });
});