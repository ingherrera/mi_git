
import React from 'react';

import {Provider} from 'react-redux'
import generateStore from './redux/store'

import Pokemones from './components/Pokemones1';
import Banderas from './components/Banderas'


function App(){
    const store= generateStore()

    return (
        <Provider store={store}>
            <Pokemones/>

            <Banderas/>
        </Provider>
    );
};

export default App;