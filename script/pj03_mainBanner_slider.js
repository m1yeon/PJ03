
  //main banner slider
  //변수 선언
  const slideWrap = document.querySelector('.con01_sliderWrap');     //보이는 영역
  const slider = document.querySelector('.con01_slider');     //움직이는 영역
  const slide = document.querySelectorAll('.con01_slider .con01_slide');     //슬라이드 각 이미지
  const pagination = document.querySelectorAll('.con01_sliderWrap > .pagination > li');      //페이지 네이션
  const slideWidth = slideWrap.offsetWidth;     //보이는 영역의 가로 크기

  let currentSlide = 0;

  //움직이는 함수 구현(이미지가 좌 <- 우 로 이동)
  function mSlide(index){
    slider.style.transition = '0.6s';

    slider.style.transform = `translateX(-${slideWidth*index}px)`
    currentSlide = index;
    console.log(currentSlide);

    // 페이지네이션
    for(let i=0; i < pagination.length; i++){
      if(i === index){
        pagination[i].classList.add('act');
        continue;
      }else{
        pagination[i].classList.remove('act');
      }
    }
  }

  // 3초마다 자동으로 움직이게 하기
  let Timer = setInterval(function(){
    if(currentSlide == 1){
      currentSlide = 0;
    }else{
      currentSlide++;
    }
    mSlide(currentSlide);
  },3000);

  // 페이지네이션 이벤트 생성하기
  pagination.forEach((link, index) => {
    link.addEventListener('click',(event) =>{
      event.preventDefault();
      mSlide(index);
    });

    link.addEventListener('mouseover',function(){
      clearInterval(Timer);
    });
    link.addEventListener('mouseout',function(){
      Timer = setInterval(function(){
        if(currentSlide == 1){
          currentSlide = 0;
        }else{
          currentSlide++;
        }
        mSlide(currentSlide);
      },3000);
    });

    // link.addEventListener('mouseout',() => {
    //   clearInterval(Timer);
    //   Timer = setInterval(mSlide,1000);
    // });



  });
