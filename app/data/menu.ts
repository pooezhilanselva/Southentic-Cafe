export const menu = {
  breakfast: {
    title: "Breakfast",
    time: "7:30 AM – 1:00 PM",
    items: [
      { name: "Idly", price: 40 },
      { name: "Vada (1 pc)", price: 20 },
      { name: "Plain Dosa", price: 50 },
      { name: "Ghee Roast Dosa", price: 70 },
      { name: "Masala Dosa", price: 60 },
      { name: "Podi Masala Dosa", price: 80 },
      { name: "Onion Dosa", price: 80 },
      { name: "Set Dosa", price: 70 },
      { name: "Set Masala Dosa", price: 80 },
      { name: "Rava Dosa", price: 70 },
      { name: "Rava Masala Dosa", price: 80 },
    ],
  },

  chinese: {
    title: "Chinese",
    time: "3:00 PM – 11:00 PM",
    sections: {
      Starters: [
        { name: "Gobi 65", price: 90 },
        { name: "Paneer 65", price: 110 },
        { name: "Chilli Potato", price: 80 },
        { name: "Chilli Paneer", price: 110 },
        { name: "Chilli Mushroom", price: 110 },
        { name: "Honey Chilli Paneer / Potato", price: 110 },
        { name: "Mushroom Manchurian Dry", price: 110 },
        { name: "Paneer Manchurian Dry", price: 110 },
        { name: "Gobi Manchurian Dry", price: 90 },
        { name: "Veg Manchurian Dry", price: 90 },
        { name: "Mushroom Manchurian Gravy", price: 120 },
        { name: "Paneer Manchurian Gravy", price: 120 },
        { name: "Gobi Manchurian Gravy", price: 100 },
        { name: "Veg Manchurian Gravy", price: 100 },
      ],
      "Fried Rice": [
        { name: "Veg Fried Rice", price: 80 },
        { name: "Paneer Fried Rice", price: 100 },
        { name: "Mushroom Fried Rice", price: 90 },
        { name: "Gobi Fried Rice", price: 90 },
        { name: "Veg Schezwan Fried Rice", price: 90 },
        { name: "Paneer Schezwan Fried Rice", price: 110 },
        { name: "Mushroom Schezwan Fried Rice", price: 100 },
      ],
      Noodles: [
        { name: "Veg Noodles", price: 80 },
        { name: "Paneer Noodles", price: 110 },
        { name: "Singapore Noodles", price: 140 },
        { name: "Hakka Noodles", price: 140 },
        { name: "Chilli Garlic Noodles", price: 90 },
        { name: "Veg Schezwan Noodles", price: 90 },
        { name: "Paneer Schezwan Noodles", price: 120 },
        { name: "Gobi Noodles", price: 80 },
        { name: "Mushroom Noodles", price: 90 },
        { name: "Butter Paneer Noodles", price: 140 },
      ],
    },
  },

  momos: {
    title: "Momos",
    note: "Soup + 8 pieces included in every order",
    items: [
      { name: "Steam Veg Momo", price: 100 },
      { name: "Steam Paneer Momo", price: 120 },
      { name: "Steam Cheese Momo", price: 140 },
      { name: "Fried Veg Momo", price: 120 },
      { name: "Fried Paneer Momo", price: 140 },
      { name: "Fried Cheese Momo", price: 160 },
    ],
  },
  
  varietyDosa: {
    title: "99-Variety Dosa",
    note: "Choose from a variety of 99 different dosas!",
    items: [
      { name: "Cheese Dosa", price: 100 },
    ],
  }
};
