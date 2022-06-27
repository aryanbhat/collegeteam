const play = document.querySelector('button');
const svgContainer = document.getElementById('svg');
const animItem = bodymovin.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets9.lottiefiles.com/packages/lf20_tiviyc3p.json' 
});

play.addEventListener('click', () =>{
    animItem.goToAndPlay(0,true);
})

const navSlide = () =>{
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-menu");
    const navlinks = document.querySelector("nav-links");
    burger.addEventListener('click',()=>{
      nav.classList.toggle("appear");
      burger.classList.toggle("toggle");
    })
  }
  navSlide();