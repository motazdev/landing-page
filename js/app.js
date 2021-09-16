/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

let sections = document.querySelectorAll('section');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function scrlTop() {
    let y = window.scrollY;
    if(y >= 400) {
        document.getElementById('scroll__toTop').style.display = "block";
    } else {
        document.getElementById('scroll__toTop').style.display = "none";
    }
}





/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/



// build the nav

let counter = 4;
function createNav() {


    var sec = document.createElement("section");
    var li = document.createElement("li");
    counter = counter + 1;
    sec.id  = 'section' + counter;
    sec.num = counter;
    let secCode = `
    <section id="${sec.id}" data-nav="Section ${sec.num}" class="">
        <div class="landing__container">
          <h2>Section ${sec.num}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
  
          <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
        </div>
    </section>    
    `
    let list = document.querySelector('main');
    list.insertAdjacentHTML("beforeend", secCode);

    // NAV ITEMS BUILD

    let navCode = `<li class="menu__item" data-secnum="${sec.num}"><a href="#section${sec.num}">Section ${sec.num}</a></li>`;
    let menu = document.querySelector('.l__content');
    menu.insertAdjacentHTML("beforeend", navCode);


}

// Add class 'active' to section when near top of viewport

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return ( rect.top >= 10 );
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

document.getElementById('addsecbtn').addEventListener('click', function(e) {
    e.preventDefault();
    createNav();
})

// Scroll to section on link click


// Set sections as active

document.addEventListener("scroll", function () {
    const box = document.querySelectorAll('section');

    box.forEach(function(secBox) {
        if(isInViewport(secBox)) {
            secBox.classList.remove('your-active-class');
        } else {
            secBox.classList.add('your-active-class');
        }
    })
});

// scroll to top


document.getElementById('scroll__toTop').addEventListener('click', function() {
    window.scroll({
        top: 0
    })
})

window.addEventListener("scroll", scrlTop);