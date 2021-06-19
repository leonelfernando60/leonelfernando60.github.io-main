window.addEventListener("load", () => {
  const sliderImages = document.querySelector(".slider__images");
  const numberOfImages = document.querySelectorAll(
    ".slider__images picture"
  ).length;
  let transform = 0;
  setInterval(() => {
    transform += 100 / numberOfImages;
    if (transform == 100) {
      transform = 0;
      sliderImages.style.transform = `translateX(-${transform}%)`;
      sliderImages.style.transition = `transform 0s`;
    } else {
      sliderImages.style.transform = `translateX(-${transform}%)`;
      sliderImages.style.transition = `transform 0.5s`;
    }
  }, 2000);
});
