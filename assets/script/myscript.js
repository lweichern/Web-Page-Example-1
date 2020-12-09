const navslide = () => {
    const burger = document.querySelector('.burger');
    const navlinks = document.querySelector('.navlinks');
    const navitems = document.querySelectorAll('.navlinks li'); 
    const button = document.querySelector('.description button');
    const sub_desc =  document.querySelector('.description div');
    const shop = document.querySelector('.shop');
    const mega_dropdown = document.querySelector('.mega-dropdown');
    const arrow = document.querySelector('.fas');
    const dropdown_content = document.querySelectorAll('.child');
    navlinks.classList.add('nav-inactive');

    burger.addEventListener('click', () => {
        burger.classList.toggle('toggle');

        if(navlinks.classList.contains('nav-active')){
            navlinks.classList.add("class", 'nav-inactive');
            navlinks.classList.remove("class", "nav-active");
        }else{
            navlinks.classList.add("class", 'nav-active');
            navlinks.classList.remove("class", "nav-inactive");
        }

        navitems.forEach((items, index) => {
            if(items.style.animation){
                items.style.animation = '';
            }else{
                items.style.animation = `navlinks-items-fade 0.3s ease ${index / 7 + 0.4}s forwards`;
            }
            
        })
        
    })

    window.onscroll = function (){
        if(document.documentElement.scrollTop > 250 && document.documentElement.scrollTop < 500){
            sub_desc.style.animation = "main-desc-slide-in-phone 0.7s forwards";
            button.style.animation = "sub-desc-slide-in-phone 0.7s forwards";
            console.log("hello");
        }
    }

    // onclick on shop then mega dropdown menu animates
    shop.addEventListener('click', (event) => {
        event.preventDefault();

        arrow.classList.toggle('arrow-animate');

        if(!mega_dropdown.classList.contains('dropdown-inactive') && !mega_dropdown.classList.contains('dropdown-active')){
            mega_dropdown.classList.add("class", 'dropdown-active');
        }else if(mega_dropdown.classList.contains('dropdown-active')){
            mega_dropdown.classList.add("class", 'dropdown-inactive');
            mega_dropdown.classList.remove("class", 'dropdown-active');
        }else if(mega_dropdown.classList.contains('dropdown-inactive')){
            mega_dropdown.classList.add("class", 'dropdown-active');
            mega_dropdown.classList.remove("class", 'dropdown-inactive');
        }

        dropdown_content.forEach((elem, index) => {
            if(elem.style.animation){
                elem.style.animation = "";
            }else{
                elem.style.animation = `dropdown-content-fade-in 0.7s ease ${index / 7 + 0.5}s forwards`;
            }
        })
    })

}

navslide();