var createElement = require('svg-create-element');
 
var svg = createElement('svg');
svg.setAttribute("height", "100%")
svg.setAttribute("width", "100%")
svg.appendChild(createElement('rect', {
  fill: 'SaddleBrown',
  stroke: 'olive',
  strokeWidth: 4,
  x: 10,
  y: 10,
  width: 100,
  height: 200,
}));
document.body.appendChild(svg);
