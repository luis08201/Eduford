let menuBTN = document.getElementById("menuBTN");

menuBTN.addEventListener("click", ()=>{
    let nav = document.getElementById("nav")
    nav.classList.toggle("active");
    
    if(menuBTN.classList.contains("fa-bars")){
        menuBTN.classList.remove("fa-bars");
        menuBTN.classList.add("fa-times");
    } else{
         menuBTN.classList.add("fa-bars");
        menuBTN.classList.remove("fa-times");
    }
})