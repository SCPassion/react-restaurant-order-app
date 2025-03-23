import React from 'react';
import { menuArray } from './data.js';
import MenuItem from './components/MenuItem.jsx'
import CartFooter from './components/CartFooter.jsx'
import Modal from './components/Modal.jsx'
import { nanoid } from 'nanoid'

export default function () {
    // State
    const [cart, setCart] = React.useState([])
    const [modelOpen, setModelOpen] = React.useState(false)
    const [paymentDetails, setPaymentDetails] = React.useState(null)

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
        const id = nanoid()
        return (
            <MenuItem
                key={id}
                id={id}
                emoji={menuItem.emoji}
                name={menuItem.name}
                ingredients={menuItem.ingredients}
                price={menuItem.price}
                handleClick={handleClick}
            />
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
                <CartFooter
                    cart={cart}
                    handleRemoveOrder={handleRemoveOrder}
                    toggleModalState={toggleModalState}
                />
            }

            {paymentDetails !== null &&
                <footer className="text-[#065F46] bg-[#ECFDF5] w-[504px] h-[120px] flex flex-col justify-center items-center mx-auto my-[31px]">
                    <h2 className="text-[28px] py-4 px-8 text-center">Thanks, {paymentDetails.name}! Your order is on its way!</h2>
                </footer>
            }

            {modelOpen && <div>
                <Modal handleFormSubmit={handleFormSubmit} />
            </div>}
        </div>
    )
}