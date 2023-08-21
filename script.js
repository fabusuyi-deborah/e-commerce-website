let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}



const countDate = new Date("Aug 30 2023 17:05:55").getTime();

var x = setInterval(function(){
    let now = new Date().getTime();

    let distance = countDate - now;

    var d = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 *60));
    var min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((distance % (1000 * 60 * 60)) / 1000);

    document.getElementById('timer').innerHTML = d + "d " + hrs + "h " + min + "m " + sec + "s ";

    if(distance < 0){
        clearInterval(x);
        document.getElementById('timer').innerHTML = "Time's Up";
    }
})

function search() {
  let filter = document.getElementById('find').value.toUpperCase();

  let item = document.querySelectorAll('.containers')

  let L = document.getElementsByTagName('h3')

  for (var i = 0; i <= L.length; i++){
    let a = item[i].getElementsByTagName('h3')[0];

    let value = a.innerHTML ||  a.innerText || a.textContent;

    if (value.toUpperCase().indexOf(filter) > -1) {
      item[i].style.display = "";
    }
    else
    {
      item[i].style.display = "none";
      // document.write("Check back later")
      // print("Check back later")
      }
  }
}