export default function (props) {
    return (
        <section
            className="flex justify-center border-b-2 border-b-gray-300 items-center py-[51px] first:pt-[67px]"
        >
            <p className="w-1/4 text-[78.72px]">{props.emoji}</p>
            <div className="grow flex flex-col gap-1">
                <h2 className="text-[28px]">{props.name}</h2>
                <p className="text-gray-400 text-[16px]">{props.ingredients.join(", ")}</p>
                <p className="text-[20px]">${props.price}</p>
            </div>
            <div className="border-2 border-gray-300 text-black opacity-50 hover:opacity-100 rounded-full flex items-center justify-center w-[48px] h-[48px]">
                <button
                    className="text-[32px] cursor-pointer"
                    onClick={(() => props.handleClick(props))}
                >+</button>
            </div>
        </section>
    )
}