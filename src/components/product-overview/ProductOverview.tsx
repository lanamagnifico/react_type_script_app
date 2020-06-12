import React from "react";

import Product from '../product/Product';
import ProductCard from '../product/ProductCard';

interface Props {
    productList: Product[];
};

const ProductOverview: React.FunctionComponent<Props> = (props) => {
    return (
        <div>{props.productList.map(item => 
            <ProductCard product = {item} />
        )}</div>
    )
};
  
  export default ProductOverview;

