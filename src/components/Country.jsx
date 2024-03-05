import {useState, useEffect} from 'react'

const Country = (props) => {
  const {name, flags} = props.country;


  return (
    <>
      <div className="m-20">
          <img className='w-96 h-40' src={flags.png} alt="flag" />
          <h1>{name.common}</h1>
      </div>
    </>
  )
}

export default Country
