function trackActiveLink(el){
    //making the target link active
    el.classList.add("active");
    // getting the target element
    const target = el.getAttribute("data-link");

    //deactivating previous links

    // selecting all links that contain class active
    const navLinks = document.querySelectorAll("a.nav-link");
    
    /*
    iterating through the links to identify the links that aren't 
    active by removing the active class
    */
    navLinks.forEach(link => {
        if(target !== link.getAttribute("data-link")){
            link.classList.remove("active");
        }
    })
}