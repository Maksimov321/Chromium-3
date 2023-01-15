
  const suzukiA = document.querySelector('.suzuki-title');
suzukiA.addEventListener('click', function () {
 alert('click');
});

const audiA = document.querySelector('.audi-title');
audiA.addEventListener('click', function () {
 alert('click');
});

const hondaA = document.querySelector('.honda-title');
hondaA.addEventListener('click', function () {
 alert('click');
});

let newDog = document.createElement('div')

 newDog.classList.add('Performance-Tool')

 const myImage = document.createElement('img')
 myImage.src="menu-2tovarov/perform.webp";
 myImage.alt='Dog photo'
 myImage.classList.add('Performance-Tool-img')

 const myImageZvezda = document.createElement('img')
 myImageZvezda.src="menu1/zvezba.png";
 myImageZvezda.alt='zvezba'
 myImageZvezda.classList.add('Performance-Tool-img-Zvezba')


 const p = document.createElement('p')
 p.classList.add('moreInfo')

 p.textContent= 'DONNA KARAN'

 const h2 = document.createElement('h2')
 h2.textContent = 'Performance Tool W2998'
 h2.classList.add('Performance-Tool-title')

 const price = document.createElement('h2')
 price.textContent = '$390.00'
price.classList.add('Performance-Tool-price')

const myImageKorzina = document.createElement('img')
  myImageKorzina.src = "logo/hi4.webp" ;
  myImageKorzina.alt = 'korzina'
  myImageKorzina.classList.add('Performance-Tool-img-Korzina')


 document.body.appendChild(newDog)
 newDog.appendChild(myImage)
 newDog.appendChild(myImageZvezda)
 newDog.appendChild(h2)
 newDog.appendChild(p)
 newDog.appendChild(price)
 newDog.appendChild(myImageKorzina)


// Adding event handlers

 function showMore(){
   document.querySelector('.moreInfo').style.display ='block'
}

document.querySelector('.btn').addEventListener('click', showMore)