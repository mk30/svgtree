var createElement = require('svg-create-element');
var svg = createElement('svg');
svg.setAttribute("height", "100%")
svg.setAttribute("width", "100%")
var w = 10;
var h = 20;
var x = 100;
var y = 400;
var rect = 
  createElement('rect', {
    id: 'trunk',
    fill: 'SaddleBrown',
    stroke: 'olive',
    strokeWidth: 4,
    x: x,
    y: y,
    width: w,
    height: h,
  });
var branch = 
  createElement('rect', {
    id: 'branch',
    fill: 'SaddleBrown',
    stroke: 'olive',
    strokeWidth: 4,
    x: x-4,
    y: 400 -h,
    width: w,
    height: h,
  });
svg.appendChild(rect)
document.body.appendChild(svg);

function hwgrow (){
  if (w<150 && h<300){
    h = h + 5;
    w++;
    y = 400 - h;
    rect.setAttribute("width", w);
    rect.setAttribute("height", h);
    rect.setAttribute("y", y);
    window.requestAnimationFrame(hwgrow)
  }
};
function brgrow() {
  if (!document.getElementById('branch')) {
    svg.appendChild(branch);
    document.body.appendChild(svg)
    window.requestAnimationFrame(brgrow)
  }
  else {
      branch.setAttribute("width", w/2);
      branch.setAttribute("height", h);
      //branch.setAttribute("x", x-5);
      branch.setAttribute("y", 400- h*2 );
      window.requestAnimationFrame(brgrow)
    }
};
window.requestAnimationFrame(hwgrow)
window.requestAnimationFrame(brgrow);
