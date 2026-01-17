import React, {useEffect, useMemo} from 'react';
import RestaurantCard from './RestaurantCard';
import {useState} from 'react';

const SWIGGY_API = 'https://namastedev.com/api/v1/listRestaurants'
const CDN_URL =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const Body = () => {
    const [restaurantsList, setRestaurantsList] = useState([]);

    useEffect(() => {
        console.log("useEffect fired");
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_API);
        const json = await data.json();
        console.log(json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setRestaurantsList(json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    }

    if (restaurantsList.length === 0) {
        return <h1>Loading....</h1>
    }
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="filter">
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
                {restaurantsList.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant?.info?.id}
                        resData={restaurant}/>
                ))}
            </div>
        </div>
    );
};
export default Body;
