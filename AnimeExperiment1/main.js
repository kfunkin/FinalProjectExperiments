/*anime({
  targets: 'div.box.red',
  translateY: [
    { value: 200, duration: 500 },
    { value: 0, duration: 800 }

  ],

  rotate: {
    value: '1turn',
    easing: 'easeInOutSine'
  }
});

anime({
  targets: 'div.box.blue',
  translateY: [
    { value: 200, duration: 500, delay: 1000 },
    { value: 0, duration: 800 }

  ],

  rotate: {
    value: '1turn',
    easing: 'easeInOutSine',
    delay: 1000
  }
});

anime({
  targets: 'div.box.green',
  translateY: [
    { value: 200, duration: 500, delay: 2000 },
    { value: 0, duration: 800 }

  ],

  rotate: {
    value: '1turn',
    easing: 'easeInOutSine',
    delay: 2000
  }
});

anime({
  targets: 'div.box.yellow',
  translateY: [
    { value: 200, duration: 500, delay: 3000 },
    { value: 0, duration: 800 }

  ],

  rotate: {
    value: '1turn',
    easing: 'easeInOutSine',
    delay: 3000
  }
});*/

//boxes combined with buttons activated
/*var playPause = anime({
  targets: 'div.box',
  translateY: [
    { value: 200, duration: 500 },
    { value: 0, duration: 800 }

  ],

  rotate: {
    value: '1turn',
    easing: 'easeInOutSine'
  },
  delay: function(el, i, l){return i * 1000},
  autoplay: false
});

document.querySelector('#boxes .play').onclick=
playPause.play;
document.querySelector('#boxes .pause').onclick=
playPause.pause;*/

anime({
  targets: 'div.maratshead',
  translateY: [
    { value: 10, duration: 200  },
    { value: 0, duration: 200 },
  ]

})
anime({
  targets: 'div.text1',
  translateY: [
    {value: 200, duration: 300}

  ]

})
