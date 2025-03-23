import React from 'react';
import { menuArray } from './data.js';
import { nanoid } from 'nanoid'

export default function () {
    const [cart, setCart] = React.useState([{
        name: "Pizza",
        ingredients: ["pepperoni", "mushrom", "mozarella"],
        id: 0,
        price: 14,
        emoji: "🍕"
    }])

    function handleClick(selectedItem) {
        setCart(prevCart => [...prevCart, selectedItem])
    }

    const menuElements = menuArray.map(menuItem => {
        return (
            <section
                key={menuItem.id}
                className="flex justify-center border-b-2 border-b-gray-300 items-center py-[51px] first:pt-[67px]"
            >
                <p className="w-1/4 text-[78.72px]">{menuItem.emoji}</p>
                <div className="grow flex flex-col gap-1">
                    <h2 className="text-[28px]">{menuItem.name}</h2>
                    <p className="text-gray-400 text-[16px]">{menuItem.ingredients.join(", ")}</p>
                    <p className="text-[20px]">${menuItem.price}</p>
                </div>
                <div className="border-2 border-gray-300 text-black opacity-50 hover:opacity-100 rounded-full flex items-center justify-center w-[48px] h-[48px]">
                    <button
                        className="text-[32px] cursor-pointer"
                        onClick={(() => handleClick(menuItem))}
                    >+</button>
                </div>
            </section>
        )
    })

    const cartElements = cart.map(cartItem => {
        return (
            <div
                key={nanoid()}
                className="flex justify-center w-full gap-4  mb-[22px]"
            >
                <p className="text-[28px]">{cartItem.name}</p>
                <button className="text-[12px] text-gray-400 font-verdana">remove</button>
                <p className="ml-auto text-[20px]">${cartItem.price}</p>
            </div>
        )
    })

    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    return (
        <div className="font-smythe w-[600px] flex flex-col mx-auto mt-4">
            <header className="p-11 bg-[url(./assets/burgerMain.jpeg)] bg-center bg-cover bg-no-repeat text-white">
                <h1 className="text-3xl font-bold">Jimmy’s Diner</h1>
                <p className="text-1xl">The best burgers and pizzas in town.</p>
            </header>

            <main className="px-[46px]">
                {menuElements}
            </main>

            {cart.length > 0 &&
                <footer className="px-[46px] flex flex-col items-center">
                    <h2 className="text-[28px] mt-[45px] mb-[64px]">Your order</h2>
                    {cartElements}
                    <div className="flex justify-between w-full border-t-2 pt-[31px]">
                        <h2 className="text-[28px]">Total price: </h2>
                        <p className="text-[20px]">${totalPrice}</p>
                    </div>

                    <button className="bg-[#16DB99] font-verdana text-[16px] font-black text-white w-full py-[18px] my-[53px] cursor-pointer rounded-md">Complete order</button>

                </footer>
            }

        </div>
    )
}