var vdom = require('virtual-dom');
var createElement = require('virtual-dom/create-element');
var h = require('virtual-hyperscript-svg');
var main = require("main-loop");

var initState = {
  width: 25,
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
  var m = 400
  var n =25 
  var dd = (state.time - state.inittime)/500
  var height = Math.min(400, state.height*dd)
  if (depth >= Math.min(5, dd)){
    return '' 
  }
  else  return  h('g', {
    }, [
      h('rect', { 
        fill: 'none',
        stroke: 'olive',
        x: m, 
        y: 400-height, 
        width: state.width, 
        //at beginning should be min state.height, as
        //approaches end (over time), should go at a fixed
        //rate until depth stops time)
        height: height
        //Math.max(state.height*dd, 200)
        ///1000*state.height),
        //Math.max(0, state.height - dd)
        //n/10*dd,

      }), 
      h('g',{transform: 
        'translate(-'+m/6+',-'+n/2+
          ') scale(1) rotate(-12 '+m+' '+n+')'
        }, [recur(depth+1, state)]),
      h('g',{transform: 
        'translate('+m/6+', -'+n+
          ') scale(1) rotate(12 '+m+' '+n+')'
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
