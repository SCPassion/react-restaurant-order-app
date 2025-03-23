export default function (props) {
  return (
    <section className="flex items-center justify-center border-b-2 border-b-gray-300 py-[51px] first:pt-[67px]">
      <p className="w-1/4 text-[78.72px]">{props.emoji}</p>
      <div className="flex grow flex-col gap-1">
        <h2 className="text-[28px]">{props.name}</h2>
        <p className="text-[16px] text-gray-400">
          {props.ingredients.join(", ")}
        </p>
        <p className="text-[20px]">${props.price}</p>
      </div>
      <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full border-2 border-gray-300 text-black opacity-50 hover:opacity-100">
        <button
          className="cursor-pointer text-[32px]"
          onClick={() => props.handleClick(props)}
        >
          +
        </button>
      </div>
    </section>
  );
}
