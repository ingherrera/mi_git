import React  from "react";
import { Provider, } from "react-redux";
import { createStore } from "redux";
import CountryList from "./country-list"
import {region as FilterbyRegion} from "./region";



const initialState={
  countryList:["Mexico", "Canada", "Brasil", "Argentina", "Colombia"],
  FilterbyRegion:''
}

function reducer(state, action){
  switch (action.type) {
    case 'SET_COUNTRY_LIST':{
      return {...state, countryList:action.payload}
    }
    case 'FILTER_BY_REGION':{
      return {...state, countryList:action.payload}

    }

      
    default:{
      return state
    }
  }
}

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App(){
  
  
  return (
    <Provider store={store}>
      <main>
        todo ok
        <FilterbyRegion/>
        <CountryList />
      </main>
    </Provider>

    
  )
};

export default App;
