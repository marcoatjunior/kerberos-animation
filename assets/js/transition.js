$(document).ready(function(){    
    var start    = $('#start');
    var present  = $('#present');
    var howWorks = $('#how_works');

    var intro        = $('.intro');
    var starting     = $('.starting');
    var presentation = $('.presentation');

    var security       = $('#security');
    var cryptography   = $('#cryptography');
    var accessControl  = $('#access_control');

    var firstMov    = $('.first-mov');
    var secondMov   = $('.second-mov');
    var thirdMov    = $('.third-mov');
    var fourthMov   = $('.fourth-mov');
    var fifthMov    = $('.fifth-mov');
    var sixthMov    = $('.sixth-mov');
    var loginForm   = $('.login-form');
    var afterAuth   = $('.after-auth');
    var accessKey   = $('.access-key');
    var ticketGrant = $('.ticket-grant');
    var searching   = $('.searching-grant');
    var granted     = $('.granted');

    var loginUser   = $('#username');
    var loginPasswd = $('#password');
    var loginSubmit = $('#login_submit');
    var userKey     = $('#user_key');
    var userLogged  = $('#user_logged');

    start.click(function(){
        show(security, 2000);
        show(cryptography, 3000);
        show(accessControl, 4200);
        show(presentation, 5400);
    });

    loginSubmit.click(function(){
        if(loginPasswd.val() == "123"){
            selectTransition(loginForm, afterAuth);
        }else{
            alert('Aguarde a senha padrão para continuar a atividade.');
        }
    });

    userKey.mouseleave(function(){
        userLogged.html('<strong>Você acessou como ' + loginUser.val() + '.' + ' Sua senha atual é: ' + loginPasswd.val() + '</strong>');
    });

    howWorks.click(function(){
        var elem = document.getElementById("bar");
        var width = 0;
        var id = setInterval(frame, 250);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                selectTransition(searching, granted);
            } else {
                width++;
                elem.style.width = width + '%';
                elem.innerHTML = width * 1 + '%';
            }
        }
    });

    nextTransition(start, intro, starting);
    nextTransition(present, starting, firstMov);
    nextTransition(howWorks, ticketGrant, searching);

    selectTransition(firstMov, secondMov);
    selectTransition(secondMov, thirdMov);
    selectTransition(thirdMov, fourthMov);
    selectTransition(fourthMov, fifthMov);
    selectTransition(fifthMov, sixthMov);
    selectTransition(sixthMov, loginForm);
    selectTransition(afterAuth, accessKey);
    selectTransition(accessKey, ticketGrant);

    function show(div, time){
        setTimeout(function(){
            div.removeClass('hidden');
        }, time);
    }

    function nextTransition(button, current, next){
        button.click(function(){
            current.fadeOut(1500, function(){
                next.fadeIn(6000);
            });
        });
    }

    function selectTransition(current, next){
       current.click(function(){
            current.fadeOut(300, function(){
                next.fadeIn(3000);
            });
        });
    }
});