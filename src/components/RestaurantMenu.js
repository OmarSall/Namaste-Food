import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

function getItemCards(resInfo) {
    // Najczęściej itemCards siedzą w "REGULAR" -> cards[] -> card.card.itemCards
    const regularCards =
        resInfo?.cards?.find((c) => c?.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    if (!Array.isArray(regularCards)) {
        return [];
    }

    // Szukamy pierwszej sekcji, która faktycznie ma itemCards
    for (const c of regularCards) {
        const itemCards = c?.card?.card?.itemCards;
        if (Array.isArray(itemCards) && itemCards.length > 0) {
            return itemCards;
        }
    }

    return [];
}

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (!resInfo) {
        return <Shimmer />;
    }

    const { name, cuisines = [], avgRating, costForTwo, sla } = resInfo?.info || {};
    const itemCards = getItemCards(resInfo);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h1 className="text-2xl font-semibold text-slate-900">{name}</h1>

                {cuisines.length > 0 && (
                    <p className="mt-1 text-sm text-slate-600">{cuisines.join(", ")}</p>
                )}

                <div className="mt-3 flex flex-wrap gap-2 text-sm">
          <span className="rounded-md bg-slate-100 px-2 py-1 text-slate-700">
            ⭐ {avgRating ?? "—"}
          </span>

                    {costForTwo && (
                        <span className="rounded-md bg-slate-100 px-2 py-1 text-slate-700">
              {costForTwo}
            </span>
                    )}

                    {sla?.deliveryTime && (
                        <span className="rounded-md bg-slate-100 px-2 py-1 text-slate-700">
              {sla.deliveryTime} min
            </span>
                    )}
                </div>
            </div>

            {/* Menu */}
            <div className="space-y-3">
                <h2 className="text-lg font-semibold text-slate-900">Menu</h2>

                {itemCards.length === 0 ? (
                    <div className="rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-600 shadow-sm">
                        No menu items found for this restaurant (API structure may differ).
                    </div>
                ) : (
                    <ul className="divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                        {itemCards.map((item) => {
                            const info = item?.card?.info;
                            const priceInPaise = info?.price ?? info?.defaultPrice; // Swiggy często używa defaultPrice
                            const price = typeof priceInPaise === "number" ? (priceInPaise / 100).toFixed(2) : null;

                            return (
                                <li key={info?.id ?? info?.name} className="flex items-start justify-between gap-4 p-4">
                                    <div className="min-w-0">
                                        <p className="truncate font-medium text-slate-900">{info?.name}</p>

                                        {info?.description && (
                                            <p className="mt-1 line-clamp-2 text-sm text-slate-600">
                                                {info.description}
                                            </p>
                                        )}

                                        {price && (
                                            <p className="mt-2 text-sm font-medium text-slate-800">₹ {price}</p>
                                        )}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
            {categories.map((category, index) => (
                <RestaurantCategory
                    key={category?.card}
                    data={category?.card?.card}
                    showItems={false}
                    setShowIndex={() => setShowIndex(index)}
                />
            ))}
        </div>
    );
};

export default RestaurantMenu;