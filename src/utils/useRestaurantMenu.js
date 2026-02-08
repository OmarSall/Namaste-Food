import {useEffect, useState} from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        const restList = json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setResInfo(restList[0]);
    }

    return resInfo;
}
export default useRestaurantMenu;