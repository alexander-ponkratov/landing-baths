//при загрузке показать с первого фото
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  //счетчик в цикле для скрытия всех фото/точек
  let i;

  //HTMLCollection для фото/точек
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  //если счетчик выходит за границы, показать с первого фото
  //зависит от количества одновременно отображаемых фото в галерее
  //например для 3 элементов - (n > slides.length - 2)
  if (n > slides.length - 2) { slideIndex = 1 }

  //если счетчик меньше первого эл-та, показать с последнего фото
  //зависит от количества одновременно отображаемых фото в галерее
  //например для 3 элементов - (slideIndex = slides.length - 2)
  if (n < 1) { slideIndex = slides.length - 2 }

  //скрыть все изображения
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //скрыть все точки
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  //отобразить [n; n+2] фото
  slides[slideIndex - 1].style.display = "grid";
  slides[slideIndex].style.display = "grid";
  slides[slideIndex + 1].style.display = "grid";
  //отобразить точку для n эл-та
  dots[slideIndex - 1].className += " active";
}