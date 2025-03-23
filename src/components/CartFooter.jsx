export default function (props) {
  const cartElements = props.cart.map((cartItem) => {
    return (
      <div
        key={cartItem.id}
        className="mb-[22px] flex w-full justify-center gap-4"
      >
        <p className="text-[28px]">{cartItem.name}</p>
        <button
          className="font-verdana cursor-pointer text-[12px] text-gray-400 hover:text-[16px] hover:text-red-500"
          onClick={() => props.handleRemoveOrder(cartItem.id)}
        >
          remove
        </button>
        <p className="ml-auto text-[20px]">${cartItem.price}</p>
      </div>
    );
  });

  // Calculations
  const totalPrice = props.cart.reduce((total, item) => total + item.price, 0);

  return (
    <footer className="flex flex-col items-center px-[46px]">
      <h2 className="mt-[45px] mb-[64px] text-[28px]">Your order</h2>
      {cartElements}
      <div className="flex w-full justify-between border-t-2 pt-[31px]">
        <h2 className="text-[28px]">Total price: </h2>
        <p className="text-[20px]">${totalPrice}</p>
      </div>

      <button
        className="font-verdana hover:shadow-3xl my-[53px] w-full cursor-pointer rounded-md bg-[#16DB99] py-[18px] text-[16px] font-black text-white transition-all duration-300 hover:scale-105 hover:bg-green-800 hover:text-[24px]"
        onClick={props.toggleModalState}
      >
        Complete order
      </button>
    </footer>
  );
}
