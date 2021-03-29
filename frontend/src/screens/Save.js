import React from "react";

export default function Save(props) {
  const productId1 = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  return (
    <div>
      <h1>Save for Later</h1>
      <p>
        Save: ProductID: {productId1} Qty: {qty}
      </p>
    </div>
  );
}
