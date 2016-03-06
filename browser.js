var vdom = require('virtual-dom');
var createElement = require('virtual-dom/create-element');
var h = require('virtual-hyperscript-svg');
var main = require("main-loop");

var initState = {
  width: 50,
  height: 100
}
var loop = main(initState, render, vdom);
document.body.appendChild(loop.target)

function render (state){
  return h('svg', { width: '100%', height: '100%' }, [
    recur(0, state.width, state.height)
  ]);
}

function recur (depth, width, height) {
  if (depth >= 3){
    return '' 
  }
  return  h('g', {
  }, [
    h('rect', { 
      fill: 'none',
      stroke: 'olive',
      x: 200, 
      y: 200, 
      width: width, 
      height: height,
    }), 
    h('g',{transform: 
      'translate(-50,-50) scale(1) rotate(-25 225 200)'
      }, [recur(depth+1, width, height)]),
    h('g',{transform: 
      'translate(50, -50) scale(1) rotate(25 225 200)'
      }, [recur(depth+1, width, height)])
    ]
  )
}
function update(){
  loop.state.width = loop.state.width + 1;
  loop.state.height = loop.state.height + 3;
  loop.update(loop.state); 
  console.log(loop.state.height);
  console.log(loop.state.width);
}
window.setInterval(update,50);
