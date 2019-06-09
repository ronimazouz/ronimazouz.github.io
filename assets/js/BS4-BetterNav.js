$(function(){var body=$('body');var navbarCollapse=$('.navbar-collapse');body.append('<div id= "side-menu-show" class="side-menu-overlay"></div>');var overlay=$('.side-menu-overlay');body.append('<div id="side-menu"></div>');var sideMenu=$('#side-menu');sideMenu.append('<button class="close"><span aria-hidden="true">×</span></button>')
var sideMenuCloseBtn=sideMenu.find('.close');sideMenu.append('<div class="contents"></div>')
var sideMenuContents=sideMenu.find('.contents');navbarCollapse.on('show.bs.collapse',function(e){e.preventDefault();var menuContent=$(this).html();sideMenuContents.html(menuContent);slideIn()});sideMenuCloseBtn.on('click',function(e){e.preventDefault();slideOut()});overlay.on('click',function(e){slideOut()});$(window).resize(function(){if(!navbarCollapse.is(":visible")&&body.hasClass('side-menu-visible')){sideMenu.show();overlay.show()}
else{sideMenu.hide();overlay.hide()}});function slideIn(){body.addClass('overflow-hidden');sideMenu.show();setTimeout(function(){body.addClass('side-menu-visible');overlay.fadeIn()},50)}
function slideOut(){body.removeClass('side-menu-visible');overlay.fadeOut();setTimeout(function(){sideMenu.hide();body.removeClass('overflow-hidden')},400)}})

  function toggle_visibility() {
   var e = document.getElementById('side-menu');
   var f = document.getElementById('side-menu-show');
   if((e.style.display == 'block') && (f.style.display == 'block'))
      e.style.display = 'none';
      f.style.display = 'none';

}