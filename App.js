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

const resList = [
    {
        data: {
            name: "KFC",
            cuisines: ["Burgers", "Fast Food"],
            avgRating: 3.8,
            costForTwo: 40000,
            deliveryTime: 36,
            image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086"
        }
    },
    {
        data: {
            name: "Burger King",
            cuisines: ["Burgers", "American"],
            avgRating: 4.1,
            costForTwo: 45000,
            deliveryTime: 30,
            image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
        }
    },
    {
        data: {
            name: "McDonald's",
            cuisines: ["Burgers", "Fast Food"],
            avgRating: 4.0,
            costForTwo: 42000,
            deliveryTime: 28,
            image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
        }
    },
    {
        data: {
            name: "Domino's Pizza",
            cuisines: ["Pizza", "Italian"],
            avgRating: 4.2,
            costForTwo: 50000,
            deliveryTime: 32,
            image: "https://images.unsplash.com/photo-1548365328-9f547fb09510"
        }
    },
    {
        data: {
            name: "Pizza Hut",
            cuisines: ["Pizza", "Italian"],
            avgRating: 3.9,
            costForTwo: 48000,
            deliveryTime: 35,
            image: "https://images.unsplash.com/photo-1601924638867-3ec62f7e5f81"
        }
    },
    {
        data: {
            name: "Subway",
            cuisines: ["Sandwiches", "Healthy"],
            avgRating: 4.0,
            costForTwo: 35000,
            deliveryTime: 25,
            image: "https://images.unsplash.com/photo-1550317138-10000687a72b"
        }
    },
    {
        data: {
            name: "Starbucks",
            cuisines: ["Coffee", "Beverages"],
            avgRating: 4.3,
            costForTwo: 30000,
            deliveryTime: 20,
            image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
        }
    },
    {
        data: {
            name: "Cafe Nero",
            cuisines: ["Coffee", "Snacks"],
            avgRating: 4.1,
            costForTwo: 28000,
            deliveryTime: 22,
            image: "https://images.unsplash.com/photo-1511920170033-f8396924c348"
        }
    },
    {
        data: {
            name: "Biryani House",
            cuisines: ["Indian", "Biryani"],
            avgRating: 4.4,
            costForTwo: 60000,
            deliveryTime: 40,
            image: "https://images.unsplash.com/photo-1600628422019-98b0b09b4b25"
        }
    },
    {
        data: {
            name: "Spice Route",
            cuisines: ["Indian", "Curry"],
            avgRating: 4.2,
            costForTwo: 55000,
            deliveryTime: 38,
            image: "https://images.unsplash.com/photo-1543353071-873f17a7a088"
        }
    },
    {
        data: {
            name: "Sushi Zen",
            cuisines: ["Japanese", "Sushi"],
            avgRating: 4.6,
            costForTwo: 80000,
            deliveryTime: 45,
            image: "https://images.unsplash.com/photo-1553621042-f6e147245754"
        }
    },
    {
        data: {
            name: "Tokyo Bowl",
            cuisines: ["Japanese", "Asian"],
            avgRating: 4.3,
            costForTwo: 65000,
            deliveryTime: 34,
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
        }
    },
    {
        data: {
            name: "Wok Express",
            cuisines: ["Chinese", "Asian"],
            avgRating: 4.0,
            costForTwo: 50000,
            deliveryTime: 33,
            image: "https://images.unsplash.com/photo-1585032226651-759b368d7246"
        }
    },
    {
        data: {
            name: "Dragon Palace",
            cuisines: ["Chinese", "Noodles"],
            avgRating: 4.1,
            costForTwo: 52000,
            deliveryTime: 36,
            image: "https://images.unsplash.com/photo-1544025162-d76694265947"
        }
    },
    {
        data: {
            name: "Pasta Basta",
            cuisines: ["Italian", "Pasta"],
            avgRating: 4.2,
            costForTwo: 55000,
            deliveryTime: 30,
            image: "https://images.unsplash.com/photo-1525755662778-989d0524087e"
        }
    },
    {
        data: {
            name: "La Trattoria",
            cuisines: ["Italian", "Pizza"],
            avgRating: 4.4,
            costForTwo: 60000,
            deliveryTime: 34,
            image: "https://images.unsplash.com/photo-1521389508051-d7ffb5dc8f8f"
        }
    },
    {
        data: {
            name: "Green Bowl",
            cuisines: ["Healthy", "Salads"],
            avgRating: 4.5,
            costForTwo: 45000,
            deliveryTime: 25,
            image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
        }
    },
    {
        data: {
            name: "Vegan Delight",
            cuisines: ["Vegan", "Healthy"],
            avgRating: 4.6,
            costForTwo: 48000,
            deliveryTime: 27,
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
        }
    },
    {
        data: {
            name: "Taco Fiesta",
            cuisines: ["Mexican", "Street Food"],
            avgRating: 4.2,
            costForTwo: 42000,
            deliveryTime: 29,
            image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
        }
    },
    {
        data: {
            name: "Burrito Bros",
            cuisines: ["Mexican", "Fast Food"],
            avgRating: 4.1,
            costForTwo: 43000,
            deliveryTime: 31,
            image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f"
        }
    },
    {
        data: {
            name: "BBQ Nation",
            cuisines: ["BBQ", "Grill"],
            avgRating: 4.3,
            costForTwo: 70000,
            deliveryTime: 45,
            image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1"
        }
    },
    {
        data: {
            name: "Smoke House",
            cuisines: ["BBQ", "American"],
            avgRating: 4.2,
            costForTwo: 68000,
            deliveryTime: 42,
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
        }
    },
    {
        data: {
            name: "Sea Breeze",
            cuisines: ["Seafood", "Grill"],
            avgRating: 4.4,
            costForTwo: 75000,
            deliveryTime: 40,
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
        }
    },
    {
        data: {
            name: "Fish & Chips Co.",
            cuisines: ["Seafood", "Fast Food"],
            avgRating: 4.0,
            costForTwo: 55000,
            deliveryTime: 35,
            image: "https://images.unsplash.com/photo-1604908177522-429c22c7a70b"
        }
    },
    {
        data: {
            name: "Dessert Hub",
            cuisines: ["Desserts", "Bakery"],
            avgRating: 4.5,
            costForTwo: 30000,
            deliveryTime: 20,
            image: "https://images.unsplash.com/photo-1505250469679-203ad9ced0cb"
        }
    },
    {
        data: {
            name: "Sweet Tooth",
            cuisines: ["Desserts", "Cakes"],
            avgRating: 4.6,
            costForTwo: 32000,
            deliveryTime: 22,
            image: "https://images.unsplash.com/photo-1551024601-bec78aea704b"
        }
    },
    {
        data: {
            name: "Ice Cream Bar",
            cuisines: ["Ice Cream", "Desserts"],
            avgRating: 4.7,
            costForTwo: 25000,
            deliveryTime: 18,
            image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f"
        }
    },
    {
        data: {
            name: "Coffee Corner",
            cuisines: ["Coffee", "Snacks"],
            avgRating: 4.3,
            costForTwo: 27000,
            deliveryTime: 19,
            image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
        }
    },
    {
        data: {
            name: "Urban Cafe",
            cuisines: ["Cafe", "Continental"],
            avgRating: 4.1,
            costForTwo: 35000,
            deliveryTime: 26,
            image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
        }
    }
];


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
    const {resData} = props;
    const {name, cuisines, avgRating, costForTwo, deliveryTime, image} = resData?.data;

    return (
        <div className='restaurant-card'>
            <img
                className='restaurant-logo'
                alt='restaurant-logo'
                src={image}
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
                {resList.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.name}
                                    resData={restaurant}
                    />
                ))}
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