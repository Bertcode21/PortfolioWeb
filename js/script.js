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