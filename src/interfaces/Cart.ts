interface IRating {
    rate: number;
    count: number;
};

export interface ICart {
    category: string;
    description: string;
    id: number;
    image: string;
    rating: IRating;
    title: string;
};