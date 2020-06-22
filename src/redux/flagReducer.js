import axios from 'axios'

// constantes
const dataInicial={
    array:[]
    
}

//type
const OBTENER_BANDERAS_EXITO = 'OBTENER_BANDERAS_EXITO'


//reducer
export default function flagReducer(state= dataInicial, action){
    switch (action.type) {
        case OBTENER_BANDERAS_EXITO:
            return {...state, array:action.payload}
    
        default:
            return state
    }
}

export const obtenerBanderasAccion = () => async(dispatch, getState) => {
    try {
        const res = await axios.get('https://restcountries.eu/rest/v2/all')
        console.log("AXIOS regresa: ...",res);
        dispatch({
            type: OBTENER_BANDERAS_EXITO,
            payload: res.data

        })
    } catch (error) {
        console.log(error);
        
    }
}