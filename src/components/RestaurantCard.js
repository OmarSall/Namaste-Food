import React from 'react';

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, deliveryTime, image } =
    resData?.data;

  return (
    <div className="restaurant-card">
      <img className="restaurant-logo" alt="restaurant-logo" src={image} />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating}</h4>
      <h4>Euro {costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};
export default RestaurantCard;
