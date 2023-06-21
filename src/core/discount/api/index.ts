export type Discount = {
  category: string;
  id: string;
  items: {
    title: string;
    img: string;
    price: number;
  }[];
};
