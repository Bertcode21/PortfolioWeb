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