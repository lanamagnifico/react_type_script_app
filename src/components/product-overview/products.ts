import Product from '../product-row/Product';
import uuid from 'uuid';

export const Products: Product[] = [
    {
        id: uuid.v4(),
        name: 'carrot',
        readyToEat: true,
        condiment: false,
        category: 'vegie',
    },
    {
        id: uuid.v4(),
        name: 'brokkoli',
        readyToEat: false,
        condiment: false,
        category: 'vegie',
    },
    {
        id: uuid.v4(),
        name: 'salmon',
        readyToEat: false,
        condiment: false,
        category: 'seafood',
    },
    {
        id: uuid.v4(),
        name: 'salt',
        readyToEat: true,
        condiment: true,
        category: 'spices',
    },
    {
        id: uuid.v4(),
        name: 'ghee',
        readyToEat: true,
        condiment: true,
        category: 'fats',
    }
];