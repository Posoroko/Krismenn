

const menu_div = document.getElementById('menu');
const menuBox_div = document.getElementById('menuBox');
const selaouBox_div = document.getElementById('selaouBox')
const menuCloser_svg = document.getElementById('menuCloser');
const sectionSelaou_div = document.getElementById('sectionSelaou');
const sectionSelaouCloser_svg = document.getElementById('sectionSelaouCloser');
const backdrop_div = document.getElementById('backdrop');

const parolesBox_div = document.getElementById('parolesBox');
const sectionParoles_div = document.getElementById('sectionParoles');
const sectionParolesCloser_svg = document.getElementById('sectionParolesCloser');

const contactBox_div = document.getElementById('contactBox');
const sectionContact_div = document.getElementById('sectionContact');
const sectionContactCloser_sgv = document.getElementById('sectionContactCloser');

function menuCloserOn() {
  menuCloser_svg.classList.replace('menuCloserOff', 'menuCloserOn');
}
function menuCloserOff() {
  menuCloser_svg.classList.replace('menuCloserOn', 'menuCloserOff');
}

function openMenu() {
    menuBox_div.classList.replace('menuBoxClosed', 'menuBoxOpened');
    backdrop_div.classList.replace('backdropClosed', 'backdropOpened');
    menu_div.classList.replace('menuBtnOn', 'menuBtnOff');
}

function closeMenu() {
    menuBox_div.classList.replace('menuBoxOpened', 'menuBoxClosed');
    backdrop_div.classList.replace('backdropOpened', 'backdropClosed');
    menu_div.classList.replace('menuBtnOff', 'menuBtnOn');
}
function openSectionSelaou(){
  console.log('eric');
  sectionSelaou_div.classList.replace('sectionSelaouClosed', 'sectionSelaouOpened');
  menuCloserOff();
}
function closeSectionSelaou(){
  sectionSelaou_div.classList.replace('sectionSelaouOpened', 'sectionSelaouClosed');
  menuCloserOn();
}
function openSectionParoles(){
  sectionParoles_div.classList.replace('sectionParolesClosed', 'sectionParolesOpened');
  menuCloserOff();
}
function closeSectionParoles(){
  console.log('paroles');
  sectionParoles_div.classList.replace('sectionParolesOpened', 'sectionParolesClosed');
  menuCloserOn();
}
function openSectionContact(){
  console.log('yesss');
  sectionContact_div.classList.replace('sectionContactClosed', 'sectionContactOpened');
  menuCloserOff();
}
function closeSectionContact() {
  sectionContact_div.classList.replace('sectionContactOpened', 'sectionContactClosed');
  menuCloserOn();
}



  menu_div.addEventListener('click', openMenu);
  menuCloser_svg.addEventListener('click', closeMenu);

  selaouBox_div.addEventListener('click', openSectionSelaou);
  sectionSelaouCloser_svg.addEventListener('click', closeSectionSelaou);

  parolesBox_div.addEventListener('click', openSectionParoles);
  sectionParolesCloser_svg.addEventListener('click', closeSectionParoles);
  
  contactBox_div.addEventListener('click', openSectionContact);
  sectionContactCloser_sgv.addEventListener('click', closeSectionContact);
  var pdfwoker = ('worker-loader!pdfjs-dist/build/pdf.worker')
  
  
 
  
