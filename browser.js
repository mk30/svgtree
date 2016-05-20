var vdom = require('virtual-dom');
var createElement = require('virtual-dom/create-element');
var h = require('virtual-hyperscript-svg');
var main = require("main-loop");

var initState = {
  width: 25,
  height: 10,
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
  var dd = (state.time - state.inittime)/500
  var height = Math.min(300, state.height*dd)
  height = Math.max(0, height - depth*50)
  var x = 400;
  var y = 450-height
  if (depth >= Math.min(3, dd)){
    return '' 
  }
  else  return  h('g', {
    }, [
      h('rect', { 
        fill: 'none',
        stroke: 'olive',
        x: x, 
        y: y - 1.5*height, 
        width: state.width, 
        height: height
      }), 
      h('g',{transform: 
        'translate(-100,-150) scale(1) rotate(-45 '+x+' '+y+')'
        }, [recur(depth+1, state)]),
      h('g',{transform: 
        'translate(100,-150) scale(1) rotate(45 '+x+' '+y+')'
        }, [recur(depth+1, state)])
      ]
    )
}
function update(){
  loop.state.time = Date.now();
  loop.update(loop.state); 
}
setInterval(update,50);
