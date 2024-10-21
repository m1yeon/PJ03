 //스크롤시 나오는 탑 버튼 구현하기

  $(document).ready(function(){
  //1. 탑버튼 클릭 후  화면 스크롤 시 부드러운 움직임
  $('.topBtn').click(function(){
    $('html,body').animate({'scrollTop':'0'},500);

    return false;
  });

  // 2. 스크롤시 해당 영역 지난  후 탑버튼 나오게 하기
  $('.topBtn').hide();   //일단 숨겨준 후

  $(window).scroll(function(){
    let screenPos = $(this).scrollTop();
    console.log(screenPos);

    if(screenPos >= 500){
      $('.topBtn').fadeIn();
    }else{
      $('.topBtn').fadeOut();
    }
  });
});

