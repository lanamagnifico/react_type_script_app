import React from "react";

import Product from './Product';

interface Props {
  product: Product;
};

const ProductCard: React.FunctionComponent<Props> = (props) => {
  return (
    <div>
      <span>{props.product.id}</span>
      <br/>
      <span>{props.product.name}</span>
    </div>
  )
};
  
export default ProductCard;