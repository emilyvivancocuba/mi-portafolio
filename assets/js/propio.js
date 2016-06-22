//EFECTO APARECER Y DESAPARECER TITULO

$(document).ready(function(){
  $('#efecto-nombre span.front').slideUp(10);
  setInterval(name_effect, 4000);
});
function name_effect(){
  $('#efecto-nombre span.front').delay( 100 ).slideDown( 1000 ).delay( 1200 ).slideUp( 1200 );
}

//HEADER NAVEGADOR ESCONDIDO HASTA QUE BAJA EL SCROLL
$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.angle-icon');
   var offset = startchange.offset();
    // if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
        $('.header_area').css('display', 'block');
        $(".nav-portafolio-theme").css('background-color', '#FF9B19');
        $('.navbar-brand').css('color', '#fff');
       } else {
        $('.header_area').css('display', 'none');
       }
   });
    // }
});

// SCROLL HIGHLIGHTER
var lastId,
    topMenu = $("#navegador"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});

//CIRCUNFERENCIAS PORCENTUALES

$(document).ready(function () {
    var hasCreatedObjects = false;
    $(window).scroll(function () {
        var y = $(this).scrollTop();
        if (y >= 1900) { //depende de cuánto mida mi página de largo en px
            if (!hasCreatedObjects) {
                hasCreatedObjects = true;
                $('#circunferencia_skill_html5').circliful({
		            percent: 80,
		            foregroundColor: '#39D47E',
		            backgroundColor:'#B2FFD5'
		        });
		        $('#circunferencia_skill_css3').circliful({
		            percent: 75,
		            foregroundColor: '#39D47E',
		            backgroundColor:'#B2FFD5'
		        });
		        $('#circunferencia_skill_js').circliful({
		            percent: 60,
		            foregroundColor: '#39D47E',
		            backgroundColor:'#B2FFD5'
		        });
		        $('#circunferencia_skill_jquery').circliful({
		            percent: 55,
		            foregroundColor: '#39D47E',
		            backgroundColor:'#B2FFD5'
		        });
		        $('#circunferencia_skill_sass').circliful({
		            percent: 65,
		            foregroundColor: '#39D47E',
		            backgroundColor:'#B2FFD5'
		        });
		        $('#circunferencia_skill_jade').circliful({
		            percent: 60,
		            foregroundColor: '#39D47E',
		            backgroundColor:'#B2FFD5'
		        });
		        $('#circunferencia_skill_wordpress').circliful({
		            percent: 70,
		            foregroundColor: '#39D47E',
		            backgroundColor:'#B2FFD5'
		        });
		        // $('#circunferencia_skill_photoshop').circliful({
		        //     percent: 70,
		        //     foregroundColor: '#39D47E',
		        //     backgroundColor:'#B2FFD5'
		        // });
            $('#circunferencia_skill_git').circliful({
                percent: 70,
                foregroundColor: '#39D47E',
                backgroundColor:'#B2FFD5'
            });
            }
        }
    });
})

//SCROLL SUAVE PARA OTROS ANCHOR
$('a.scroll').click(function(e){
    e.preventDefault();
    $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
});

//EFECTO AVATAR MIRADA DE DERECHA A IZQUIERDA EN FUNCION DEL PUNTERO

// $('#izquierda').mouseover(function() {
// 	$('#avatar-autora').attr('src','assets/images/avatar1.png');
// });
// $('#derecha').mouseover(function() {
// 	$('#avatar-autora').attr('src','assets/images/avatar2.png');
// });

$(document).ready(function(){
  setInterval(repetir_avatar, 600);
});


var cont_avatar=0

function repetir_avatar() {
  cont_avatar = cont_avatar % 2;

  if (cont_avatar==1){
    $('#avatar-autora').attr('src','assets/images/avatar1.png');
  }
  else{
    $('#avatar-autora').attr('src','assets/images/avatar2.png');
  }

  cont_avatar++;
}