import React, {useMemo} from 'react';
import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
import { useState } from 'react';

const Body = () => {
  const arr = useState(resList);
  const [restaurantsList, setRestaurantsList] = arr;



  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredListOfRestaurants = resList.filter(
              (restaurant) => restaurant.data.avgRating > 4,
            );
            setRestaurantsList(filteredListOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {restaurantsList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.name} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
