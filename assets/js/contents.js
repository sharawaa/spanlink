const elementsFromAnimate = [
    { element: document.querySelector(".gsap_image1"), x: 100, y: 0 },
    { element: document.querySelector(".gsap_image2"), x: 200, y: 0 },
    { element: document.querySelector('.download_text'), x: -100, y: 0 },
    { element: document.querySelector('.left_box'), x: -100, y: 0 },
    { element: document.querySelector('.right_box'), x: 100, y: 0 },
    { element: document.querySelector('.ball_text'), x: 100, y: 0 },
    { element: document.querySelector('.gs_b_1'), x: 0, y: 25 },
    { element: document.querySelector('.gs_b_2'), x: 0, y: 50 },
    { element: document.querySelector('.gs_b_3'), x: 0, y: 75 },
    { element: document.querySelector('.gs_b_4'), x: 0, y: 100 },
  ];
const elementsToAnimate = [
    { element: document.querySelector('.ball_image'), x: 150, y: 0 }
]
  
  elementsFromAnimate.forEach(({ element, x, y }) => {
    gsap.from(element, {
      x,
      y,
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'top center',
        scrub: 4,
        markers: true
      }
    });
  });
  elementsToAnimate.forEach(({ element, x, y }) => {
    gsap.to(element, {
      x,
      y,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom center',
        scrub: 4,
        markers: true
      }
    });
  });
  