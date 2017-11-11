$(document).ready(function(){    
    var start   = $('#start');
    var present = $('#present');

    var intro        = $('.intro');
    var starting     = $('.starting');
    var presentation = $('.presentation');

    var security       = $('#security');
    var cryptography   = $('#cryptography');
    var accessControl  = $('#access_control');

    var firstMov  = $('.first-mov');
    var secondMov = $('.second-mov');
    var thirdMov  = $('.third-mov');
    var fourthMov = $('.fourth-mov');
    var fifthMov  = $('.fifth-mov');
    var sixthMov  = $('.sixth-mov');
    var loginForm  = $('.login-form');

    var loginUser   = $('#username');
    var loginPasswd = $('#password');
    var loginSubmit = $('#login_submit');

    nextTransition(start, intro, starting);

    start.click(function(){
        show(security, 2000);
        show(cryptography, 3000);
        show(accessControl, 4200);
        show(presentation, 5400);
    });

    nextTransition(present, starting, firstMov);

    selectTransition(firstMov, secondMov);
    selectTransition(secondMov, thirdMov);
    selectTransition(thirdMov, fourthMov);
    selectTransition(fourthMov, fifthMov);
    selectTransition(fifthMov, sixthMov);
    selectTransition(sixthMov, loginForm);

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

    loginSubmit.click(function(){
        alert('Você está logando como ' + loginUser.val() + '.' + ' Sua senha atual é: ' + loginPasswd.val());
    });
});