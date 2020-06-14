import Product from '../entity/Product';
import uuid from 'uuid';

export const Shopping: Product[] = [
    {
        id: uuid.v4(),
        name: 'eggs'
    },
    {
        id: uuid.v4(),
        name: 'white fish'
    },
    {
        id: uuid.v4(),
        name: 'salat'
    },
    {
        id: uuid.v4(),
        name: 'olive oil'
    }
];