$(function(){
    //a 이벤트 방지
    $('a[href="#"]').on('click',function(e){
        e.preventDefault();
        // return false;
    });

    //적응형 웹(클라이언트에서 확인)
    let userAgent = navigator.userAgent;
            
    //스마트폰 구분
    let smartPhone = ['iphone', 'ipad', 'android'];
    for(let i in smartPhone) {//i만큼 실행 each와 비슷, let생략 가능
        if(navigator.userAgent.toLowerCase().match(new RegExp(smartPhone[i]))) {
            location = 'https://sinbhs.github.io/Ames-worldwide-m/';
        }
    }

    //hamburger menu
    $('.menu-wrapper').on('click', function() {
        $('.hamburger-menu').toggleClass('animate');//햄버거 메뉴 모양
        $('.nav').toggleClass('animate');//햄버거 메뉴 투명도 조절
        $('.nav').toggleClass('open');//햄버거 메뉴 왼쪽에서 오른쪽으로 등장
    });

    //vegas plugin
    $('.event_rt').vegas({
        slides : [
            {src: 'images/banner.jpg'},
            {src: 'images/banner2.jpg'},
            {src: 'images/banner3.jpg'}
        ],
        timer : false,//하단 진행바 숨김
        delay:2000,//대기시간
        transition: 'fade'//움직임의 형태
    });

    //marquee text
    let marquee = document.querySelectorAll('.clipped-text');
    // 너비를 얻기 위한 이벤트 수신기
    addEventListener("load", function () {
        marquee.forEach(el => {
        // 값이 높을수록 속도가 빠름
        let rate = 200;
        // 요소의 너비 가져오기
        let distance = el.clientWidth;
        // 요소의 오른쪽 여백 가져오기
        let style = window.getComputedStyle(el);
        let marginRight = parseInt(style.marginRight) || 0;
        // 요소의 전체 너비 가져오기
        let totalDistance = distance + marginRight;
        // 애니메이션 지속 시간
        let time = totalDistance / rate;
        // 요소의 상위 항목 가져오기
        let container = el.parentElement;

        gsap.to(container, time, {
        repeat: -1,
        x: '-'+totalDistance,
        ease: Linear.easeNone,
        });
        });
    });

    //product swiper
    var swiper = new Swiper('.pd-container', {
        slidesPerView: 3,
        loop:true,
        autoplay:{
            delay:1000,
        },
        speed:500
    });

    //scrollTop 버튼 클릭 시
    $('.scrollTop').on('click',function(){
        $('html,body').animate({
            scrollTop:0
        },600);
    });
    $(window).scroll(function(){
        $('.scrollTop').stop().animate({opacity:0},300);
        var scroll = $(this).scrollTop();
        if(scroll > 90) {
            $('.scrollTop').stop().animate({opacity:1});
        }
    });
});