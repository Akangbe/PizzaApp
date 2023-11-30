import Buttons from "../../UI/Buttons";
import { formatCurrency } from "../../Utilis/helpers"; // Verify the import path

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2 ">
      <img className={`h-24 ${soldOut ? `opacity-70 grayscale` : " "}`} src={imageUrl} alt={name} />
      <div className="flex flex-col grow pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic capitalize text-stone-400 ">{ingredients.join(',')}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className="text-sm font-medium uppercase text-stone-500">Sold out</p>}
          <Buttons type="small">Add to cart</Buttons>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
