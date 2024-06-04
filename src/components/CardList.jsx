export default function CardList(props) {
  return (
    <div>
      {/* cards */}
      <div className="d-flex justify-content-center mt-2">
        <div className="row">
          {props.products.map((product, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 mt-5 d-flex justify-content-center"
            >
              <div className="card bg-black rounded" style={{ width: "18rem" }}>
                <i className="fa-regular fa-heart text-danger text-end me-3 mt-3"></i>
                <img
                  src={product.imgUrl}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title text-white">{product.title}</h5>
                  <p className="card-text text-white">{product.desc}</p>
                  <p className="text-white">Rs.{product.price}</p>
                  <a
                    href="#"
                    className="btn btn-danger position-absolute text-white top-100 start-50 translate-middle"
                  >
                    <i
                      className="fa-solid fa-plus"
                      onClick={() => {
                        props.onIncrement(index);
                      }}
                    ></i>
                    <span className="fs-6">Add to Cart </span>
                    <i
                      className="fa-solid fa-minus"
                      onClick={() => {
                        props.onDecrement(index);
                      }}
                    ></i>
                    <h6>{product.quantity}</h6>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
