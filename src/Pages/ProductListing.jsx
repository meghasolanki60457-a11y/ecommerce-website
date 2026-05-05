import { Link } from "react-router-dom";
import products from "../data/products";

function ProductListing() {
  return (
    <div>

      {/* 🔵 Top Header */}
      <div className="bg-primary mb-4">
        <div className="container py-4">
          <h3 className="text-white mt-2">Men's wear</h3>

          <nav className="d-flex mb-2">
            <h6 className="mb-0">
              <span className="text-white-50">Home</span>
              <span className="text-white-50 mx-2"> &gt; </span>
              <span className="text-white-50">Products</span>
              <span className="text-white-50 mx-2"> &gt; </span>
              <span className="text-white"><u>Listing</u></span>
            </h6>
          </nav>
        </div>
      </div>

      <div className="container">
        <div className="row">

          {/* 🟡 Sidebar */}
          <div className="col-lg-3">
            <div className="card p-3 mb-4">

              <h5>Filters</h5>

              {/* Category */}
              <h6>Category</h6>
              <ul className="list-unstyled">
                <li>Men's clothing</li>
                <li>Shoes</li>
                <li>Accessories</li>
              </ul>

              {/* Price */}
              <h6>Price</h6>
              <input type="range" className="form-range" />

              {/* Size */}
              <h6>Size</h6>
              <div className="d-flex gap-2 flex-wrap">
                <button className="btn btn-outline-secondary btn-sm">S</button>
                <button className="btn btn-outline-secondary btn-sm">M</button>
                <button className="btn btn-outline-secondary btn-sm">L</button>
              </div>

            </div>
          </div>

          {/* 🟢 Product Section */}
          <div className="col-lg-9">

            {/* Top bar */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <strong>{products.length} Items found</strong>

              <select className="form-select w-auto">
                <option>Best match</option>
                <option>High rated</option>
              </select>
            </div>

            {/* Product Grid */}
            <div className="row">
              {products.map((item) => (
                <div key={item.id} className="col-lg-4 col-md-6 mb-4">

                  <div className="card h-100 p-3 text-center">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-fluid mb-3"
                      style={{ height: "150px", objectFit: "contain" }}
                    />

                    <h6>{item.title}</h6>

                    <p className="fw-bold">${item.price}</p>

                    <p className="text-muted">{item.category}</p>

                    <div className="d-flex justify-content-center gap-2">

                      <Link to={`/products//${item.id}`}>
                        <button className="btn btn-sm btn-primary">
                          View
                        </button>
                      </Link>

                      <button className="btn btn-sm btn-outline-primary">
                        Cart
                      </button>

                    </div>

                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}

export default ProductListing;