import React from 'react';
import { menuArray } from './data.js';

export default function () {

    const menuElements = menuArray.map(menuItem => {
        return (
            <section
                key={menuItem.id}
                className="flex justify-center border-b-2 border-b-gray-300 items-center py-[51px] first:pt-[67px]"
            >
                <p className="w-1/4 text-[78.72px]">{menuItem.emoji}</p>
                <div className="grow">
                    <h2>{menuItem.name}</h2>
                    <p>{menuItem.ingredients.join(",")}</p>
                    <p>${menuItem.price}</p>
                </div>
                <div className="border-2 border-gray-300 text-black opacity-50 hover:opacity-100 rounded-full flex items-center justify-center w-[48px] h-[48px]">
                    <button className="text-[32px] cursor-pointer">+</button>
                </div>
            </section>
        )
    })

    return (
        <div className="font-smythe w-[600px] flex flex-col mx-auto mt-4">
            <header className="p-11 bg-[url(./assets/burgerMain.jpeg)] bg-center bg-cover bg-no-repeat text-white">
                <h1 className="text-3xl font-bold">Jimmy’s Diner</h1>
                <p className="text-1xl">The best burgers and pizzas in town.</p>
            </header>

            <main className="px-[46px] ">
                {menuElements}
            </main>
        </div>
    )
}