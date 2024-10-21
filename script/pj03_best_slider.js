$(document).ready(function(){
  // best story slider
  const lBtn = $('.left_btn');
  const rBtn = $('.right_btn');

  const sliderWidth = '100';
  let currentIndex = 1; //현재 보이는 인덱스

  let sliderWrap = $('.con02_sliderWrap').width();
  let slider = $('.con02_slider').width();
  console.log(sliderWrap);
  console.log(slider);
  
  let num = slider/sliderWrap;
  let sliderIndex = Math.round(num);
  console.log(sliderIndex);

  // 마우스 드래그 이벤트
  let sliderWrapper = document.querySelector(".con02_sliderWrap");
  let innerSlider = document.querySelector(".con02_slider");
  let pressed = false;
  let startx;
  let x;

  sliderWrapper.addEventListener("mousedown", e => {
    pressed = true;
    startx = e.offsetX - innerSlider.offsetLeft;
    sliderWrapper.style.cursor = "grabbing";
  });

  sliderWrapper.addEventListener("mouseenter", () => {
    sliderWrapper.style.cursor = "grab";
  });

  sliderWrapper.addEventListener("mouseup", () => {
    sliderWrapper.style.cursor = "grap";
  });

  window.addEventListener("mouseup", () => {
    pressed = false;
  });

  sliderWrapper.addEventListener("mousemove", e => {
    if(!pressed) return;
    e.preventDefault();
    x = e.offsetX;

    innerSlider.style.left = `${x - startx}px`;
    checkboundary();
  });

  function checkboundary() {
    let outer = sliderWrapper.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect()

    if(parseInt(innerSlider.style.left) > 0) {
      innerSlider.style.left = "0px";
    } else if(inner.right < outer.right) {
      innerSlider.style.left = `-${inner.width - outer.width}px`;
    }
  }

  //왼쪽 이동 함수
  function moveLeft(){
    if(currentIndex < sliderIndex){
      $('.con02_slider').animate({'margin-left':-sliderWidth*currentIndex+"%"},600);
      currentIndex++;
    }else{
      $('.con02_slider').animate({'margin-left':'0%'},600);
      currentIndex=1;
    }
  }

  //오른쪽 이동 함수
  function moveRight(){
    if(currentIndex < sliderIndex){
      $('.con02_slider').animate({'margin-left':-sliderWidth*currentIndex+"%"},600);
      currentIndex++;
    }else{
      $('.con02_slider').animate({'margin-left':'0'},600);
      currentIndex=1;
    }
  }
    lBtn.click(function(){
      moveRight();
    }); 
    rBtn.click(function(){
      moveLeft();
    });

  });




