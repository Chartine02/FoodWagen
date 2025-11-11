export interface Meal {
  id: string;
  name: string;
  price: number;
  image: string;
  restaurant: {
    name: string;
    logo: string;
  };
  rating: number;
  status: "open" | "closed";
}
