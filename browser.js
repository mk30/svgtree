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
    recur(0, state, 0)
  ]);
}

function recur (depth, state, a) {
  var dd = (state.time - state.inittime)/500
  var ht = Math.min(400, state.height*dd)
  var height = Math.max(0, ht - depth*100)
  var prevheight = Math.max(0, ht - (depth-1)*100)
  var x = 400 + 0.5*Math.sin(a/180*Math.PI)*height
  var y = 450 - 0.5*Math.cos(a/180*Math.PI)*height
  if (depth >= Math.min(4, dd)){
    return '' 
  }
  else  return  h('g', {
    }, [
      h('rect', { 
        fill: 'olive',
        stroke: 'lightgreen',
        x: x, 
        y: y - 0.5*prevheight, 
        width: state.width, 
        height: height
      }), 
      h('g',{transform: 
        'translate(0, -50) scale(1) rotate(-25 '+y+' '+x+')'
        }, [recur(depth+1, state, a)]),
      h('g',{transform: 
        'translate(0, -100) scale(1) rotate(25 '+x+' '+x+')'
        }, [recur(depth+1, state, a)])
      ]
    )
}
function update(){
  loop.state.time = Date.now();
  loop.update(loop.state); 
}
setInterval(update,50);
