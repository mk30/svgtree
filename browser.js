var createElement = require('svg-create-element');
var svg = createElement('svg');
svg.setAttribute("height", "100%")
svg.setAttribute("width", "100%")
var trunkw = 10;
var trunkh = 20;
var trunkx = 100;
var trunky = 400;
var rect = 
  createElement('rect', {
    id: 'trunk',
    fill: 'SaddleBrown',
    stroke: 'olive',
    strokeWidth: 4,
    x: trunkx,
    y: trunky,
    width: trunkw,
    height: trunkh,
  });
var branch = 
  createElement('rect', {
    id: 'branch',
    fill: 'SaddleBrown',
    stroke: 'olive',
    strokeWidth: 4,
    x: trunkx-4,
    y: 400 -trunkh,
    width: trunkw,
    height: trunkh,
  });
svg.appendChild(rect)
document.body.appendChild(svg);

function trgrow (){
  if (trunkw<150 && trunkh<300){
    trunkh = trunkh + 5;
    trunkw++;
    trunky = 400 - trunkh;
    rect.setAttribute("width", trunkw);
    rect.setAttribute("height", trunkh);
    rect.setAttribute("y", trunky);
    window.requestAnimationFrame(trgrow)
  }
};
function brgrow() {
  if (!document.getElementById('branch')) {
    svg.appendChild(branch);
    document.body.appendChild(svg)
    window.requestAnimationFrame(brgrow)
  }
  else {
      branch.setAttribute("width", trunkw/2);
      branch.setAttribute("height", trunkh);
      branch.setAttribute("y", 400- trunkh*2 );
      window.requestAnimationFrame(brgrow)
    }
};
window.requestAnimationFrame(trgrow)
window.requestAnimationFrame(brgrow);
