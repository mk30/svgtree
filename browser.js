var createElement = require('svg-create-element');

var svg = createElement('svg');
svg.setAttribute("height", "100%")
svg.setAttribute("width", "100%")
var w = 100;
var h = 200;
var rect = 
  createElement('rect', {
    id: 'trunk',
    fill: 'SaddleBrown',
    stroke: 'olive',
    strokeWidth: 4,
    x: 100,
    y: 100,
    width: w,
    height: h,
  });
svg.appendChild(rect)
document.body.appendChild(svg);

function hwgrow (){
  if (w<300 && h<600){
    h++;
    w++;
    rect.setAttribute("width", w);
    rect.setAttribute("height", h);
    window.requestAnimationFrame(hwgrow)
  }
}

window.requestAnimationFrame(hwgrow)
