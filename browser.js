var vdom = require('virtual-dom');
var createElement = require('virtual-dom/create-element');
var h = require('virtual-hyperscript-svg');
var main = require("main-loop");

var initState = {
  width: 25,
  height: 5,
  inittime: Date.now(),
  time: Date.now()
}
var loop = main(initState, render, vdom);
document.body.appendChild(loop.target)

function render (state){
  return h('svg', { width: '100%', height: '100%' }, [
    recur(0, state)
  ]);
}

function recur (depth, state) {
  var n = 350
  var dd = (state.time - state.inittime)/1000
  if (depth >= Math.min(5, dd)){
    return '' 
  }
  return  h('g', {
  }, [
    h('rect', { 
      fill: 'none',
      stroke: 'olive',
      x: n, 
      y: n, 
      width: state.width, 
      height: state.height * n/10,
    }), 
    h('g',{transform: 
      'translate(-'+n/4+',-'+n/2+') scale(1) rotate(-25 '+n*1.125+' '+n+')'
      }, [recur(depth+1, state)]),
    h('g',{transform: 
      'translate('+n/4+', -'+n/2+') scale(1) rotate(25 '+n*1.125+' '+n+')'
      }, [recur(depth+1, state)])
    ]
  )
}
function update(){
  //loop.state.width = loop.state.width + 1;
  //loop.state.height = loop.state.height + 3;
  loop.state.time = Date.now();
  loop.update(loop.state); 
}
window.setInterval(update,50);
