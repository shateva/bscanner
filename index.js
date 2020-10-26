
//This array holds the bias phrases and words
//note: take in to account capitalization, whether the terms end in 's', and whether they're a part of a quote
let phrases = ['Illegal Aliens', 'Illegal Alien', 'Oriental', 'Orientals', 'Illegals', 'The blacks', 'The asians', 'The whites', 'The latinos']

console.log(phrases.length)


var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

