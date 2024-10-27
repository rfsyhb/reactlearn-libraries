import { useState } from 'react';

export default function InputReactive() {
    const [qty, setQty] = useState(0);
    const [price, setPrice] = useState(0);
    const onChangeQty = (e) => {
      setQty(e.target.value);
    };
    const onChangePrice = (e) => {
      setPrice(e.target.value);
    };
  
  return (
    <>
      <input
        type="number"
        onChange={onChangeQty}
        placeholder="quantity?"
        className="text-bg"
      />
      <input
        type="number"
        onChange={onChangePrice}
        placeholder="price?"
        className="text-bg"
      />
      <p>Harga beras: {price}</p>
      <p>kuantitas: {qty}</p>
      <p>total harga: {qty * price}</p>
    </>
  );
}
