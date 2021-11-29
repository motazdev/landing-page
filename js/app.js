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



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/



let sectionsLength = 4;
for(let i=1; i<=sectionsLength; i++) {
    let staticNavItemCode = `
    <li class="menu__item"><a class="nav_sec_item" data-sec="section${i}" href="#">Section ${i}</a></li>
    `    
    document.querySelector('#l__content').insertAdjacentHTML('beforeend', staticNavItemCode);
}

for(let i=1; i<=sectionsLength; i++) {
    let secCode = `
    <section id="section${i}" class="section">
    <div class="landing__container">
        <h2>Section ${i}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

        <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>
    </section>        
    `
    // adding the new section before closing of "main" tag.
    document.querySelector('main').insertAdjacentHTML('beforeend', secCode);
}



// build the nav

function navCreate() {

    // adding new sections \\

    let sectionsLength = document.querySelectorAll('section').length;
    secId = sectionsLength + 1;
    let secCode = `
    <section id="section${secId}" class="section">
    <div class="landing__container">
        <h2>Section ${secId}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

        <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>
    </section>        
    `
    // adding the new section before closing of "main" tag.
    document.querySelector('main').insertAdjacentHTML('beforeend', secCode);

    // adding navs with the same idea of adding new sections \\
    /*
    * i can get navs length again but its equal to
    * sections length and it already declared (and the same thing about 'section id' and 'nav item id')
    let navsLength = document.querySelectorAll('.menu__item').length;
    */

    let navItemCode = `
    <li class="menu__item"><a href="#section${secId}">Section ${secId}</a></li>
    `
    document.querySelector('#l__content').insertAdjacentHTML('beforeend', navItemCode);


}


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

const addSecBtn = document.getElementById('addsecbtn');

addSecBtn.addEventListener('click', function(e) {
    e.preventDefault();
    navCreate();
});
// Scroll to section on link click

// Set sections as active

window.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        if(section.getBoundingClientRect().top >= -100 && section.getBoundingClientRect().bottom <= window.innerHeight) {
            section.classList.add('your-active-class')
        } else {
            section.classList.remove('your-active-class')
        }
    })
})


/*  SCROLL TO SECTION
    Without using =>>  href="#section[section number]"
*/
//getting all nav items
let navsClickScroll = document.querySelectorAll('.nav_sec_item');
let allSections = document.querySelectorAll('section');
for(let nav of navsClickScroll) {
    let secNum = nav.getAttribute('data-sec');
    nav.addEventListener('click', function(e) {
        e.preventDefault();
        scroll({
            top: document.getElementById(secNum).offsetTop,
            behavior: "smooth" /* OR  USING CSS =>> html{scroll-behavior: smooth;} */
        })
    })
}
