
AOS.init();


jQuery(document).ready(function($){
    $('.enter').on('click', function(){
        $('.overlay').animate({
              opacity: "1",
              opacity: "0"
            }, 2000,
            function(){
                $(this).css('display', 'none');
            }
        );
        $('.custom-modal').removeClass('error-overlay');
        clearInterval(stopAnimate);
    });
    
    $('.exit').on('click', function(){
        $('.custom-modal').addClass('error-overlay');
    });


    var bArray = [];
    var sArray = [4,6,8,10,15,20];
 
    for (var i = 0; i < $('.bubbles').width(); i++) {
        bArray.push(i);
    }
     
    function randomValue(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
 
    var stopAnimate = setInterval(function(){
         
        var size = randomValue(sArray);
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity' : '-=0.5'
        }, 5000, function(){
            $(this).remove()
        }
        );
    }, 350);
});

