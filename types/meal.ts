export interface Meal {
  id: string;
  avatar: string;
  name: string;
  price: number;
  image: string;
  restaurant: Restaurant;
  rating: number;
  logo: string;
  open: boolean;
  Price: string
}

export interface  Restaurant {
  logo: string;
  status: "open" | "closed"
}