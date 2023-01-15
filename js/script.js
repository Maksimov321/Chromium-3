
function search(){
    let input = document.getElementById("inputSearch");
    let filter = input.value.toUpperCase();
    let ul = document.getElementById("list");
    let li = ul.getElementsByTagName("li");

// Перебираем все элементы списка и скрывайте те, которые не соответствуют поисковому запросу
for ( let i = 0; i < li.length; i++) {
let a = li[i].getElementsByTagName("a")[0];
if (a.innerHTML.toUpperCase().indexOf(filter) > -1){
    li[i].style.display = "";
} else {
    li[i].style.display = "none";
   }
  }
 }
  document.addEventListener('keyup', search);
 
 
// Сразу создаём переменные
let navbar = document.getElementById('navbar').classList
let active_class =  "navbar_scrolled"

//Событие прокрутки
window.addEventListener('scroll', e => {
if(pageYOffset > 500) navbar.add(active_class)
else navbar.remove(active_class)
})
 
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
 let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



const parts ={
  suzuki:[
    id = ['Performance-Tool',
    img = 'menu-2tovarov/perform.webp',
   p = 'DONNA KARAN',
   title = 'Performance Tool W2998',
   img = 'menu1/zvezba.png',
   price = '$390.00',
   img = 'logo/hi4.webp',
  ],

id = ['Ultimate-Fast-Finish',
img = 'menu-2tovarov/pr-19_360x.webp',
p = 'DOLCE & GABBANA',
title = 'Ultimate Fast Finish Wax Kit-MEGULARS',
img = 'menu1/zvezba.png',
price = '$63.00',
img = 'logo/hi4.webp',
],

id = ['Stanley-15Amp-Battery',
img = 'menu-2tovarov/p11.webp',
p = 'CHRISTIAN DIOR',
title = 'Stanley 15Amp Battery Charger(BC50BS)',
img = 'menu1/zvezba.png',
price = '$40.00',
img = 'logo/hi4.webp',
],

 id = ['Redrex-Voltage-Regulator',
 img = 'menu-2tovarov/p12.webp',
 p = 'ARMANI',
 title = 'Redrex Voltage Regulator Rectifier',
 img = 'menu1/zvezba.png',
 price = '$65.00',
img = 'logo/hi4.webp',
 ],

 id =['Cole-Hersee-200A',
 img = 'menu-2tovarov/p13.webp',
 p = 'GIVENCHY',
 title = 'Cole Hersee 200A Constinuous Solenoid',
 img = 'menu1/zvezba.png',
 price = '$48.60',
img = 'logo/hi4.webp',
],

 id =['Car-Truck-Starters',
 img = 'menu-2tovarov/p14.webp',
 p = 'GIVENCHY',
 title = 'Car & Truck Starters High Torque Starter', 
 img = 'menu1/zvezba.png',
 price = '$17.00',
 img = 'logo/hi4.webp',
],

 id =['Silencer-200',
 img = 'menu-2tovarov/p15.webp',
 p = 'ARMANI',
 title = 'Silencer 200 (New Generation Electro Engine)',
 img = 'menu1/zvezba.png',
 price = '$380.00',
img = 'logo/hi4.webp',
],

 id =['Poverbuilt-3',
 img = 'menu-2tovarov/p16.webp',
 p = 'BULGARI',
 title = 'Poverbuilt 3 Gallon Heavy Duty Oil',
  img = 'menu1/zvezba.png',
price = '$150.00',
 img = 'logo/hi4.webp',
],

id = ['Portable-Car-Starter',
img = 'menu-2tovarov/p17.webp',
p = 'ARMANI',
title ='Portable Car Starter Auto Jump Magnetic',
img = 'menu1/zvezba.png',
price = '$280.00',
img = 'logo/hi4.webp',
],


id = ['O-NEX-LED-Resistor',
img = 'menu-2tovarov/p18.webp',
p = 'GIVENCHY',
title ='O-NEX-LED-Resistor Kit H11 (H8 , H9)',
img = 'menu1/zvezba.png',
price = '$450.00',
img = 'logo/hi4.webp',
],

id = ['Mini-Smart-Portable',
img = 'menu-2tovarov/p19.webp',
p = 'CHRISTIAN DIOR',
title ='Mini-Smart-Portable Adjustable 65W',
img = 'menu1/zvezba.png',
price = '$85.00',
img = 'logo/hi4.webp',
],

id = ['MaySpare-Contous-Duty',
img = 'menu-2tovarov/p20.webp',
p = 'DONNA KARAN',
title ='MaySpace Contous Duty Soleid Relay',
img = 'menu1/zvezba.png',
price = '$70.00',
img = 'logo/hi4.webp',
],

id = ['HP-Lubricants-Neo-Synth',
img = 'menu-2tovarov/p21.webp',
p = 'BULGARI',
title ='HP Lubricants Neo Synth 5W-30 API SN',
img = 'menu1/zvezba.png',
price = '$354.00',
img = 'logo/hi4.webp',
],

id = ['GYTR-Ported-Cylinder',
img = 'menu-2tovarov/p22.webp',
p = 'DOLCE & GABBANA',
title ='GYTR Ported Cylinder Head Assembly',
img = 'menu1/zvezba.png',
price = '$120.00',
img = 'logo/hi4.webp',
],

id = ['GM-Oiginal-Equipment-Module-6',
img = 'menu-2tovarov/p23.webp',
p = 'ORIGINAL EQULPMENT',
title ='GM Original Equipment Cruise Control Module 6',
img = 'menu1/zvezba.png',
price = '$209.00',
img = 'logo/hi4.webp',
],

id = ['GM-Original-Equipment-Module-5',
img = 'menu-2tovarov/p24.webp',
p = 'ORIGINAL EQULPMENT',
title ='GM Original Equipment Cruise Control Module 5',
img = 'menu1/zvezba.png',
price = '$209.00',
img = 'logo/hi4.webp',
],

id = ['GM-Original-Equipment-Module-4',
img = 'menu-2tovarov/p25.webp',
p = 'ORIGINAL EQULPMENT',
title ='GM Original Equipment Cruise Control Module 4',
img = 'menu1/zvezba.png',
price = '$209.00',
img = 'logo/hi4.webp',
],

id = ['GM-Original-Equipment-Module-3',
img = 'menu-2tovarov/p26.webp',
p = 'ORIGINAL EQULPMENT',
title ='GM Original Equipment Cruise Control Module 3',
img = 'menu1/zvezba.png',
price = '$209.00',
img = 'logo/hi4.webp',
],

id = ['GM-Original-Equipment-Module-2',
img = 'menu-2tovarov/p27.webp',
p = 'ORIGINAL EQULPMENT',
title ='GM Original Equipment Cruise Control Module 2',
img = 'menu1/zvezba.png',
price = '$209.00',
img = 'logo/hi4.webp',
],

id = ['GM-Original-Equipment-Module-1',
img = 'menu-2tovarov/p28.webp',
p = 'ORIGINAL EQULPMENT',
title ='GM Original Equipment Cruise Control Module 1',
img = 'menu1/zvezba.png',
price = '$290.00',
img = 'logo/hi4.webp',
],

id = ['Fully-Automatic-6V-12V',
img = 'menu-2tovarov/p29.webp',
p = 'DOLCE & GABBANA',
title ='Fully Automatic 6V/12V Battery Charger',
img = 'menu1/zvezba.png',
price = '$210.00',
img = 'logo/hi4.webp',
],

id = ['Air-Comporessor-Heavy-Duty-12V',
img = 'menu-2tovarov/p30.webp',
p = 'CHRISTIAH DIOR',
title ='Air Comporessor Heavy Duty (12V)',
img = 'menu1/zvezba.png',
price = '$110.00',
img = 'logo/hi4.webp',
],

id = ['Escape-The-Darkness-With-Car-Headlights',
img = 'menu-2tovarov/p31.webp',
p = 'DONNA KARAN',
title ='Escape The Darkness With Car Headlights',
img = 'menu1/zvezba.png',
price = '$350.00',
img = 'logo/hi4.webp',
],

id = ['DB-Electrical-Starter-SFD0024-Compatible',
img = 'menu-2tovarov/p32.webp',
p = 'CHRISTIAN DIOR',
title ='DB Electrical Starter SFD0024 Compatible',
img = 'menu1/zvezba.png',
price = '$220.00',
img = 'logo/hi4.webp',
],

id = ['Craftsman-LT3000-20HP-Brigggs',
img = 'menu-2tovarov/p33.webp',
p = 'DONNA KARAN',
title = 'Craftsman LT3000 20HP Briggs&Statton',
img = 'menu1/zvezba.png',
price = '$25.00',
img = 'logo/hi4.webp',
],

id = ['Country-Qutpost-Frontier-s3000',
img = 'menu-2tovarov/p34.webp',
p = 'CHRISTIAN DIOR',
title ='Country Qutpost Frontier s3000 Extreme(right-sb)',
img = 'menu1/zvezba.png',
price = '$380.00',
img = 'logo/hi4.webp',
],

id = ['Copy-of-1-Set-Cover-Cap-for-Oil-Fiter',
img = 'menu-2tovarov/p35.webp',
p = 'ARMANL',
title ='Copy of 1 Set Cover Cap for Oil Fiter Housing',
img = 'menu1/zvezba.png',
price = '$150.00',
img = 'logo/hi4.webp',
],

id = ['Car-Radio-2-Din-HD-6-6',
img = 'menu-2tovarov/p36.webp',
p = 'GIVENCHY',
title ='Car Radio 2 Din HD 6.6 Touch Screen',
img = 'menu1/zvezba.png',
price = '$67.00',
img = 'logo/hi4.webp',
],

id = ['Automotive-Starter-Power-Parts',
img = 'menu-2tovarov/p37.webp',
p = 'DOLCE&GABBANA',
title ='Automotive Starter Power Parts Dodge',
img = 'menu1/zvezba.png',
price = '$90.00',
img = 'logo/hi4.webp',
],

id = ['Automatic-Battery-Charger-800mA',
img = 'menu-2tovarov/p38.webp',
p = 'DOLCE&GABBANA',
title ='Automatic Battery Charger 800mA(no-sb)',
img = 'menu1/zvezba.png',
price = '$200.00',
img = 'logo/hi4.webp',
],

id = ['All-Weather-Terrain-Braker-AS-PRO',
img = 'menu-2tovarov/p39.webp',
p = 'BULGARI',
title ='All Weather Terrain Braker AS/PRO (right-sidebar} 3',
img = 'menu1/zvezba.png',
price = '$70.00',
img = 'logo/hi4.webp',
],

id = ['Aeroterma-Ventilator-12V',
img = 'menu-2tovarov/p40.webp',
p = 'BULGARI',
title ='Aeroterma Ventilator 12V Car Heater',
img = 'menu1/zvezba.png',
price = '$110.00',
img = 'logo/hi4.webp',
],

id = ['12V-White-Car-Interior-LED',
img = 'menu-2tovarov/p41.webp',
p = 'DONNA KARAN',
title ='12V White Car Interior LED Lamp Replace',
img = 'menu1/zvezba.png',
price = '$159.00',
img = 'logo/hi4.webp',
],

id = ['12V-Solenoid-Relay-Switch-for',
img = 'menu-2tovarov/p42.webp',
p = 'ARMANI',
title ='12V Solenoid Relay Switch for Trombetta (22 options)',
img = 'menu1/zvezba.png',
price = '$300.00',
img = 'logo/hi4.webp',
],

id = ['1-Set-Cover-Cap-for-Oil-Fiter',
img = 'menu-2tovarov/p43.webp',
p = 'CL',
title ='1 Set Cover Cap for Oil Fiter Housing',
img = 'menu1/zvezba.png',
price = '$110.00',
img = 'logo/hi4.webp',
],


id = ['',
img = 'menu-2tovarov/p.webp',
p = '',
title ='',
img = 'menu1/zvezba.png',
price = '$',
img = 'logo/hi4.webp',
],


  ],
  audi: [
    id = 2,
   p = 'GIVENCHY',
   title = 'Cole Hersee 200A Continuous Solenoid',
  ],

  honda: [
    
  ],
}









