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

function maxheight (max, ddd){
  if (state.height*ddd >= max){
    console.log(max)
    return max
  }
  else
    var ht = Math.min(max, state.height*ddd) 
    console.log(ht)
    return ht
}
  var m = 400
  var n = 100
  var dd = (state.time - state.inittime)/1000
  if (depth >= Math.min(5, dd)){
    return '' 
  }
  else  return  h('g', {
    }, [
      h('rect', { 
        fill: 'none',
        stroke: 'olive',
        x: m, 
        y: 10*n/dd, 
        width: state.width, 
        //at beginning should be min state.height, as
        //approaches end (over time), should go at a fixed
        //rate until depth stops time)
        height: maxheight(300, dd)
        //Math.max(state.height*dd, 200)
        ///1000*state.height),
        //Math.max(0, state.height - dd)
        //n/10*dd,

      }), 
      h('g',{transform: 
        'translate(-'+m/4+',-'+n/2+
          ') scale(1) rotate(-25 '+m+' '+n+')'
        }, [recur(depth+1, state)]),
      h('g',{transform: 
        'translate('+m/4+', -'+n+
          ') scale(1) rotate(25 '+m+' '+n+')'
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
