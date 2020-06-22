import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {obtenerBanderasAccion} from '../redux/flagReducer'

const Banderas = () => {
    const dispatch =  useDispatch()
    const banderas = useSelector(store => store.banderas.array)
    console.log(banderas);
    
    return (
        <div>
            lista de Banderas
            <button onClick ={() => dispatch(obtenerBanderasAccion())}>Get Pokemones</button>
            <ul>
                {
                    banderas.map(item => (
                        <li key={item.name}>{item.name}</li>
                    ))

                }

            </ul>
        </div>
    );
};

export default Banderas;