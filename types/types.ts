export interface NavMenuLinks {
  Links: string[];
}

export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  reviews?: [
    {
      rate: number ;
      comment: string;
    },
  ];
  rating: {
    rate: number;
    count: number;
  };
}
