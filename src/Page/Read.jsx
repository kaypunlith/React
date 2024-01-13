import React, { useState } from 'react'
function Read() {
    const [products,setproduct]=useState([])
    const Fectproduct=()=>{
        fetch(`https://api.escuelajs.co/api/v1/products${id}`)
        .then(res=>res.json())
        .then(resp=>setproduct(resp))
    }
    useEffect(()=>{
        Fectproduct();
    },[])
  return (
    <div>
        <h1>
            
        </h1>
    </div>
  )
}
export default Read