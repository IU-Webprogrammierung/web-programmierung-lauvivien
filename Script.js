const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
   accordionItemHeader.addEventListener("click", event => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
     accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
   
  });
});

let mybutton = document.getElementById("BTT");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" 
  });
}

const header = document.querySelector('header'); 
const textSection = document.getElementById('Text');
const nextBtn = document.getElementById('next-btn');

let currentSection = header;

nextBtn.addEventListener('click', () => {

  if(currentSection === header) {
    currentSection = textSection;
    textSection.scrollIntoView({behavior: 'smooth'});

  } else {
    currentSection = header;
    header.scrollIntoView({behavior: 'smooth'});
  }

}); 