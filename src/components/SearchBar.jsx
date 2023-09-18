import { useEffect, useState } from 'react'



const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
    
  }
  useEffect(() => {
    alert(setSearchText)
  }, [searchText])

  return (
    <>
      <input className='' type="text" onChange={handleChange} value={searchText} />
    </>
  )
}

export default SearchBar
