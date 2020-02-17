$(document).ready(function () {

    //DRAG//
    $(".picDrag").draggable({
        cursor: "grabbing"
        });

    $('#title').click(function(){
            let Show = 'visible';
    
        $('.text').css('visibility', Show);   
    });

    $('#title').click(function(){
        let picHide = 'hidden';

        $('img').css('visibility', picHide);   
    });

    $('#title').click(function(){
        let switchBG = 'white';

        $('body').css('background-color', switchBG);   
    });

    $('#title').click(function(){
        let switchColor = 'black';

        $('a').css('color', switchColor);   
    });

    $('#title').click(function(){
        let switchColor = 'black';

        $('#title').css('color', switchColor);   
    });

    $('#title').click(function(){
        let switchColor = 'black';

        $('.seth').css('color', switchColor);   
    });

    $('#title').click(function(){
        let overflowShow = 'visible';

        $('body').css('overflow-x', overflowShow);   
    });

    $('#title').click(function(){
        let overflowShow = 'visible';

        $('body').css('overflow-y', overflowShow);   
    });

    $('#title').click(function(){
        let overflowShow = 'visible';

        $('.box').css('visibility', overflowShow);   
    });

    $('#title').dblclick(function(){
        let Hide = 'hidden';

         $('.text').css('visibility', Hide);   
    });

    $('#title').dblclick(function(){
        let picShow = 'visible';

         $('img').css('visibility', picShow);   
    });

    $('#title').dblclick(function(){
        let returnBlack = 'black';

         $('body').css('background-color', returnBlack);   
    });

    $('#title').dblclick(function(){
        let returnWhite = 'white';

         $('a').css('color', returnWhite);   
    });

    $('#title').dblclick(function(){
        let returnWhite = 'white';

         $('.seth').css('color', returnWhite);   
    });

    $('#title').dblclick(function(){
        let overflowHide = 'hidden';

         $('body').css('overflow-x', overflowHide);   
    });

    $('#title').dblclick(function(){
        let overflowHide = 'hidden';

         $('body').css('overflow-y', overflowHide);   
    });

    $('#title').dblclick(function(){
        let overflowHide = 'hidden';

        $('.box').css('visibility', overflowHide);   
    });
        
});