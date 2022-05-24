import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([]);
    const [dataSorted, setDataSorted] = useState([]);
    const [playOnce, setPlayOnce] = useState(true);
    const [rangeValue, setRangeValue] = useState(40);
    const [selectedRadio, setSelectedRadio] = useState('');

    const radios = ["Africa", "America", "Europ", "Asia", "Oceania"];
    
    useEffect(() => {
        if (playOnce) {
            axios.get('https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,flag').then((res) =>
            setData(res.data));
            setPlayOnce(false);
        }
        const sortedCountry = () =>{
            //On transforme la promise data en Objet
            const countryObj = Object.keys(data).map((i) => data[i]) ;
            const sortedArray = countryObj.sort((a,b) => {
                return b.population - a.population ;
            });
            sortedArray.length = rangeValue;
            console.log(sortedArray);
            setDataSorted(sortedArray);
        }
       
       sortedCountry();
    }, [data, rangeValue]);

    return (
        <div className='countries'>
            <div className='sort-container'>
                   <input type='range' min='1' max = '250'
                    value={rangeValue} onChange={(e) => setRangeValue(e.target.value)}>
                   </input> 
                   <ul>
                       {radios.map((radio) => {
                           return (
                               <li key={radio}  >
                                   <input type='radio' name='radio' id={radio} checked= {radio === selectedRadio}
                                   value={radio} onChange ={(e) => {setSelectedRadio(e.target.value) 
                                    } } ></input>
                                   <label htmlFor={radio}> {radio} </label>
                                </li>  
                           )
                       })}
                   </ul>
            </div>
            <div className='cancel' onClick={(e)=> setSelectedRadio('')}>
                       {selectedRadio && <h5>Annuler Recherche</h5>}
            </div>
            <ul className='countries-list'>
                {dataSorted.filter((country) => country.region.includes(selectedRadio))
                .map( (country) => ( <Card country={country} key={country.name.common} /> ))}
            </ul>
        </div>
    );
};

export default Countries;