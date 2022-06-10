
$(document).ready(function(){
    
    //SLIDER
    if(window.location.href.indexOf('index')>-1){
        $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
      });
    }
    

      //POSTS
      if(window.location.href.indexOf('index')>-1){
          var posts = [
{
title: 'Prueba de titulo 1',
date:  moment().format("MMMM dddd YYYY"),
content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
},
{
    title: 'Prueba de titulo 2',
    date: moment().format("MMMM dddd YYYY"),
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
    },
    {
        title: 'Prueba de titulo 3',
        date: moment().format("MMMM dddd YYYY"),
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        },
        {
            title: 'Prueba de titulo 4',
            date: moment().format("MMMM dddd YYYY"),
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
            },
            {
                title: 'Prueba de titulo 5',
                date: moment().format("MMMM dddd YYYY"),
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
                },
                {
                    title: 'Prueba de titulo 6',
                    date: moment().format("MMMM dddd YYYY"),
                    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
                    },
      ]

posts.forEach((item, index)=>{
var post = `
<article class="post">
<h3>
${item.title}
</h3>
<span class="date">
${item.date}
</span>
<p>
${item.content}

</p>
<a href="" class="button-more">Leer Mas</a>
</article>
`;

$("#posts").append(post)

})
      }

      


//SELECTOR DE TEMA
var theme = $("#theme")

$("#to-green").click(function(){
    theme.attr("href","css/green.css")
})
$("#to-blue").click(function(){
    theme.attr("href","css/blue.css")
})
$("#to-red").click(function(){
    theme.attr("href","css/red.css")
})

//SCROLL ARRIBA
$(".subir").click(function(e){
e.preventDefault()

$('html, body').animate({
    scrollTop: 0
}, 1000)

return false
})


//LOGIN FALSO

$("#login form").submit(function(e){
    console.log("hice submit")
var form_name = $("#form_name").val();


localStorage.setItem("form_name",form_name) ;

})
var form_name = localStorage.getItem("form_name")

if(form_name != null && form_name != "undifned" ){
   
   var about_parrafo = $("#about p")
   about_parrafo.html("<strong>Bienvenido, </strong>"+ form_name);
   about_parrafo.append("<a href='#' id='logout'>Cerrar sesion </a>" )
   
   
   $("#login").hide()

   $("#logout").click(function(e){
       e.preventDefault()
       console.log("hice click eb cerrar sesion")
    localStorage.clear();
    location.reload();
})

}
//ACORDEON
if(window.location.href.indexOf('sobremi')>-1){

$("#acordeon").accordion()

}

if(window.location.href.indexOf('reloj')>-1){

    setInterval(function(){
        var reloj = moment().format("h:mm:ss");
        $("#reloj").html(reloj)  
    },1000)
 
    }

//VALIDACION
if(window.location.href.indexOf('contact')>-1){
  $("form input[name='date']").datepicker()
  
    $.validate({
        lang:'es'
    });
}


})
