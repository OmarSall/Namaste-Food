import React, {useEffect, useMemo} from 'react';
import RestaurantCard from './RestaurantCard';
import {useState} from 'react';
import Shimmer from "./Shimmer";

const SWIGGY_API = 'https://corsproxy.io/?https://namastedev.com/api/v1/listRestaurants';
const CDN_URL =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const Body = () => {
    const [restaurantsList, setRestaurantsList] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    useEffect(() => {
        console.log("useEffect fired");
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_API);
        const json = await data.json();
        const restList = json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(restList);
        setRestaurantsList(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if (restaurantsList.length === 0) {
        return <Shimmer />
    }
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className='search-box'
                        placeholder="Search..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                    onClick={() => {
                        console.log(searchText);

                        const filteredList = restaurantsList.filter(
                            (restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(filteredList);
                    }}
                    >
                        Search
                    </button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredListOfRestaurants = restaurantsList.filter(
                            (restaurant) => Number(restaurant.info?.avgRating) > 4,
                        );
                        setRestaurantsList(filteredListOfRestaurants);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="restaurant-container">
                {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant?.info?.id}
                        resData={restaurant}/>
                ))}
            </div>
        </div>
    );
};
export default Body;
