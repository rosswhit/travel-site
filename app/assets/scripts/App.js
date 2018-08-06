import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"),"65%");
new RevealOnScroll($(".testimonial"),"85%");
var stickyHeader = new StickyHeader();
