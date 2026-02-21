import React, { useContext, useEffect, useMemo } from 'react';
import RestaurantCard from './RestaurantCard';
import { useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import userContext from '../utils/UserContext';

const SWIGGY_API =
  'https://corsproxy.io/?https://namastedev.com/api/v1/listRestaurants';
const CDN_URL =
  'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    console.log('useEffect fired');
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    const restList =
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(restList);
    setRestaurantsList(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredRestaurant(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <>
        <h1>
          Looks like you're offline. Please check your internet connection.
        </h1>
      </>
    );
  }

  const { loggedInUser, setUserName } = useContext(userContext);

  if (restaurantsList.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center">
          <input
            type="text"
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200 sm:max-w-xs"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 active:bg-slate-950"
            onClick={() => {
              console.log(searchText);

              const filteredList = restaurantsList.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase()),
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>
          <div>
            <label>User Name: </label>
            <input
              className="border border-black p-2"
              onChange={(e) => setUserName(e.target.value)}
              value={loggedInUser}
            />
          </div>
        </div>
        <button
          className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 active:bg-slate-100"
          onClick={() => {
            const filteredListOfRestaurants = restaurantsList.filter(
              (restaurant) => Number(restaurant.info?.avgRating) > 4,
            );
            setFilteredRestaurant(filteredListOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id} // CHANGED: key on the outer element
            to={'/restaurants/' + restaurant?.info?.id}
            className="block"
          >
            {/* {restaurant.data.promoted ? <RestaurantCardPromoted resData={restaurant}/> : <RestaurantCard resData={restaurant} />}*/}
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
