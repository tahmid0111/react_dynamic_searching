import {useState, useEffect} from 'react'
import Country from './Country'

const Countries = () => {
  const [countries, setCountries] = useState([])

  useEffect(()=> {
    fetch('https://restcountries.com/v3.1/all')
          .then(res=>res.json())
          .then(datas=> setCountries(datas))
          }, [])
  return (
    <>
      <div className="grid grid-cols-3">
        {
          countries.map((country) => <Country key={country.name.common} country={country} />)
        }
      </div>
    </>
  )
}

export default Countries
