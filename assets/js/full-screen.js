            var isFullscreen = false;
            
            function fullscreen(){      
                var d = {};
                var speed = 300;
                if(!isFullscreen){ // MAXIMIZATION
                    d.width = "100%";
                    d.height = "100%"; 
                    isFullscreen = true;
                    $("#div-margin").slideUp(speed);
                    $("#div-messenger").slideUp(speed)
                
                }
                else{ // MINIMIZATION            
                    d.width = "100%";
                    d.height = "50vh";            
                    isFullscreen = false;
                    $("#div-margin").slideDown(speed);
                    $("#div-messenger").slideDown(speed+200)
                    
                }
                $("#div-video-big").animate(d,speed);         
            }

$("button").click(function() {
  $(this).toggleClass('click');
});

$("button").click(function() {
  $(this).toggleClass('rec');
});

$("button").click(function(){
 $(this).toggleClass('rotator')  ; 
})

var image =  document.getElementById("icon-record");
function changeimg() {
    if (image.getAttribute('src') == "/assets/img/record.png")
    {
        image.src = "/assets/img/camcorder.png";
    }
    else
    {
        image.src = "/assets/img/record.png";
    }
}

var image2 =  document.getElementById("expand");
function changeimg2() {
    if (image2.getAttribute('src') == "/assets/img/minimize.png")
    {
        image2.src = "/assets/img/maximize.png";
    }
    else
    {
        image2.src = "/assets/img/minimize.png";
    }
}

var image3 =  document.getElementById("cam-cut");
function changeimg3() {
    if (image3.getAttribute('src') == "/assets/img/cam-off.png")
    {
        image3.src = "/assets/img/cam-on.png";
    }
    else
    {
        image3.src = "/assets/img/cam-off.png";
    }
}

var image4 =  document.getElementById("mic-cut");
function changeimg4() {
    if (image4.getAttribute('src') == "/assets/img/mic-off.png")
    {
        image4.src = "/assets/img/mic-on.png";
    }
    else
    {
        image4.src = "/assets/img/mic-off.png";
    }
}


function showDiv(){
    document.getElementById('div-show-accueil').setAttribute('style', 'display:block');
}
    

 






