// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
function revealOnScroll(){
  reveals.forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Theme toggle
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", ()=>{
  document.body.classList.toggle("light");
  toggle.textContent =
    document.body.classList.contains("light") ? "🌞" : "🌙";
});
