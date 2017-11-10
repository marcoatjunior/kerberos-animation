$(document).ready(function(){
    $(function(){
        $('.first-mov').click(
            function(){
                $('.first-mov').fadeOut(300, function(){
                    $('.second-mov').fadeIn(3000);
                });
            }
        );
        $('.second-mov').click(
            function(){
                $('.second-mov').fadeOut(300, function(){
                    $('.third-mov').fadeIn(3000);
                });
            }
        );
        $('.third-mov').click(
            function(){
                $('.third-mov').fadeOut(300, function(){
                    $('.fourth-mov').fadeIn(3000);
                });
            }
        );
        $('.fourth-mov').click(
            function(){
                $('.fourth-mov').fadeOut(300, function(){
                    $('.fifth-mov').fadeIn(3000);
                });
            }
        );
        $('.fifth-mov').click(
            function(){
                $('.fifth-mov').fadeOut(300, function(){
                    $('.sixth-mov').fadeIn(3000);
                });
            }
        );
        $('.sixth-mov').click(
            function(){
                $('.sixth-mov').fadeOut(300, function(){
                    $('.first-mov').fadeIn(3000);
                });
            }
        );
    });
});