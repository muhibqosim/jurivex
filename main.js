
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




/*gallery starts here*/

let galleryImages = [];
let galleryCurrentIndex = 0; // Renamed to avoid conflict

// Fetch images from API
function fetchImages() {
    const url = "https://galleria.sgm.ng/wJQfKcds8vhhSPeU8";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data)) {
                galleryImages = data.filter(img => img && img.trim() !== ""); // Remove empty images
                updateGallery();
            } else {
                console.error("Invalid data format:", data);
            }
        })
        .catch(error => console.error("Error fetching images:", error));
}

// Update the slider with new images
function updateGallery() {
    const slider = document.getElementById("gallery-slider"); 
    slider.innerHTML = ""; 

    galleryImages.forEach((imageUrl, index) => {
        let img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "Gallery Image";
        img.className = "w-full h-69 md:h-96 object-contain flex-shrink-0";
        img.style.display = index === 0 ? "block" : "none";
        slider.appendChild(img);
    });
}

// Move to the next slide
function nextSlide() {
    let slides = document.querySelectorAll("#gallery-slider img"); 
    if (slides.length === 0) return;

    slides[galleryCurrentIndex].style.display = "none";
    galleryCurrentIndex = (galleryCurrentIndex + 1) % slides.length;
    slides[galleryCurrentIndex].style.display = "block";
}

// Move to the previous slide
function prevSlide() {
    let slides = document.querySelectorAll("#gallery-slider img"); 
    if (slides.length === 0) return;

    slides[galleryCurrentIndex].style.display = "none";
    galleryCurrentIndex = (galleryCurrentIndex - 1 + slides.length) % slides.length;
    slides[galleryCurrentIndex].style.display = "block";
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);

// Auto-refresh images every 60 seconds
setInterval(fetchImages, 60000);

// Fetch images on page load
document.addEventListener("DOMContentLoaded", fetchImages);

/*gallery ends here*/


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