let state = { count: 0 };
let action = { type: "counter/increment" };
function changeState(state, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function dispatch(action){
 state=changeState(state,action);
 render()
}

function render(){
  document.body.textContent=state.count;
}
render();
dispatch(action)
dispatch(action)
dispatch(action)
dispatch(action)


changeState(state, action);
