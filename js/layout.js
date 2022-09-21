var cnt=0;
$(document).ready(function() { 
    
    $('.bi').toggle(
        function(){
            $("*").addClass("light_mode_title");           
        },
        function(){
            $("*").removeClass("light_mode_title");
        }
    );
    //click-menu_item event
    $('.bi').click(
        function()
        {
            cnt++;
            $('nav .menu-item').hover(function(){
                $(this).toggleClass("changed");
                $(this).find('a').toggleClass("bolder");
            });   
        if(cnt%2!=0)
        {
            $( "nav .menu-item" ).each(function( index ) {
                if($(this).hasClass('active1')==true)
                {
                    console.log("checkin_2");
                    $(this).removeClass("active1");
                    $(this).find('a').removeClass("active1_1");
                    $(this).addClass("active2");
                    $(this).find('a').addClass("active2_1");
                }
            });
        }
        else
        {
            $( "nav .menu-item" ).each(function( index ) {
                if($(this).hasClass('active2')==true)
                {
                    console.log("checkin_1");
                    $(this).removeClass("active2");
                    $(this).find('a').removeClass("active2_1");
                    $(this).addClass("active1");
                    $(this).find('a').addClass("active1_1");
                }
            });
        }
            
        }
    );
      //click-menu_item event
    $("nav .menu-item").click(function(){
        if(cnt%2!=0)
        {
            console.log(cnt);
            $( "nav .menu-item" ).each(function( index ) {
                if($(this).hasClass('active1')==true)
                {
                    console.log("checkin_2");
                    $(this).addClass("active2");
                    $(this).find('a').addClass("active2_1");
                }
            });
            $("nav .menu-item").removeClass("active2");
            $("nav .menu-item").find('a').removeClass("active2_1");
            $("nav .menu-item").removeClass("active1");
            $("nav .menu-item").find('a').removeClass("active1_1");
            $(this).addClass("active2");
            $(this).find('a').addClass("active2_1");
        }
        else
        {
            console.log(cnt);
            $( "nav .menu-item" ).each(function( index ) {
                if($(this).hasClass('active2')==true)
                {
                    console.log("checkin_1");
                    $(this).addClass("active1");
                    $(this).find('a').addClass("active1_1");
                }
            });
            $("nav .menu-item").removeClass("active2");
            $("nav .menu-item").find('a').removeClass("active2_1");
            $("nav .menu-item").removeClass("active1");
            $("nav .menu-item").find('a').removeClass("active1_1");
            $(this).addClass("active1");
            $(this).find('a').addClass("active1_1");
        }
    });




}); 

//Turn dark mode or light mode 
const darkMode=document.querySelector('.bi')
darkMode.onclick=function(){
    
    const $=document.querySelector.bind(document);
    const $$=document.querySelectorAll.bind(document);
    darkMode.classList.toggle('bi-lightbulb-fill');
    // darkMode.classList.toggle('light_mode_bar_item');
    darkMode.classList.toggle('bi-lightbulb-off-fill')
    darkMode.classList.toggle('light_mode_title');

    const logo=$('#logo');
    const url_defaultLogo="../images/logo3_gold.png";
    const url_lightLogo="../images/logo3_light.png";
    const brandName=$('.logo span');
    const nav_barTitle=$$('nav .menu-item a');

    
  
    //logo
    if(logo.src.indexOf('logo3_gold.png')!=-1)
    {
        logo.src=url_lightLogo;
        
    }
    else
    {
        logo.src=url_defaultLogo;
    }
    //boder
    $('header').classList.toggle('light_mode_border_bar');
    $('footer').classList.toggle('light_mode_border_bar');

    //menu-item
    brandName.classList.toggle('light_mode_bar_item');
    nav_barTitle.forEach((item,index)=>{
        item.classList.toggle('light_mode_bar_item');
      
    });

    

    //footer-item
    $$('footer span').forEach((item,index)=>{
        item.classList.toggle('light_mode_bar_item');
    })
    $$('footer .item i').forEach((item,index)=>{
        item.classList.toggle('light_mode_bar_item');
    })
    $('footer .email').classList.toggle('light_mode_border_bar');

    $('.logo span').classList.toggle('light_mode_title');
    $('body').classList.toggle('light_mode_body');


 

}

