var createElement = require('virtual-dom/create-element');
var h = require('virtual-hyperscript-svg');

var fn = function (){
  return h('svg', { width: '100%', height: '100%' }, [
    h('rect', { fill: 'red', x: 50, y: 50, width: 300, height: 100 })
  ]);
}
var svg = createElement(fn())
document.body.appendChild(svg);
