import { nanoid } from 'nanoid'

export default function (props) {
    const cartElements = props.cart.map(cartItem => {
        return (
            <div
                key={nanoid()}
                className="flex justify-center w-full gap-4  mb-[22px]"
            >
                <p className="text-[28px]">{cartItem.name}</p>
                <button
                    className="text-[12px] text-gray-400 font-verdana cursor-pointer hover:text-red-500 hover:text-[16px]"
                    onClick={() => props.handleRemoveOrder(cartItem.id)}
                >
                    remove
                </button>
                <p className="ml-auto text-[20px]">${cartItem.price}</p>
            </div>
        )
    })

    // Calculations
    const totalPrice = props.cart.reduce((total, item) => total + item.price, 0)

    return (
        <footer className="px-[46px] flex flex-col items-center">
            <h2 className="text-[28px] mt-[45px] mb-[64px]">Your order</h2>
            {cartElements}
            <div className="flex justify-between w-full border-t-2 pt-[31px]">
                <h2 className="text-[28px]">Total price: </h2>
                <p className="text-[20px]">${totalPrice}</p>
            </div>

            <button
                className="bg-[#16DB99] font-verdana text-[16px] font-black text-white w-full py-[18px] my-[53px] cursor-pointer rounded-md hover:bg-green-800 transition-all duration-300 hover:scale-105 hover:text-[24px] hover:shadow-3xl"
                onClick={props.toggleModalState}
            >Complete order</button>

        </footer>
    )
}