
function myFunction(x) {
            x.classList.toggle("change");
        }
        function toggleMenu() {
            var menu = document.getElementById("mobile-menu");
            if (menu.classList.contains("hidden")) {
                menu.classList.remove("hidden");
            } else {
                menu.classList.add("hidden");
            }
        } 




/* =========================
   GALLERY STARTS HERE
========================= */

let galleryImages = [];
let galleryCurrentIndex = 0;

// Fetch images from API
function fetchImages() {
  const url = "https://galleria.sgm.ng/cDf3jbbZaDWWvdLT7";
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      
      if (Array.isArray(data) && data.length > 0) {
        galleryImages = data.filter(img => img && img.trim() !== "");
        updateGallery();
      } else {
        console.log("No images found yet.");
      }
      
    })
    .catch(error => console.error("Error fetching images:", error));
}


// Update gallery slider
function updateGallery() {
  const slider = document.getElementById("gallery-slider");
  
  if (!slider) return;
  
  slider.innerHTML = "";
  
  galleryImages.forEach((imageUrl, index) => {
    
    let img = document.createElement("img");
    
    img.src = imageUrl;
    img.alt = "Jurivex Gallery Image";
    
    // Hide image until it fully loads
    img.style.display = "none";
    
    img.className = "w-full h-96 md:h-[500px] object-cover rounded-lg";
    
    // Show image only after it has loaded
    img.onload = function() {
      if (index === 0) {
        img.style.display = "block";
        galleryCurrentIndex = 0;
      }
    };
    
    slider.appendChild(img);
  });
}

// Next slide
function nextSlide() {
  const slides = document.querySelectorAll("#gallery-slider img");
  
  if (slides.length <= 1) return;
  
  slides[galleryCurrentIndex].style.display = "none";
  
  galleryCurrentIndex = (galleryCurrentIndex + 1) % slides.length;
  
  slides[galleryCurrentIndex].style.display = "block";
}


// Previous slide
function prevSlide() {
  const slides = document.querySelectorAll("#gallery-slider img");
  
  if (slides.length <= 1) return;
  
  slides[galleryCurrentIndex].style.display = "none";
  
  galleryCurrentIndex = (galleryCurrentIndex - 1 + slides.length) % slides.length;
  
  slides[galleryCurrentIndex].style.display = "block";
}


// Auto slide every 3 seconds (only if more than one image exists)
setInterval(() => {
  if (galleryImages.length > 1) {
    nextSlide();
  }
}, 3000);

// Refresh images every 60 seconds (so new Google Photos images appear automatically)
setInterval(fetchImages, 60000);


// Load images immediately when page loads
document.addEventListener("DOMContentLoaded", fetchImages);


/* =========================
   GALLERY ENDS HERE
========================= */

//Footer
document.addEventListener('DOMContentLoaded', function() {
  var currentYear = new Date().getFullYear();
  document.getElementById('copyright-year').textContent = currentYear;
});

//about the author
document.addEventListener('DOMContentLoaded', function() {
  // The sentence you want to insert
  var sentence = "Qosim, a graduate of Common and Islamic Law from the prestegious Faculty of Law, Bayero University, Kano, is an avid legal researcher, Nigerian Law School aspirant and technology enthusiast with expertise in web development and a strong interest in litigation practice, alternative dispute resolution, corporate practice and compliance and Islamic finance.";
  
  // Find the element where the sentence will be inserted
  var container = document.getElementById('about-author');
  
  // Insert the sentence into the container
  container.textContent = sentence;
});

function myFunction(x) {
  x.classList.toggle("change");
}

function toggleMenu() {
  var menu = document.getElementById("mobile-menu");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
}



/*   */

/* type js for who i am */
var typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  loop: true,
  backDelay: 900,
  backSpeed: 30,
  smartBackspace: true,
  typeSpeed: 40,
  startDelay: 2000,
});
/*email me anchor */
// modify this form HTML and place wherever you want your form //
//Read the Formbutton docs at formspree.io/formbutton/docs. See more examples at codepen.io/formspree //
/* paste this line in verbatim */
window.formbutton = window.formbutton || function() {
  (formbutton.q = formbutton.q || []).push(arguments)
};
/* customize formbutton below*/
formbutton("create", {
  action: "https://formspree.io/f/mqkvzbyz",
  title: "How can we help?",
  fields: [
    {
      type: "email",
      label: "Email:",
      name: "email",
      required: true,
      placeholder: "your@email.com"
    },
    {
      type: "textarea",
      label: "Message:",
      name: "message",
      placeholder: "What's on your mind?",
    },
    { type: "submit" }
  ],
  styles: {
    title: {
      backgroundColor: "gray"
    },
    button: {
      backgroundColor: "gray"
    }
  }
});


/*WhatsApp me anchor */
document.getElementById("messageForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var message = document.getElementById("messageInput").value;
  var encodedMessage = encodeURIComponent(message);
  var whatsappLink = "https://wa.me/2349037074761/?text=" + encodedMessage;
  
  // Replace 'whatsapp-number' with your WhatsApp phone number, including the country code.
  // For example, if your WhatsApp number is +1234567890, the link would be: https://wa.me/1234567890/?text=...
  
  window.location.href = whatsappLink;
});



//slider Islamic quotes
let slideIndex = 1;

function showSlide(n) {
  const slides = document.querySelectorAll('.slide-a');
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}

function changeSlide(n) {
  showSlide((slideIndex += n));
}

function autoAdvance() {
  changeSlide(1);
  setTimeout(autoAdvance, 3000); // 10 seconds
}

showSlide(slideIndex);
autoAdvance();