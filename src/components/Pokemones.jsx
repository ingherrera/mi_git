import React from 'react';
import {useDispatch, useSelector} from  'react-redux'
import {obtenerPokemonesAccion, obtenerSiguientesPokemonesAccion} from '../redux/pokeReducer'

const Pokemones = () => {
    const dispatch = useDispatch()

    const pokemones = useSelector(store=> store.pokemones.array)
    console.log(pokemones);
    

    return (
        <div>
            lista de pokemones
            <button onClick ={() => dispatch(obtenerPokemonesAccion())}>Get Pokemones</button>
            <button onClick ={() => dispatch(obtenerSiguientesPokemonesAccion())}>Next 20 Pokemones</button>
            <ul>
                {
                    pokemones.map(item => (
                        <li key={item.name}>{item.name}</li>
                    ))

                }

            </ul>
        </div>
    );
};

export default Pokemones;