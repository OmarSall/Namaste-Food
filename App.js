import React from 'react';
import ReactDOM from 'react-dom/client';

/*
Header:
 - Logo
 - Nav Items
Body:
 - Search
 - RestaurantContainer
  - RestaurantCard
    - Image
    - Name
    - Star Rating
    - Cuisine
Footer:
 - Copyright
 - Links
 - Address
 - Contact
 */

const resObj = {
    type: 'restaurant',
    data: {
        name: 'KFC',
        cuisines: ['Burgers','Biryani','American','Snacks', 'Fast Food'],
        avgRating: 3.8,
        costForTwo: 40000,
        deliveryTime: 36,
    }
}

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' alt='logo_burger'
                     src='https://img.freepik.com/darmowe-wektory/gradientowy-szablon-logo-grilla_23-2149001837.jpg?t=st=1767806546~exp=1767810146~hmac=67ea20cded60146ba213590a0e8791bcfe0045628b4e3b6232b4aed8736b2db2&w=1480'/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.data;

    return (
        <div className='restaurant-card'>
            <img
                className='restaurant-logo'
                alt='restaurant-logo'
                src='https://media.istockphoto.com/id/476541008/pl/zdj%C4%99cie/ry%C5%BC-z-szafranem-z-warzyw-i-natka-kolendry.jpg?s=1024x1024&w=is&k=20&c=_eo5FqQ70crGM8dtQjvZYR1iLGQ5QHn5LaaxtP3_a7U='
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating}</h4>
            <h4>Euro {costForTwo / 100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
}

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='restaurant-container'>
                <RestaurantCard resData={resObj}
                />
            </div>
        </div>
    );
}

const AppLayout = () => {
    return (
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>);