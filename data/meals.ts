import { Meal } from "@/types/meal";

export const featuredMeals: Meal[] = [
  {
    id: "1",
    name: "Bow Lasagna",
    price: 2.99,
    image: "/meals/bow-lasagna.jpg",
    restaurant: {
      name: "Friendly's",
      logo: "/restaurants/friendlys-logo.png",
    },
    rating: 4.6,
    status: "closed",
  },
  {
    id: "2",
    name: "Mixed Avocado Sm",
    price: 5.99,
    image: "/meals/mixed-avocado.jpg",
    restaurant: {
      name: "Pizza Pino Restaurant",
      logo: "/restaurants/pizza-pino-logo.png",
    },
    rating: 4.0,
    status: "closed",
  },
  {
    id: "3",
    name: "Pancake",
    price: 3.99,
    image: "/meals/pancake.jpg",
    restaurant: {
      name: "Dunkin' Donuts",
      logo: "/restaurants/dunkin-logo.png",
    },
    rating: 5.0,
    status: "open",
  },
  {
    id: "4",
    name: "Cupcake",
    price: 1.99,
    image: "/meals/cupcake.jpg",
    restaurant: {
      name: "Subway",
      logo: "/restaurants/subway-logo.png",
    },
    rating: 5.0,
    status: "open",
  },
  {
    id: "5",
    name: "Creamy Stake",
    price: 12.99,
    image: "/meals/creamy-stake.jpg",
    restaurant: {
      name: "Ruby Tuesday",
      logo: "/restaurants/ruby-tuesday-logo.png",
    },
    rating: 4.5,
    status: "open",
  },
  {
    id: "6",
    name: "Stake with Potatos",
    price: 15.99,
    image: "/meals/stake-potatos.jpg",
    restaurant: {
      name: "KFC",
      logo: "/restaurants/kfc-logo.png",
    },
    rating: 5.0,
    status: "open",
  },
  {
    id: "7",
    name: "Indian Spicy Soup",
    price: 9.99,
    image: "/meals/indian-soup.jpg",
    restaurant: {
      name: "Red Fork",
      logo: "/restaurants/red-fork-logo.png",
    },
    rating: 4.5,
    status: "open",
  },
  {
    id: "8",
    name: "Stake Omlet",
    price: 11.99,
    image: "/meals/stake-omlet.jpg",
    restaurant: {
      name: "Taco Bell",
      logo: "/restaurants/taco-bell-logo.png",
    },
    rating: 4.9,
    status: "open",
  },
];
