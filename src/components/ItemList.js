import {useDispatch} from "react-redux";
import {addItem} from "../utils/cartSlice";

const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItem = () => {
        // dispatch an action
        dispatch(addItem)
    }

    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id}>
                    <div>{item.card.info.name}</div>
                    <div>
                        <button onClick={() => handleAddItem(item)}>
                            Add +
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default ItemList;