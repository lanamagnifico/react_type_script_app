import Product from '../entity/Product';
import uuid from 'uuid';

export const Shopping: Product[] = [
    {
        id: uuid.v4(),
        name: 'eggs',
        readyToEat: false,
        condiment: false,
        category: 'eggs',
    },
    {
        id: uuid.v4(),
        name: 'white fish',
        readyToEat: false,
        condiment: false,
        category: 'seafood',
    },
    {
        id: uuid.v4(),
        name: 'salat',
        readyToEat: true,
        condiment: false,
        category: 'vegie',
    },
    {
        id: uuid.v4(),
        name: 'olive oil',
        readyToEat: true,
        condiment: true,
        category: 'fats',
    }
];