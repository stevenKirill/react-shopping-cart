import { IProduct } from '../interfaces/Cart';

interface IService {
    baseUrl: string;
    getProducts: () => Promise<IProduct[]>
};

class Services implements IService {
    baseUrl = '';

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    getProducts =  async () => {
        const response = await fetch(`${this.baseUrl}/products`);
        return await response.json();
    };

};

const services = new Services('https://fakestoreapi.com/');

export default services;