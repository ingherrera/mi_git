import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const filterByRegionAction = (regionSelected) => {
    return {
      type: 'FILTER_BY_REGION',
      payload: { regionSelected },
    };
  }
  

export const region = () => {
    const dispatch = useDispatch()
    const filterByRegion = useSelector((state) => state.filterByRegion)

    const onRegionChange = (e) =>{
        const value =  e.target.value
        console.log("el valor seleccionado es ..",value);
        dispatch(filterByRegionAction(value));
    }


    return (
        // <div>
            <select onChange={onRegionChange} value={filterByRegion} >
                <option value="">Filtro por Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europa">Europa</option>
                <option value="Oceania">Oceania</option>
            </select>
        // </div>
    );
};

