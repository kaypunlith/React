import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

function Home() {
    const [products,setproduct]=useState([])
    const Fectproduct=()=>{
        fetch("https://api.escuelajs.co/api/v1/products?limit=8&offset=0")
        .then(res=>res.json())
        .then(resp=>setproduct(resp))
    }
    useEffect(()=>{
        Fectproduct();
    },[])
  return (
     <>
      <div className="container">
          <div className="row">
             {
                products.map((pro)=>(
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 g-3">
                         <Card
                            Url_img={pro.images[0]}
                            title={pro.title}
                         />
                    </div>
                ))
             }
          </div>
      </div>
     </>
  )
}

export default Home