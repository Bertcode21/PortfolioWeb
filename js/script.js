// alert("Javascript is workking");
document.addEventListener("DOMContentLoaded", ()=>{
const roles = ["Web-Developer", "Software-Engineer", "Tech-Enthuisiast","Full-Stack-Web-Developer", "Mobile-App-Developer"];
const roleElement = document.getElementById("role");
let roleIndex= 0;
let letterIndex= 0;
let typingInterval;

function typeRole(){
    roleElement.style.opacity = 0;
    setTimeout(() =>{
 //// we removing all the text content before typing here
        roleElement.textContent = "";
        letterIndex = 0;

        /// a new time interval here
        typingInterval = setInterval(() =>{
             if(letterIndex < roles[roleIndex].length){
                   roleElement.textContent += roles[roleIndex].charAt(letterIndex);
                   letterIndex++;
                  // roleElement.style.opacity = 1;
             }
             else{
                clearInterval(typingInterval); /// clear if the condition is not met.
             
                 setTimeout(() =>{
                    roleIndex = (roleIndex + 1) % roles.length; /// loop back to the first role.
                    typeRole();
                 }, 1000)
                }
        }, 150);
        roleElement.style.opacity = 1;
    }, 500)

}

/// start typing the first role here.
typeRole();
})


//// Project Filtering code.
document.addEventListener("DOMContentLoaded", function(){
const filterButtons = document.querySelectorAll(".project-list li");
const projects = document.querySelectorAll(".project-box");
filterButtons.forEach((button) =>{
   button.addEventListener("click", ()=>{
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      /// to get the data value accoridng to which the user clicks.
      const filter = button.getAttribute("data-filter");

      // to get each project Box show and hide according to the filter.
      projects.forEach((project) =>{
         if(filter === "all" || project.getAttribute("data-category") === filter){
            project.style.display = "block";
         }
         else{
            project.style.display = "none";
         }
      })
   })
})

})

/*Testimonials*/
//// Swiper Slider Initialization Code...
var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay:{
        delay: 2500,
         disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
      },
    });

    /* Dark Light Mode  Toggle*/
    document.addEventListener("DOMContentLoaded", function(){
       const toggleButton = document.querySelector(".dark-light-btn");
       const htmlElement = document.documentElement;

       /// get the current mode
       const currentMode = localStorage.getItem("mode");
       if(currentMode === "light"){
        htmlElement.classList.remove("dark");
        toggleButton.innerHTML = "<i class='fa-regular fa-moon'></i>"
       }
       toggleButton.addEventListener("click", ()=>{
         htmlElement.classList.toggle("light-mode");


         ///update the button icon and store the mode in local storage
          const isLightMode = htmlElement.classList.contains("light-mode");
          toggleButton.innerHTML = isLightMode ? "<i class='fa-regular fa-moon'></i>" : "<i class='fa-regular fa-sun'></i>";
      
             // store the mode in the local storage.
             localStorage.setItem("mode", isLightMode ? "light" : "dark");
      
                ///// nav auto active class code.
               const Section = document.querySelectorAll("section");
               const navLinks = document.querySelectorAll("ul li a");

               function activateNavLink(){
                  let currentSection = "";

                  /// run a for each loop to get each section's top position
                  Section.forEach((section) =>{
                     const sectionTop = section.offsetTop;
                     const sectionHeight = section.offsetHeight;

                     // check if the scroll position is greater than or equal to the section top position
                     if(window.scrollY  >= sectionTop - sectionHeight / 3){
                        currentSection = section.getAttribute("id");
                     }
                  })
               }
      
            })

         

    });