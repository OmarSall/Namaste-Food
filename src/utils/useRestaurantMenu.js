import { useEffect, useState } from 'react';
import { LOCAL_MENUS, LOCAL_RESTAURANTS } from './localData';

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const restaurant = LOCAL_RESTAURANTS.find((res) => res?.info?.id === resId);
    const menu = LOCAL_MENUS[resId] || { itemCards: [] };

    if (!restaurant) {
      setResInfo(null);
      return;
    }

    setResInfo({
      info: restaurant.info,
      itemCards: menu.itemCards,
    });
  }, [resId]);

  return resInfo;
};

export default useRestaurantMenu;
