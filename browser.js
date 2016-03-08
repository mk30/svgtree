var vdom = require('virtual-dom');
var createElement = require('virtual-dom/create-element');
var h = require('virtual-hyperscript-svg');
var main = require("main-loop");

var initState = {
  width: 20,
  height: 60,
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
  var currentdepth = Math.floor(Math.min(5, (state.time -
  state.inittime)/1000));
  if (depth >= currentdepth){
    return '' 
  }
  /*
  var height = state.height;
  if (depth == currentdepth -1){
    //height = height*(depth/5)
    //recur(depth+1, state)
      height = state.height
  }
  */
  return  h('g', {
  }, [
    h('rect', { 
      fill: 'none',
      stroke: 'olive',
      x: 400 - ((state.time - state.inittime)/1000*(currentdepth/5)), 
      y: 400 - ((state.time - state.inittime)/1000*(currentdepth/5)), 
      //y: state.height + 300,
      width: state.width, 
      height: state.height * currentdepth,
    }), 
    h('g',{transform: 
      'translate(-'+state.width+',-'+ state.height + ') scale(1) rotate(-25 225 200)'
      }, [recur(depth+1, state)]),
    h('g',{transform: 
      'translate('+state.width+', -'+state.height+') scale(1) rotate(25 225 200)'
      }, [recur(depth+1, state)])
    ]
  )
}
function update(){
  //loop.state.width = loop.state.width + 1;
  //loop.state.height = loop.state.height + 3;
  loop.state.time = Date.now();
  loop.update(loop.state); 
  //console.log((loop.state.time - loop.state.inittime)/5000);
}
window.setInterval(update,50);
