export default function (props) {
  return (
    <form
      action={props.handleFormSubmit}
      className="font-verdan fixed top-0 right-0 bottom-0 left-0 m-auto flex h-[542.24px] w-[504px] flex-col items-center justify-center gap-8 bg-white p-[24px] shadow-xl"
    >
      <h2 className="text-[24px] font-black">Enter card details</h2>
      <input
        className="w-full border-2 border-gray-300 px-4 py-4 hover:border-4 hover:border-rose-300 focus:bg-amber-100 focus:text-2xl"
        type="text"
        placeholder="Enter your name"
        aria-label="Type your name here"
        name="name"
        required
      />
      <input
        className="w-full border-2 border-gray-300 p-4 px-4 hover:border-4 hover:border-rose-300 focus:bg-amber-100 focus:text-2xl"
        type="number"
        placeholder="Enter card number"
        aria-label="Type your card number here"
        name="cardNumber"
        required
      />
      <input
        className="w-full border-2 border-gray-300 p-4 px-4 hover:border-4 hover:border-rose-300 focus:bg-amber-100 focus:text-2xl"
        type="number"
        placeholder="Enter CVV"
        aria-label="Type your CVV here"
        name="cvv"
        required
      />

      <button
        type="submit"
        className="font-verdana w-full cursor-pointer rounded-md bg-[#16DB99] py-[18px] text-[16px] font-black text-white transition-all duration-300 hover:scale-105 hover:bg-green-800 hover:text-[24px]"
      >
        Pay
      </button>
    </form>
  );
}
