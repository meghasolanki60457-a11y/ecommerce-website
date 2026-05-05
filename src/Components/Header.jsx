function Home() {
  return (
    <>
      {/* Jumbotron */}
      <div className="p-3 text-center bg-white border-bottom">
        <div className="container">
          <div className="row gy-3">

            <div className="col-lg-2 col-sm-4 col-4">
              <a href="https://mdbootstrap.com/" target="_blank" rel="noreferrer" className="float-start">
                <img
                  src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
                  height="35"
                  alt="logo"
                />
              </a>
            </div>

            <div className="order-lg-last col-lg-5 col-sm-8 col-8">
              <div className="d-flex float-end">
                  <a href="https://github.com/mdbootstrap/bootstrap-material-design" class="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center" target="_blank"> <i class="fas fa-user-alt m-1 me-md-2"></i><p class="d-none d-md-block mb-0">Sign in</p> </a>
            <a href="https://github.com/mdbootstrap/bootstrap-material-design" class="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center" target="_blank"> <i class="fas fa-heart m-1 me-md-2"></i><p class="d-none d-md-block mb-0">Wishlist</p> </a>
            <a href="https://github.com/mdbootstrap/bootstrap-material-design" class="border rounded py-1 px-3 nav-link d-flex align-items-center" target="_blank"> <i class="fas fa-shopping-cart m-1 me-md-2"></i><p class="d-none d-md-block mb-0">My cart</p> </a> 
              </div>
            </div>

            <div className="col-lg-5 col-md-12 col-12">
              <div className="input-group">
                <input type="search" className="form-control" placeholder="Search" />
                <button className="btn btn-primary">
                  Search
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container justify-content-center">

          <div class="collapse navbar-collapse" id="navbarLeftAlignExample">
    
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link text-dark" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">Categories</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">Hot offers</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">Gift boxes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">Menu item</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">Menu name</a>
          </li>
        
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
              Others
            </a>
    
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item" href="#">Action</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Another action</a>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <a class="dropdown-item" href="#">Something else here</a>
              </li>
            </ul>
          </li>
        </ul>
    
      </div>
        </div>
      </nav>

    
    </>
  );
}

export default Home;