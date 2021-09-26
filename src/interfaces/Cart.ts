interface IRating {
    rate: number;
    count: number;
};

export interface IProduct {
    category: string;
    description: string;
    id: number;
    image: string;
    rating: IRating;
    title: string;
    price: number;
    amount: number;
};