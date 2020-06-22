import { useEffect } from "react"
import { useDispatch }  from "react-redux"

export default function CountryList() {
    const dispatch = useDispatch()
  // console.log(dispatch);
  
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        return response.json()
      })
      .then((list) => {
        dispatch({
          type: 'SET_COUNTRY_LIST',
          payload: list
        })
        console.log("paises que me traje con el fetch..",list)
      })
      .catch(() => {
        console.log("Sorry, hubo un error");
        
      })
  },[dispatch])
  const numero = 15
  return(
    numero
    )  
  }
