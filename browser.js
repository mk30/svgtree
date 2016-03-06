var vdom = require('virtual-dom');
var createElement = require('virtual-dom/create-element');
var h = require('virtual-hyperscript-svg');
var main = require("main-loop");

var initState = {
  width: 50,
  height: 100,
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
  var dd = (state.time - state.inittime)/4000
  if (depth >= Math.min(5, dd)){
    return '' 
  }
  return  h('g', {
  }, [
    h('rect', { 
      fill: 'none',
      stroke: 'olive',
      x: 200, 
      y: 200, 
      width: state.width, 
      height: state.height,
    }), 
    h('g',{transform: 
      'translate(-50,-50) scale(1) rotate(-25 225 200)'
      }, [recur(depth+1, state)]),
    h('g',{transform: 
      'translate(50, -50) scale(1) rotate(25 225 200)'
      }, [recur(depth+1, state)])
    ]
  )
}
function update(){
  //loop.state.width = loop.state.width + 1;
  //loop.state.height = loop.state.height + 3;
  loop.state.time = Date.now();
  loop.update(loop.state); 
  console.log((loop.state.time - loop.state.inittime)/5000);
}
window.setInterval(update,50);
