import React, {useState, useEffect} from "react";
import CountriesList from '../components/CountriesList';

const CountriesMain = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(countriesFromApi => setCountries(countriesFromApi))
    })

    return <CountriesList countries = {countries}/>

}

export default CountriesMain