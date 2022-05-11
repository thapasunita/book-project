

let state = {
    qty: 3,
}

function setState(cFn) {
    state = cFn(state)    //state = updateState(state)
    console.log("rendering html");
}


// const updateState = (prevState) => {
//   return {
//       qty: prevState.qty + 1
//   }
// }


console.log(state.qty);


setState( prevState => {
    return {
        qty: prevState.qty + 1
    }
} );


console.log(state.qty);