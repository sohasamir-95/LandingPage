/**
 * Define Global Variables
 * 
*/
const navbar=document.getElementById('navbar__list');
const sections=document.querySelectorAll('section');
//console.log(navbar);


// build the nav

const buildNav=()=>{
  const fragment=document.createDocumentFragment();
  const li_bulider=document.createElement('li');
  sections.forEach(section=>{
    const sectionID=section.id;
    const sectiondatanav=section.dataset.nav;
    const a_builder=document.createElement('a');
    a_builder.setAttribute('data-link',sectionID);
    a_builder.setAttribute('class','navsection');
    a_builder.textContent=sectiondatanav;

    //console.log(a_builder);
    
    li_bulider.appendChild(a_builder);
    //console.log(li_bulider);
    fragment.appendChild(li_bulider);

});
navbar.appendChild(fragment);
};
buildNav();
// Scroll to section on link click and hover on menu
const links=document.querySelectorAll(".navsection");
links.forEach((element) => {
    element.addEventListener("click",()=>{
        const el=document.getElementById(element.getAttribute("data-link"));
        el.scrollIntoView({behavior:"smooth",block:"center",});
        
     
        

    })
    element.addEventListener("mouseover", mouseOver);
    element.addEventListener("mouseout", mouseOut);
    function mouseOver() {
            element.style.color = "red";
      }  
      function mouseOut() {
        element.style.color = "blue";  
  } 
});


