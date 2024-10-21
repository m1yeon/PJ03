    //스티키 헤더/메인 메뉴
    $(document).ready(function(){

      //자바스크립트에 미디어쿼리 사용시 자동 새로고침
      let bWidth = window.innerWidth; //현재 화면의 너비값
      window.addEventListener("resize", function(){
        const nWidth = window.innerWidth; //사이즈 변경 되었을 때의 너비값
        if((bWidth < 768 && nWidth >= 768)||(bWidth > 767 && nWidth <=767)){  //bwidth가 768보다 작고, nWidth가 768보다 크거나 같을 때 + bwidth가 767보다 크고, nWidth가 767보다 작거나 같을 때(즉 전체를 선택하는 것과 같음)
          this.location.reload();
        }
        bWidth = nWidth;
      });


      if($(window).width()>=768){  // pc, tablet일 때
      // 1. 스크롤에 반응하는 헤더 
      var prevScrollTop = 0;

      document.addEventListener("scroll", function(){
        var nowScrollTop = $(window).scrollTop();  // 현재 스크롤 위치를 nowscrolltop에 저장

        if (nowScrollTop > prevScrollTop) { //스크롤 내릴 때
          $('.headerWrapper').addClass('hd_active');
          $('.hb_logo').show();
          $('.hb_search').show();
        } else { // 스크롤 올릴 때
          $('.headerWrapper').removeClass('hd_active');
          $('.hb_logo').hide();
          $('.hb_search').hide();
          // $('.mainMenu').removeClass('mainMenuAct');
        }
        prevScrollTop = nowScrollTop; //prevScrollTop, nowScrollTop 조건 판단 후, 현재 스크롤 값을 prevScrollTop에 저장
      });
      const $body = document.querySelector('body');
      function preventScroll(e) {
        e.preventDefault();
      }

      // 2. 메뉴 버튼 클릭시 메인 메뉴 나오게 하기
      mn = 0;
      $('.menu_btn').click(function(){
        if(mn == 0){
          //1. 메인메뉴 높이가 커지면서 나오게 하기
          $('.mainMenu').addClass('mainMenuAct'); 
          // 2. 메인메뉴 나오면서 닫기 아이콘으로 교체
          $('.menu_btn > span').addClass('close_btn');
          // 3. 헤더의 높이가 작아지게하기
          $('.headerWrapper').addClass('hd_active');
          // 4. 작은 로고 나오게 하기
          $('.hb_logo').show();
          // 5. headerbottom의 searchWrap나오게 하기
          $('.hb_search').show();
          // 6. 메뉴 클릭시 스크롤 안되게 막기
          $body.addEventListener('wheel',preventScroll, {passive: false});
          mn = 1;
        }else{
          //1. 메인메뉴 높이가 줄어들면서 숨기기
          $('.mainMenu').removeClass('mainMenuAct');
          // 2. 메인메뉴 나오면서 메뉴 아이콘으로 교체
          $('.menu_btn > span').removeClass('close_btn');
          // 3. 메뉴 닫기 버튼 클릭시 헤더 전체 나오게 하기
          $('.headerWrapper').removeClass('hd_active');
          // 4. 작은 로고, 서치 영역 숨기기
          $('.hb_logo').hide();
          $('.hb_search').hide();
          // $('.hb_logo').hide();
          // 6. 메뉴 클릭시 다시 스크롤 되게 하기
          $body.removeEventListener('wheel', preventScroll, {passive:false});
          mn = 0;
        }
      });
      }else{  // mobile일 때
        // 1. 메뉴 버튼 클릭시 메인 메뉴 나오게 하기
        mn = 0;
        $('.menu_btn').click(function(){
          if(mn == 0){
            //1. 메인메뉴 높이가 커지면서 나오게 하기
            $('.mainMenu').addClass('mainMenuAct'); 
            // 2. 메인메뉴 나오면서 닫기 아이콘으로 교체
            $('.menu_btn > span').addClass('close_btn');

            mn = 1;
          }else{
            //1. 메인메뉴 높이가 줄어들면서 숨기기
            $('.mainMenu').removeClass('mainMenuAct');
            // 2. 메인메뉴 나오면서 메뉴 아이콘으로 교체
            $('.menu_btn > span').removeClass('close_btn');
            mn = 0;
          }
        });

        // 2. 모바일 아코디언 메뉴
        $('.mlnb > ul > li').click(function(){
          // $('.mlnb_sub').stop().slideUp();
          //$(this).find('.mlnb_sub').slideToggle(300);
          //서브메뉴 전체 슬라이드업-제외(현재 클릭한 메뉴의 서브 메뉴는 슬라이드 토글)
          $('.mlnb_sub').not($(this).find('.mlnb_sub').slideToggle(300)).slideUp();

          // 아코디언 메뉴 클릭시 플러스 버튼 변경
          $('.mlnb > ul > li').not($(this).toggleClass('plusact')).removeClass('plusact');
        });
      }
    });