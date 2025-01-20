export default function OrderSummary({ totalPrice }) {
  return (
    <div className="cart-order-summary">
      <div className="title">Order Summary</div>
      <div className="item">
        <span>Subtotal </span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <div className="item">
        <span>Shopping Cost </span>
        <span>$0</span>
      </div>
      <div className="item">
        <span>Discont</span>
        <span>$0</span>
      </div>
      <div className="item">
        <span>Total</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
}
