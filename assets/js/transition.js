$(document).ready(function(){    
    let start   = $('#start');
    let present = $('#present');

    let intro        = $('.intro');
    let starting     = $('.starting');
    let presentation = $('.presentation');

    let arrowOne   = $('.first-arrow');
    let arrowTwo   = $('.second-arrow');
    let arrowThree = $('.third-arrow');
    let arrowFour  = $('.fourth-arrow');
    
    let firstMov  = $('.first-mov');
    let secondMov = $('.second-mov');
    let thirdMov  = $('.third-mov');
    let fourthMov = $('.fourth-mov');
    let fifthMov  = $('.fifth-mov');
    let sixthMov  = $('.sixth-mov');
    let loginForm  = $('.login-form');

    let loginUser   = $('#username');
    let loginPasswd = $('#password');
    let loginSubmit = $('#login_submit');

    nextTransition(start, intro, starting);

    start.click(function(){
        show(arrowOne, 2000);
        show(arrowTwo, 3000);
        show(arrowThree, 4200);
        show(arrowFour, 5400);
        show(presentation, 6400);
    });

    loginSubmit.click(function(){
        alert('Você está logando como ' + loginUser.val() + '.' + ' Sua senha atual é: ' + loginPasswd.val());
    })

    nextTransition(present, starting, firstMov);

    selectTransition(firstMov, secondMov);
    selectTransition(secondMov, thirdMov);
    selectTransition(thirdMov, fourthMov);
    selectTransition(fourthMov, fifthMov);
    selectTransition(fifthMov, sixthMov);
    selectTransition(sixthMov, loginForm);

    function show(arrow, time){
        setTimeout(function(){
          arrow.removeClass('hidden');
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