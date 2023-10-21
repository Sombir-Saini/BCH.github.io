let call = document.querySelector(".callnow");
let snackbar = document.querySelector("#snackbar");
let elems = document.querySelectorAll(".heroleft .elem");

call.addEventListener("click", () => {
  navigator.clipboard.writeText("+91 9467246563");
  snackbar.classList.add("show");
  setTimeout(() => {
    snackbar.classList.remove("show");
  }, 3000);
});

Shery.mouseFollower({
  //Parameters are optional.
  // skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.5,
});

Shery.makeMagnet(".mag");

Shery.imageEffect(".back", {
  style: 5,
  config: {
    a: { value: 2, range: [0, 30] },
    b: { value: -0.85, range: [-1, 1] },
    aspect: { value: 2.0638297872340425 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.1, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
  gooey: true,
});

Shery.textAnimate(["#contact .info h1", "#contact .info p"] /* Element to target.*/, {
  //Parameters are optional.
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 0.1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

elems.forEach((elem) => {
  let h1s = elem.querySelectorAll("h1");
  let index = 0;
  let animating = false;
  document.querySelector(".back").addEventListener("click", () => {
    if (!animating) {
      animating = true;
      gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: function() {
          gsap.set(this._targets[0], {
            top: "100%",
          });
          animating = false;
        },
      });
      index === h1s.length - 1 ? (index = 0) : index++;
      gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
      });
    }
  });
});
