import React from 'react';

const CDN_URL =
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1550547660-d9450f859349';

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
    <div className="group h-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <img
        className="h-40 w-full object-cover"
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
      <h3 className="px-4 pt-4 text-base font-semibold leading-snug text-slate-900 line-clamp-1">
        {name}
      </h3>
      <h4 className="px-4 pt-1 text-sm text-slate-600 line-clamp-1">
        {cuisines.join(', ')}
      </h4>
      <div className="px-4 pb-4 pt-3 text-sm text-slate-700">
        <div className="flex items-center justify-between">
          <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
            ⭐ {avgRating ?? '—'}
          </span>
          <span className="text-xs text-slate-500">
            {sla?.deliveryTime} min
          </span>
        </div>

        <div className="mt-2 text-sm font-medium text-slate-800">
          {costForTwo}
        </div>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
    return () => {
        return (
            <div>
                <label>Promoted</label>
                <RestaurantCard />
            </div>
        )
    }
}

export default RestaurantCard;

// Higher Order Component
// input - RestaurantCard => RestaurantCardPromoted