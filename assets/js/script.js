
//Smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

//Navbar toggle
// $('ul.nav').addClass('show');

//Add animations to menu
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

// Download CV
document.getElementById("downloadButton").onclick = function() {
    window.location.href = 'https://drive.google.com/file/d/19uPRC3bPlhjcPCc6amKZ7CMCyp8Zt0g6/';
};

// Captcha
function onSubmit(token) {
    document.getElementById("form").submit();
  }

// Medium Blogs Fetch
async function fetchMediumPosts() {
    const rssFeed = 'https://medium.com/feed/@dilkushsingh';
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssFeed)}`;
    
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        if (data.status !== 'ok') {
            throw new Error('Error fetching the RSS feed');
        }
        
        let postsHTML = '';
        data.items.slice(0, 6).forEach(post => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(post.description, 'text/html');
            const firstParagraph = doc.querySelector('p') ? doc.querySelector('p').textContent : '';
            const imageUrl = post.thumbnail || (doc.querySelector('img') ? doc.querySelector('img').src : '');

            postsHTML += `
                <div class="medium-post card">
                    <img src="${imageUrl}" alt="${post.title}" class="post-image">
                    <h2><a href="${post.link}" target="_blank">${post.title}</a></h2>
                    <p>${firstParagraph}</p>
                    <button class="read-more" onclick="window.open('${post.link}', '_blank')">Read More</button>
                </div>
            `;
        });

        document.getElementById('medium-post').innerHTML = postsHTML;
    } catch (error) {
        console.error('Error fetching Medium posts:', error);
        document.getElementById('medium-post').innerHTML = 'Failed to load Medium posts.';
    }
}

fetchMediumPosts();

// More Projects

document.addEventListener("DOMContentLoaded", function() {
    const seeMoreBtn = document.getElementById("see-more-btn");
    const projectItems = document.querySelectorAll(".project-item");
    const initialVisibleProjects = 6;
    let visibleProjects = initialVisibleProjects;

    function showProjects() {
        for (let i = 0; i < visibleProjects && i < projectItems.length; i++) {
            projectItems[i].classList.add("visible");
        }
        if (visibleProjects >= projectItems.length) {
            seeMoreBtn.style.display = "none";
        } else {
            visibleProjects += initialVisibleProjects;
        }
    }

    // Show the first 6 projects on page load
    showProjects();

    // Add event listener to the "See More" button
    seeMoreBtn.addEventListener("click", showProjects);
});

// Captcha Mandatory
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        const hCaptchaResponse = hcaptcha.getResponse();

        if (!hCaptchaResponse) {
            formMessage.innerHTML = '<p style="color: red;">Please complete the CAPTCHA.</p>';
            return;
        }

        // Create FormData object from the form
        const formData = new FormData(form);

        // Add hCaptcha response to form data
        formData.append('h-captcha-response', hCaptchaResponse);

        // Send AJAX request
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                formMessage.innerHTML = '<p style="color: green;">Your message has been sent successfully!</p>';
                form.reset(); // Reset the form
                hcaptcha.reset(); // Reset the hCaptcha
            } else {
                formMessage.innerHTML = '<p style="color: green;">Your message has been sent successfully!</p>';
            }
        })
        .catch(error => {
            formMessage.innerHTML = '<p style="color: green;">Your message has been sent successfully!</p>';
        });
    });
});

// navbar transition
$(document).ready(function() {
    var $navbar = $('.navbar'); // Cache the navbar element

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 50) { // Adjust the scroll threshold as needed
            $navbar.addClass('scrolled');
        } else {
            $navbar.removeClass('scrolled');
        }
    });
});




