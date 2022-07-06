$('.navbar_gnb, .sub_shadow').on('mouseenter mouseleave',(function(aa){
    if($(window).width() > 1169 ){   //pc 데스크탑 상태

    if( aa.type == 'mouseenter'){
        $('.sub').stop().slideDown();
        $('.sub_shadow').stop().fadeIn();
    } else {
        $('.sub').stop().slideUp(250,function(){
            $('.sub').removeAttr('style');
        });
        $('.sub_shadow').stop().fadeOut(250,function(){
            $(this).removeAttr('style');
        });
    }
    } else {        //모바일 상태

    }
    
})

);


const $mainBtn = $('.navbar .navbar_gnb > li > a'); // 메인메뉴

$mainBtn.click(function(){ //모바일 상태에서만 실행_서브메뉴 슬라이드
    if($(window).width() < 1170 ){
    if( !$(this).parents('li').hasClass('on') ){ // 클릭한 a의 부모 li에 클라스on가 없을 때
        $('.sub').slideUp(100);
        $('.navbar .navbar_gnb > li').removeClass('on');
        $(this).siblings('.sub').slideDown();
        $(this).parents('li').addClass('on');
    } else {                                        //클릭한 부분 sub가 열려있을때
        $(this).siblings('.sub').slideUp(100,function(){});
        $(this).parents('li').removeClass('on');
        }
    }

});

//모바일 상태에서 햄버거 버튼을 누르면 사이드바가 열리고 닫힘
$('.trigger').click(function(){
    $(this).toggleClass('open');

    if($(this).hasClass('open')){
    $('.gnb').animate({right:0},500);
    $('header').animate({left:-250},500)
    } else {
        $('.gnb').animate({right:-250},300);
        $('header').animate({left:0},300);
    }
})
$(window).resize(function(){
    if($(window).width() > 1169){
        $('.sub').removeAttr('style');
        $('.navbar .navbar_gnb > li').removeClass('on');
    }

});


//모달팝업 닫기버튼
const closeBtn = document.querySelector('.close');
const elPopup = document.querySelector('#popup');

closeBtn.onclick = function(aa){
    aa.preventDefault();            //a태그의 기본기능이 안되게 함
    elPopup.style.display = "none"; 
}

var aa = 0;        //변수 aa에 0을 넣는다.(toggle ul가 안보이는 상태)

$('.toggle').click(function(){
    if(aa == 0){
        $('.toggle ul').show();
        aa = 5;
    } else {                     //.toggle ul가 보이는 상태
        $('.toggle ul').hide();
        aa = 0;
    }
    
});