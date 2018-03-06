$(document).ready(function(){
    $test = $(".side-nav-link");
    $cat = $("cat-side-nav");    
    $k = $("#comitted").children();
    
    function myFunction(x) {
         x.classList.toggle("change");
         document.getElementById("myDropdown").classList.toggle("show");
     }
     
     $('a[href^="#"]').on('click',function (e) {
         e.preventDefault();
 
         var target = this.hash,
         $target = $(target);
 
         $('html, body').stop().animate({
             'scrollTop': $target.offset().top
         }, 900, 'swing', function () {
             window.location.hash = target;
         });
         
         console.log($(this).attr("href"));
         
         var x = $(this).attr("href");
         
         for(var i = 0; i < $test.length; i++){
             
             if($test[i].getAttribute("href") == x){
                 $(this).css('background-color', '#009688');
                 $(this).css( "color", "white");
             }else{
                 $($test[i]).css("background-color", "white");
                 $($test[i]).css("color", "black");
             }
         }
         //console.log();
         
         for(var o = 0; o < $k.length; o++){
             
             if($($k[o]).attr("value") == x){
                 
                 $($k[o]).removeClass("hidden");
             
             }else{
                 if($($k[o]).hasClass("hidden")){
                     continue;
                 }else{
                     $($k[o]).addClass("hidden");    
                 }
                 
             }
         }
         
         $('.menu-icon').toggleClass("change");
         document.getElementById("myDropdown").classList.toggle("show");
     });
     
     $('.menu-icon').on('click',function (e){
        //e.stopPropagation();
        myFunction(this);
     });
     
 //	$(document).click( function(e) {
       //  $("#myDropdown").hide();
     //});
     $('.side-nav-link').hover(function(){
         //console.log();
         if($(this).css("background-color") == "rgb(0, 150, 136)"){
             $(this).css("background-color", "#009688");
         }else{
            $(this).css("background-color", "#dcdcdc"); 
         }
     }, function(){
         if($(this).css("background-color") == "rgb(0, 150, 136)"){
             $(this).css("background-color", "#009688");
         }else{
             $(this).css("background-color", "white");            
         }
 
     });
     
 });