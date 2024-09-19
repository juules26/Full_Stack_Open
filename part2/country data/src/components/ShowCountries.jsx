import { useEffect, useState } from 'react'
import './showcountries.css'
import countrydataServices from '../services/countrydataServices'

const ShowCountries = ({ filteredCountries }) => {
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [weatherData, setWeatherData] = useState(null)

    useEffect(() => {
        setSelectedCountry(null)
    }, [filteredCountries])

    useEffect(() => {
        if (selectedCountry) {
            const location = selectedCountry.name.common
            countrydataServices
                .getWeather(location)
                .then(response => {
                    setWeatherData(response.data)
                })
                .catch(error => {
                    console.log('Error fetching weather data:', error)
                })
        }
    }, [selectedCountry])

    const showData = (country) => {
        return (
            <div>
                <h1>{country.name.common}</h1>
                <p>capital {country.capital[0]}</p>
                <p>area {country.area}</p>
                <h3>languages:</h3>
                <div>
                    {Object.values(country.languages).map((language, index) => (
                        <li key={index} className="language-list">{language}</li> 
                    ))}
                </div>
                <img src={country.flags.png} className='flag' />
                <h2>Weather in {country.name.common}</h2>
                {weatherData ? (
                    <div>
                        <p>temperature {weatherData.current.temp_c} Celsius</p>
                        <p>wind {weatherData.current.wind_kph} m/s</p>
                    </div>
                ) : (
                    <p>Loading weather data...</p>
                )}
            </div>
        )
    }
    
    if (filteredCountries.length > 10) {
        return <p>Too many matches, specify another filter</p>
    } else if (filteredCountries.length <10 && filteredCountries.length >1) {
        return (
            <div>
                {filteredCountries.map(country => (
                    <div key={country.cca3}>
                        {country.name.common}
                        <button onClick={() => setSelectedCountry(country)}>show</button>
                    </div>
                ))}
                {selectedCountry && showData(selectedCountry)}
            </div>
        )
    } else if (filteredCountries.length <1) {
        return <p>No countries found</p>
    } else if (filteredCountries.length === 1) {
        return showData(filteredCountries[0])
    }
}

export default ShowCountries