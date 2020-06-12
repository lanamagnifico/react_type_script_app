import Product from '../product/Product';
import uuid from 'uuid';

export const Products: Product[] = [
    {
        id: uuid.v4(),
        name: 'carrot'
    },
    {
        id: uuid.v4(),
        name: 'brokkoli'
    },
    {
        id: uuid.v4(),
        name: 'salmon'
    }
];