export default function (props) {
    return (
        <form
            action={props.handleFormSubmit}
            className="fixed top-0 left-0 right-0 bottom-0 m-auto w-[504px] h-[542.24px] bg-white shadow-xl flex flex-col justify-center items-center gap-8 font-verdan p-[24px]"
        >
            <h2 className="font-black text-[24px]">Enter card details</h2>
            <input
                className="border-2 border-gray-300 py-4 px-4 w-full focus:text-2xl focus:bg-amber-100 hover:border-rose-300 hover:border-4"
                type="text"
                placeholder="Enter your name"
                aria-label='Type your name here'
                name="name"
                required />
            <input
                className="border-2 border-gray-300 p-4 px-4 w-full focus:text-2xl focus:bg-amber-100 hover:border-rose-300 hover:border-4"
                type="number"
                placeholder="Enter card number"
                aria-label='Type your card number here'
                name="cardNumber"
                required />
            <input
                className="border-2 border-gray-300 p-4 px-4 w-full focus:text-2xl focus:bg-amber-100 hover:border-rose-300 hover:border-4"
                type="number"
                placeholder="Enter CVV"
                aria-label='Type your CVV here'
                name="cvv"
                required />

            <button type="submit"
                className="bg-[#16DB99] font-verdana text-[16px] font-black text-white w-full py-[18px] cursor-pointer rounded-md hover:bg-green-800 transition-all duration-300 hover:scale-105 hover:text-[24px]">
                Pay
            </button>
        </form>
    )
}