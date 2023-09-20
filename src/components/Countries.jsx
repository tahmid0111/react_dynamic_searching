import {useState, useEffect} from 'react'
import Country from './Country'
import SearchBar from './SearchBar'

const Countries = () => {
  const [countries, setCountries] = useState([])
  const [filterCountries, setFilterCountries] = useState(countries)

  const handleText = (todos) => {
    const todosLower = todos.toLowerCase();
    const newCountries = countries.filter((c) => {
      let cName = c.name.common.toLowerCase();
      return cName.startsWith(todosLower);
    })
    setFilterCountries(newCountries)
  }

  useEffect(()=> {
    fetch(`https://restcountries.com/v3.1/all`)
          .then(res=>res.json())
          .then(datas=> setCountries(datas))
          }, [])
  return (
    <>
    <h1 className='text-red-500 text-5xl text-center'>Search Your Destination</h1>
    <div className='text-center'>
      <SearchBar className='w-full' onSearchChange={handleText} />
    </div>
      <div className="grid grid-cols-3">
        {filterCountries.length === 0 ? countries.map(country => <Country country={country} />) : filterCountries.map(country => <Country key={country.id} country={country} />)
        }
      </div>
    </>
  )
}

export default Countries

// https://restcountries.com/v3.1/name/{name}
