var createElement = require('virtual-dom/create-element');
var h = require('virtual-hyperscript-svg');

var fn = function (){
  return h('svg', { width: '100%', height: '100%' }, [
    recur(0)
  ]);
}

function recur (depth) {
  if (depth >= 5){
    return '' 
  }
  return  h('g', {
  }, [
    h('rect', { 
      fill: 'none',
      stroke: 'olive',
      x: 200, 
      y: 200, 
      width: 50, 
      height: 100,
    }), 
    h('g',{transform: 
      'translate(-50,-50) scale(1) rotate(-25 225 200)'
      }, [recur(depth+1)]),
    h('g',{transform: 
      'translate(50, -50) scale(1) rotate(25 225 200)'
      }, [recur(depth+1)])
    ]
  )
}
var svg = createElement(fn())
document.body.appendChild(svg);
