const navButton = document.getElementById('nav-btn');
const navMenu = document.querySelector('.nav-menu');
const navContainer = document.querySelector('.nav-container')


navButton.addEventListener('click',navBar);


function navBar(){
  console.log('jug')
  // if(navList.style.display === 'block'){
  //     navList.style.display = 'none'
  //     navContainer.style.height ='50px';
  //     navContainer.style.backgroundColor ='orange';
      
  // }else{
  //     navList.style.display = 'block' 
  //     navContainer.style.height ='270px';
  // 
  navContainer.classList.toggle('toggle-nav-container');
  navMenu.classList.toggle('toggle-nav-menu');
 

}