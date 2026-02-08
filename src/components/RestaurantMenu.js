import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    const {
        name,
        cuisines = [],
        avgRating,
        costForTwo,
        sla,
    } = resInfo?.info || {};

    if (!resInfo) {
        return <Shimmer/>;
    }

    // This path is not working
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.packetsDiscarded;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <h3>{avgRating}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) =>
                    <li key="item.card.info.name.id">
                        {item.card.info.name} - {item.card.info.name?.price}
                    </li>
                )
                }
                <li>itemCards[0]</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    );
}
export default RestaurantMenu;