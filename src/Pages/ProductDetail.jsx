import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetail() {
  const { id } = useParams();

  const product = products.find((item) => item.id == id);

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div>

      {/* 🔵 Header */}
      <div className="bg-primary mb-4">
        <div className="container py-4">
          <h3 className="text-white">{product.title}</h3>
        </div>
      </div>

      <div className="container">
        <div className="row">

          {/* 🟡 Sidebar */}
          <div className="col-lg-3">
            <div className="card p-3 mb-4">

              <h5>Filters</h5>

              <h6>Category</h6>
              <ul className="list-unstyled">
                <li>Men's clothing</li>
                <li>Shoes</li>
                <li>Accessories</li>
              </ul>

              <h6>Price</h6>
              <input type="range" className="form-range" />

              <h6>Size</h6>
              <div className="d-flex gap-2 flex-wrap">
                <button className="btn btn-outline-secondary btn-sm">S</button>
                <button className="btn btn-outline-secondary btn-sm">M</button>
                <button className="btn btn-outline-secondary btn-sm">L</button>
              </div>

            </div>
          </div>

          {/* 🟢 Product Detail */}
          <div className="col-lg-9">

            <div className="card p-4">

              <div className="row">

                {/* Image */}
                <div className="col-md-5 text-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="img-fluid"
                    style={{ maxHeight: "300px", objectFit: "contain" }}
                  />
                </div>

                {/* Details */}
                <div className="col-md-7">

                  <h4>{product.title}</h4>

                  <p className="text-muted">{product.category}</p>

                  <h5 className="text-primary">${product.price}</h5>

                  <p>{product.description}</p>

                  <p><b>Rating:</b> {product.rating}</p>
                  <p><b>Orders:</b> {product.orders}</p>

                  <button className="btn btn-primary mt-2">
                    Add to Cart
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
}

export default ProductDetail;