import {useState} from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    const handleClick = () => {
        setShowIndex();
    }
  return (
    <div>
      {/* Header */}
      <div className="cursor-pointer" onClick={handleClick}>
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <span>Down arrow</span>
      </div>
      {/* Accordion body */}
        {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};
