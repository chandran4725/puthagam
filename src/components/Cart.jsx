import bookImg from "../assets/book1.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeBook
} from "./BookSlice"; // adjust path

const Cart = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* CART ITEMS */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
          <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty</p>
          ) : (
            cartItems.map(item => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center gap-6 border-b py-4"
              >
                <img
                  src={bookImg}
                  alt={item?.name}
                  className="w-24 h-32 object-contain"
                />

                <div className="flex-1 w-full">
                  <h2 className="font-semibold text-lg">{item?.name}</h2>
                  <p className="text-gray-600 mt-1">₹{item?.price}</p>

                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => dispatch(decreaseQty(item?.id))}
                      className="px-3 py-1 border rounded-md"
                    >
                      −
                    </button>

                    <span className="font-medium">{item.quantity}</span>

                    <button
                      onClick={() => dispatch(increaseQty(item?.id))}
                      className="px-3 py-1 border rounded-md"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => dispatch(removeBook(item?.id))}
                    className="mt-3 text-sm text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>

                <div className="font-semibold text-lg">
                  ₹{item?.price * item?.quantity}
                </div>
              </div>
            ))
          )}
        </div>

        {/* ORDER SUMMARY */}
        <div className="bg-white rounded-xl shadow-md p-6 h-fit sticky top-28">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Delivery</span>
            <span>Free</span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>₹{subtotal}</span>
          </div>

          <button
            disabled={cartItems.length === 0}
            className={`w-full mt-6 py-3 rounded-lg font-semibold
              ${cartItems.length === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-yellow-400 hover:bg-yellow-500"}`}
          >
            Proceed to Checkout
          </button>
        </div>

      </div>
    </div>
  );
};

export default Cart;
