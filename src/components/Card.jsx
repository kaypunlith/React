import React from 'react'
function Card(props) {
  return (
    <>
      <div class="card" style={{width:"18rem",height:"27rem"}}>
        <img src={props.Url_img} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            {/* <p class="card-text">{props.des}</p> */}
         
        </div>
      </div>
    </>
  )
}

export default Card