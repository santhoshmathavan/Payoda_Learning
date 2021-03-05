import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function Itemsdetail({match}) {
    useEffect(()=>{
       fetchItem()
       console.log(match)
    },[])

    const [item,setItem] = useState({})

    const fetchItem = async() =>{
        const fetchItem = await fetch(`https://fakestoreapi.com/products/${match.params.id}`)
        const item = await fetchItem.json()
        setItem(item)
        console.log(item)
    }

    return (
        <div>
        <h1>{item.description}</h1>
        </div>
  );
}

export default Itemsdetail;
