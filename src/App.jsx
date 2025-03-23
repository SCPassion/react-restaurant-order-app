import React from 'react';
import { menuArray } from './data.js';
import { nanoid } from 'nanoid'
import MenuItem from './components/MenuItem.jsx'

export default function () {
    // State
    const [cart, setCart] = React.useState([])
    const [modelOpen, setModelOpen] = React.useState(false)
    const [paymentDetails, setPaymentDetails] = React.useState(null)

    // Calculations
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    // callback functions
    function handleClick(selectedItem) {
        setCart(prevCart => [...prevCart, selectedItem])
    }

    function handleRemoveOrder(id) {
        setCart(prevCart => prevCart.filter(item => item.id !== id))
    }

    function toggleModalState() {
        setModelOpen(prevState => !prevState)
    }

    function handleFormSubmit(formData) {
        const paymentDetail = Object.fromEntries(formData)
        setCart([])
        toggleModalState()
        setPaymentDetails(paymentDetail)
    }

    // React elements
    const menuElements = menuArray.map(menuItem => {
        return (
            <MenuItem
                key={menuItem.id}
                emoji={menuItem.emoji}
                name={menuItem.name}
                ingredients={menuItem.ingredients}
                price={menuItem.price}
                handleClick={handleClick}
            />
        )
    })

    const cartElements = cart.map(cartItem => {
        return (
            <div
                key={nanoid()}
                className="flex justify-center w-full gap-4  mb-[22px]"
            >
                <p className="text-[28px]">{cartItem.name}</p>
                <button
                    className="text-[12px] text-gray-400 font-verdana cursor-pointer hover:text-red-500 hover:text-[16px]"
                    onClick={() => handleRemoveOrder(cartItem.id)}
                >
                    remove
                </button>
                <p className="ml-auto text-[20px]">${cartItem.price}</p>
            </div>
        )
    })

    return (
        <div className="font-smythe w-[600px] flex flex-col mx-auto mt-4">
            <header className="p-11 bg-[url(./assets/burgerMain.jpeg)] bg-center bg-cover bg-no-repeat text-white">
                <h1 className="text-3xl font-bold">Jimmy’s Diner</h1>
                <p className="text-1xl">The best burgers and pizzas in town.</p>
            </header>

            <main className="px-[46px]">
                {menuElements}
            </main>

            {(cart.length > 0 && paymentDetails === null) &&
                <footer className="px-[46px] flex flex-col items-center">
                    <h2 className="text-[28px] mt-[45px] mb-[64px]">Your order</h2>
                    {cartElements}
                    <div className="flex justify-between w-full border-t-2 pt-[31px]">
                        <h2 className="text-[28px]">Total price: </h2>
                        <p className="text-[20px]">${totalPrice}</p>
                    </div>

                    <button
                        className="bg-[#16DB99] font-verdana text-[16px] font-black text-white w-full py-[18px] my-[53px] cursor-pointer rounded-md hover:bg-green-800 transition-all duration-300 hover:scale-105 hover:text-[24px] hover:shadow-3xl"
                        onClick={toggleModalState}
                    >Complete order</button>

                </footer>
            }

            {paymentDetails !== null &&
                <footer className="text-[#065F46] bg-[#ECFDF5] w-[504px] h-[120px] flex flex-col justify-center items-center mx-auto my-[31px]">
                    <h2 className="text-[28px] py-4 px-8 text-center">Thanks, {paymentDetails.name}! Your order is on its way!</h2>
                </footer>
            }

            {modelOpen && <div>
                <form
                    action={handleFormSubmit}
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
            </div>}
        </div>
    )
}