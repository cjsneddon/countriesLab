import React from 'react';
import ListItem from './ListItem'

const CountriesList = () => {

    const countriesItems = countries.map((name, index) => {
        // return <ListItem countrie = {countrie}, key ={index}, onCountrieClick ={onCountrieClick} />
    })

    return(
        <>
            <ul>
                {countriesItems}
            </ul>
        </>
    )

}

export default CountriesList