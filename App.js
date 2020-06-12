import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";



function reducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const initialState={
  countryList:[Mexico, Canada, Brasil]
}

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App(){
  return (
    <Provider store={store}>
      <main>
        todo ok
      </main>
    </Provider>

    
  )
};

export default App;
