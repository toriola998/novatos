function navBar(){
const menu = document.querySelector('.menu');
const links = document.querySelector('.links');
const closeIcon = document.querySelector('.close-menu')

/**Toggle to menu hamburger */
menu.addEventListener('click', function(){
links.classList.toggle('show-links');
});

/**Close the side bar once the close icon gets clicked**/
closeIcon.addEventListener('click', function(){
    links.classList.remove('show-links');
});

let navLinks = document.querySelectorAll('.nav-link');
//event listener for each links
navLinks.forEach(link => {  
  link.addEventListener('click', () => {
    links.classList.remove('show-links');
  }); 
});
}

export default navBar;

