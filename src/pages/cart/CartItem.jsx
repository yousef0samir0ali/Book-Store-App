import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import cartContext from "../../context/cartContext";
export default function CartItem({ item }) {
  // @ts-ignore
  let { removeFromCart, addToCart } = useContext(cartContext);

  return (
    <div className="cart-item">
      <img src={`/Book-Store-App/books/${item.image}`} alt={item.title} />
      <div className="info">
        <div className="left">
          <div className="title">
            <b>Title: </b>
            {item.title}
          </div>
          <div className="author">
            <b>Author: </b>
            {item.author}
          </div>
          <div className="info-price">
            <b>Price: </b>${item.price}
          </div>
        </div>
        <div className="right">
          <div className="quantity">
            <button
              onClick={() =>
                addToCart({
                  ...item,
                  quantity: item.quantity + 1,
                })
              }
              disabled={item.quantity >= 100}
            >
              <FontAwesomeIcon icon={faPlus} className="icon" />
            </button>
            <b>Quantity: {item.quantity}</b>
            <button
              onClick={() =>
                addToCart({
                  ...item,
                  quantity: item.quantity - 1,
                })
              }
              disabled={item.quantity <= 1}
            >
              <FontAwesomeIcon icon={faMinus} className="icon" />
            </button>
          </div>
          <div className="price">
            Total: ${(item.price * item.quantity).toFixed(2)}
          </div>
          <FontAwesomeIcon
            icon={faTrashCan}
            className="delete"
            onClick={() => removeFromCart(item.id)}
          />
        </div>
      </div>
    </div>
  );
}
