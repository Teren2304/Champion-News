import $ from 'jquery'
import HEADER_OFFSET from './components/constats';
import menu from './components/menu'
import dropdown from './components/dropdown'
import scrollAnimation from './components/scroll-observer'
import accordion from './components/accordion'
import numAnimationOnScroll from './components/num-animatio-on-scroll'
import anchorScroll from './components/anchor-scroll'
import brandsSlider from './components/brands-slider'
import scrollSpyObserver from './components/scroll-spy'

menu();
dropdown();
scrollAnimation();
accordion();
numAnimationOnScroll();
anchorScroll('a[href^=\\#]', $('.header').height() + HEADER_OFFSET);
brandsSlider();
scrollSpyObserver();
