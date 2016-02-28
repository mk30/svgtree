var createElement = require('virtual-dom/create-element');
var h = require('virtual-hyperscript-svg');

var fn = function (){
  return h('svg', { width: '100%', height: '100%' }, [
    recur(0)
  ]);
}

function recur (depth) {
  if (depth >= 3){
    return '' 
  }
  return  h('g', {
  }, [
    h('rect', { 
      fill: 'red', x: 50, y: 50, width: 50, height: 100 }), 
    h('g',{transform: 'translate(10,-10) scale(0.8) rotate(-5)'
      }, [recur(depth+1)]),
    h('g',{transform: 'translate(-10,-10) scale(0.8) rotate(5)'
      }, [recur(depth+1)])
    ]
  )
}
var svg = createElement(fn())
document.body.appendChild(svg);
