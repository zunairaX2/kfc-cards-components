import React from 'react'
export default function Nav(props) {
  return (
    <div>
      <nav className="navbar bg-black rounded">
        <span className="text-white ms-2 fs-4">KFC</span>
        <form className="container-fluid justify-content-end">
          <button
            type="button"
            className="me-4 btn position-relative fa-solid fa-cart-shopping text-danger"
          >
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-secondary">
              {props.totalQuantity}{" "}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
          <div className="text-white me-4">|</div>
          <h4 className="text-white">Rs.{props.totalPrice}</h4>
        </form>
      </nav>
    </div>
  );
}
