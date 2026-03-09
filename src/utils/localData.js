export const LOCAL_RESTAURANTS = [
  {
    info: {
      id: '101',
      name: 'KFC',
      cuisines: ['Burgers', 'Fast Food'],
      avgRating: 3.8,
      costForTwo: '₹400 for two',
      sla: { deliveryTime: 36 },
      cloudinaryImageId: '',
    },
  },
  {
    info: {
      id: '102',
      name: 'Burger King',
      cuisines: ['Burgers', 'American'],
      avgRating: 4.1,
      costForTwo: '₹450 for two',
      sla: { deliveryTime: 30 },
      cloudinaryImageId: '',
    },
  },
  {
    info: {
      id: '103',
      name: "Domino's Pizza",
      cuisines: ['Pizza', 'Italian'],
      avgRating: 4.2,
      costForTwo: '₹500 for two',
      sla: { deliveryTime: 32 },
      cloudinaryImageId: '',
    },
  },
  {
    info: {
      id: '104',
      name: 'Biryani House',
      cuisines: ['Indian', 'Biryani'],
      avgRating: 4.4,
      costForTwo: '₹600 for two',
      sla: { deliveryTime: 40 },
      cloudinaryImageId: '',
    },
  },
  {
    info: {
      id: '105',
      name: 'Sushi Zen',
      cuisines: ['Japanese', 'Sushi'],
      avgRating: 4.6,
      costForTwo: '₹800 for two',
      sla: { deliveryTime: 45 },
      cloudinaryImageId: '',
    },
  },
  {
    info: {
      id: '106',
      name: 'Green Bowl',
      cuisines: ['Healthy', 'Salads'],
      avgRating: 4.5,
      costForTwo: '₹450 for two',
      sla: { deliveryTime: 25 },
      cloudinaryImageId: '',
    },
  },
];

const baseItems = [
  {
    card: {
      info: {
        id: '1',
        name: 'Classic Burger',
        description: 'Soczysty burger wołowy z serem i świeżymi warzywami.',
        price: 24900,
      },
    },
  },
  {
    card: {
      info: {
        id: '2',
        name: 'Fries',
        description: 'Chrupiące frytki z solą morską.',
        price: 9900,
      },
    },
  },
  {
    card: {
      info: {
        id: '3',
        name: 'Lemoniada',
        description: 'Domowa lemoniada cytrynowa.',
        price: 7900,
      },
    },
  },
];

export const LOCAL_MENUS = {
  101: { itemCards: baseItems },
  102: { itemCards: baseItems },
  103: { itemCards: baseItems },
  104: { itemCards: baseItems },
  105: { itemCards: baseItems },
  106: { itemCards: baseItems },
};
