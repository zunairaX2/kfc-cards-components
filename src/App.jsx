import Nav from "./components/Nav";
import CardList from "./components/CardList";
import { products as initialProducts } from "./data/products";
import { useState } from "react";

export default function App() {
  let [products, setProducts] = useState(initialProducts);

  let onIncrement = (index) => {
    if (products[index].quantity >= 0) {
      let copyProducts = [...products];
      copyProducts[index].quantity += 1;
      setProducts(copyProducts);
    }
  };

  let onDecrement = (index) => {
    if (products[index].quantity > 0) {
      let copyProducts = [...products];
      copyProducts[index].quantity -= 1;
      setProducts(copyProducts);
    }
  };

  let totalQuantity = products.reduce((sum, i) => sum + i.quantity, 0);
  let totalPrice = products.reduce((sum, i) => sum + i.quantity * i.price, 0);

  return (
    <div>
      <Nav products={products} totalQuantity={totalQuantity} totalPrice={totalPrice} />
      <CardList products={products} onIncrement={onIncrement} onDecrement={onDecrement} />
    </div>
  );
}
