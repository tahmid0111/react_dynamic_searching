import {useState, useEffect} from 'react'

const Country = () => {
    const [data, setData] = useState([])

    useEffect(()=> {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(datas=> setData(datas))
    }, [])
  return (
    <>
      {
        data.map((d) => <p key={d.id}>{d.title}</p>)
      }
    </>
  )
}

export default Country
