import React from 'react'

function Navbar() {
  return (
    <>
       <div className="contaienr-fluid bg-dark">
       <div className="container">
       <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Navbar</a>
    <div class="collapse navbar-collapse" >
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only"></span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
      </ul>
    </div>
      <form class="form-inline d-flex gap-3">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
      </form>
  </nav>
       </div>
    </div>
    </>
  )
}

export default Navbar