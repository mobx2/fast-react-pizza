import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  console.log(isLoadingIngredients);

  return (
    <li className="space-y-1 py-3">
      <div className="tex-[0.5rem] flex items-center justify-between gap-4">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-tone-500 text-sm capitalize italic">
        {isLoadingIngredients ? "Loading..." : ingredients.join(",")}
      </p>
    </li>
  );
}

export default OrderItem;
