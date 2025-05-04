document.addEventListener("DOMContentLoaded", () => {
    VANTA.BIRDS({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundAlpha: 0.0,
      color1: 0xff9900,
      color2: 0x00ccff,
      birdSize: 1.2,
      wingSpan: 20.0,
      separation: 50.0,
      alignment: 50.0,
      cohesion: 20.0,
      quantity: 3.0
    });
    const main = document.querySelector("main");
    setTimeout(() => {
        main.classList.add("loaded");
  }, 100);

  
  });
  