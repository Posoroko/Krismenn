
const menuBtn_svg = document.getElementById('menuBtn');
//boîte à ouvrir pour montrer le contenu du menu
const menuBox_div = document.getElementById('menuBox');
const menuCloser_svg = document.getElementById('menuCloser');

const backdrop_div = document.getElementById('backdrop');

//Bouton de texte pour ouvrir les section
const selaouBox_div = document.getElementById('selaouBox')
const parolesBox_div = document.getElementById('parolesBox');
const troiadBox_div = document.getElementById('troiadBox');
const contactBox_div = document.getElementById('contactBox');

//sections à ouvrir pour montrer contenu
const sectionSelaou_div = document.getElementById('sectionSelaou');
const sectionParoles_div = document.getElementById('sectionParoles');
const sectionTroiad_div = document.getElementById('sectionTroiad');
const sectionContact_div = document.getElementById('sectionContact');


//bouton X pour fermer les sections
const sectionSelaouCloser_svg = document.getElementById('sectionSelaouCloser');
const sectionParolesCloser_svg = document.getElementById('sectionParolesCloser');
const sectionTroiadCloser_svg = document.getElementById('sectionTroiadCloser');
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
    menuBtn_svg.classList.replace('menuBtnOn', 'menuBtnOff');
}

function closeMenu() {
    menuBox_div.classList.replace('menuBoxOpened', 'menuBoxClosed');
    backdrop_div.classList.replace('backdropOpened', 'backdropClosed');
    menuBtn_svg.classList.replace('menuBtnOff', 'menuBtnOn');
}


function openSection(section) {
  console.log(section.classList);
  section.classList.replace('sectionClosed', 'sectionOpened');
    menuCloserOff();
} 
function closeSection(section) {
  section.classList.replace('sectionOpened','sectionClosed')
  menuCloserOn()
}




  menuBtn_svg.addEventListener('click', openMenu);
  menuCloser_svg.addEventListener('click', closeMenu);

  selaouBox_div.addEventListener('click', function() { openSection(sectionSelaou_div)} );
  sectionSelaouCloser_svg.addEventListener('click', function() { closeSection(sectionSelaou_div)});

  parolesBox_div.addEventListener('click', function() { openSection(sectionParoles_div)});
  sectionParolesCloser_svg.addEventListener('click', function() { closeSection(sectionParoles_div)});

  troiadBox_div.addEventListener('click', function() { openSection(sectionTroiad_div)});
  sectionTroiadCloser_svg.addEventListener('click', function() { closeSection(sectionTroiad_div)});
  
  contactBox_div.addEventListener('click', function() { openSection(sectionContact_div)});
  sectionContactCloser_sgv.addEventListener('click', function() { closeSection(sectionContact_div)});
  var pdfwoker = ('worker-loader!pdfjs-dist/build/pdf.worker')
  
  
 
  
