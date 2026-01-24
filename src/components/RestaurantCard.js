import React from 'react';

const CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1550547660-d9450f859349'

const RestaurantCard = ({ resData }) => {
  const info = resData?.info || {};
  const {
    name,
    cuisines = [],
    avgRating,
    costForTwo,
    sla,
    cloudinaryImageId,
  } = info;

  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        alt={name || 'restaurant-logo'}
        src={
          cloudinaryImageId
            ? CDN_URL + encodeURI(cloudinaryImageId)
            : FALLBACK_IMAGE
        }
        onError={(e) => {
            // zabezpieczenie przed nieskończoną pętlą, gdyby fallback też nie zadziałał
            e.currentTarget.onerror = null;
            e.currentTarget.src = FALLBACK_IMAGE;
        }}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  );
};
export default RestaurantCard;
