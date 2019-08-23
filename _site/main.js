let navbar = document.getElementById("nav");
let wrapper = document.getElementById("wrapper");
let empHistSect = document.getElementById("emp-hist-inner");


wrapper.addEventListener('scroll', (e) => {
  console.log(wrapper.scrollTop);
  if (wrapper.scrollTop > 280) {
    navbar.classList.add("shrink");
  }
  if (wrapper.scrollTop <= 280) {
    navbar.classList.remove("shrink");
  }
});
