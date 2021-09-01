$(function(){

    //header_bottom sticky기능
    var h_top=$('.header_bottom').offset().top;
    $(window).scroll(function(){
        var win_top=$(window).scrollTop();
        if(win_top>=h_top){
            $('.header_bottom').addClass('active');
        }else{
            $('.header_bottom').removeClass('active');
        }
    });


    $('nav>div>div').hover(function(){
        $(this).find('.sub').stop().slideDown(200,/* 'easeOutSine' */).css('z-index','1000')
        ;
    },
    function(){
        $(this).find('.sub').stop().slideUp(200,/* 'easeInSine' */).css('z-index','100')
        ;
    });


    //두가지의 jquery 라이브러리를 사용할 경우 충돌 방지
    


    //splide slider
    new Splide('.splide',{
        type:'loop',
        // padding:{
        //     right:'20px',
        //     left:'20px'
        // },
        perPage:5,
        perMove:1,
        focus:'center',
        width:'1180px',
        pagination:false
    }).mount();


    //bxslider
    var bx1=$('.bxslider1').bxSlider({mode:'fade', pager:false, controls:false});
    var bx2=$('.bxslider2').bxSlider({mode:'fade', pager:false, controls:false});
    var bx3=$('.bxslider3').bxSlider({mode:'horizontal', pager:false, controls:false});
    var bx4=$('.bxslider4').bxSlider({mode:'fade', pager:false, controls:false});
    var bx5=$('.bxslider5').bxSlider({mode:'fade', pager:false, controls:false});

    //bx prev btn
    $('.bx_prev').click(function(e){
        e.preventDefault();
        bx1.goToPrevSlide();
        bx2.goToPrevSlide();
        bx3.goToPrevSlide();
        bx4.goToPrevSlide();
        bx5.goToPrevSlide();
    });

    //bx next btn
    $('.bx_next').click(function(e){
        e.preventDefault();
        bx1.goToNextSlide();
        bx2.goToNextSlide();
        bx3.goToNextSlide();
        bx4.goToNextSlide();
        bx5.goToNextSlide();
    });


    // slick slider
    $('.kids_slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
    });


    //MD's PICK
    $('.mdspick_title > div > .mdspick_button:first h3').addClass('active');
    $('.best_list').hide();
    $('.best_list:first').show();
    $('.t1').click(function(e){
        e.preventDefault();
        $('.mdspick_button h3').removeClass('active');
        $('.t1 h3').addClass('active');
        $('.mdspick_list').addClass('hide');
        $('.list1').removeClass('hide');
    });
    $('.t2').click(function(e){
        e.preventDefault();
        $('.mdspick_button h3').removeClass('active');
        $('.t2 h3').addClass('active');
        $('.mdspick_list').addClass('hide');
        $('.list2').removeClass('hide');
    });
    $('.t3').click(function(e){
        e.preventDefault();
        $('.mdspick_button h3').removeClass('active');
        $('.t3 h3').addClass('active');
        $('.mdspick_list').addClass('hide');
        $('.list3').removeClass('hide');
    });
    $('.t4').click(function(e){
        e.preventDefault();
        $('.mdspick_button h3').removeClass('active');
        $('.t4 h3').addClass('active');
        $('.mdspick_list').addClass('hide');
        $('.list4').removeClass('hide');
    });
    
    //top버튼
    $('.too_top').click(function(){
        //top버튼 클릭하면 맨위로 올라감
        $('html,body').animate({'scrollTop':0});
    });

});
