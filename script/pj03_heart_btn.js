window.onload = function(){

let btnH = document.querySelectorAll('.btnHeart');
let i = 0;

console.log(btnH); //같은 클래스를 가진 요소들이 전부 선택되었는지 확인


btnH.forEach((btn) => btn.addEventListener('click',function(){
  btn.classList.toggle("fullH");
  })
);


// 틀린거 1 -------------------------------------------------------
// btnH.forEach((btn) => btn.addEventListener('click',function(){
//   myfunction('str', btn);
//   })
// );

// function myfunction(str, btn){
//   if(i===false){
//     btn.style.border = '1px solid #f00';

//     // btn.classList.replace('btnHeart','btnHeartfull');
//     i = true;
//   }else{
//     btn.style.border = '1px solid #0f0';
//     // btn.classList.replace('btnHeartfull','btnHeart');
//     i = false;
//   }
// }

// 틀린거 2 -------------------------------------------------------
// btnH.forEach((btn) => btn.addEventListener('click', function(){
//   if(i ===0) {
//     btn.classList.replace('btnHeart','btnHeartfull');
//     i = 1;
//   }else {
//     btn.classList.replace('btnHeartfull','btnHeart');
//     i = 0;
//   }
// })
// );

// 틀린거 3 -------------------------------------------------------
// for(let i=0; i <= btnH.length; i++){
//   let heart = false;

//   btnH[i].addEventListener('click',function(){
//     if(heart){
//       btnH[i].style.border = '2px solid orange';
//       this.classList.replace('btnHeart','btnHeartfull');
//       heart = false;
//     }else{
//       btnH[i].style.border = '2px solid blue';
//       this.classList.replace('btnHeartfull','btnHeart');
//       // this.classList.replace('btnHeartfull','btnHeart');
//       heart = true;
//     }
//   });
// }

}