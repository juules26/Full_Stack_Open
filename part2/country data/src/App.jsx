import { useState, useEffect } from "react"
import countrydataServices from "./services/countrydataServices"
import FilterCountry from "./components/Filter"
import ShowCountries from "./components/ShowCountries"

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    countrydataServices
      .getAll()
      .then(response => {
        setCountries(response.data) 
      })
      .catch(error => {
        console.error('Error fetching country data:', error)
      })
}, [])

  useEffect(() => {
    if (search.length < 1) {
      setFilteredCountries([])
    } else {
      setFilteredCountries(
        countries.filter(country =>
          country.name.common.toLowerCase().includes(search.toLowerCase())
        )
      )
    }
  }, [search])

  return (
    <div>
      <FilterCountry search={search} setSearch={setSearch} />
      <div>
        <ShowCountries filteredCountries={filteredCountries}/>
      </div>
    </div>
  )
}

export default App