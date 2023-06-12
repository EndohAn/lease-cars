


  // const swiper = new Swiper('.swiper', {  
  //   loop: true,
  //   effect: "fade",
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },   
  //   autoplay: {
  //     delay: 3000,
  //     disableOnInteraction: false,
  //   },
   
  // });

const tabItem = document.querySelectorAll('.tabs_btn-item');
const tabContent = document.querySelectorAll('.tabs_content-item');
     
tabItem.forEach(function(element){
  element.addEventListener('click',open);
})
function open(e){
  const tabTarget = e.currentTarget;
  // последний button-это из data-button(дата аттрибут)
  const button =tabTarget.dataset.button;

  tabItem.forEach(function(item){
    item.classList.remove('tabs_btn-item--active');
  })

  tabTarget.classList.add('tabs_btn-item--active');
  tabContent.forEach(function(item){
    item.classList.remove('tabs_content-item--active');
  });
  document.querySelector(`#${button}`).classList.add('tabs_content-item--active');
}


const menuBtn = document.querySelector('.menu_btn');
const menu = document.querySelector('.menu_list');
menuBtn.addEventListener('click',()=>{
  menu.classList.toggle('menu_list--active');
})