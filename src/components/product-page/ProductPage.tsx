import React from "react";

import ProductOverview from '../product-overview/ProductOverview';
import * as data from '../../fake-data/products';

interface Props {
};

const ProductPage: React.FunctionComponent<Props> = () => {
    return (
        <div>
            <ProductOverview productList={data.Products} />
        </div>
    )
};

export default ProductPage;