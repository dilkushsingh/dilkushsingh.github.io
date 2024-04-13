
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

//Download CV
document.getElementById('downloadButton').addEventListener('click', function() {
    var link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1XLjV6iTCjgslaYhIPDzfCqtUdAAj8mfD/view?usp=sharing';
    link.download = 'Dilkush Singh Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
