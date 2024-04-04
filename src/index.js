// import CSS
import '../assets/styles/reset.scss';
import '../assets/styles/github-markdown.scss';
import '../assets/styles/style.scss';
// import '../assets/styles/github-markdown.css'

// import Scene
// import './scene/darkness';
// import './Scene/oceanWithCubes';
// import './scene/plots'
// import './scene/theMoon'
import './scene/mainScene';
import './scene/introScene';
import './scene/starField';

const isMobile = window.innerWidth < 768;

window.addEventListener('resize', () => {
  isMobile = window.innerWidth < 768;
});

// when mobile, class .intro-blank display none
const hideSlideBlank = () => {
  if (isMobile) {
    document.querySelector('.slide-blank').style.display = 'none';
  } else {
    document.querySelector('.slide-blank').style.display = '';
  }
};
hideSlideBlank();

// when change width, class .intro-blank display none
window.addEventListener('resize', () => {
  hideSlideBlank();
});
