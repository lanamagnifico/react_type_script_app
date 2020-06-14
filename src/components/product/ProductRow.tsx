import React from "react";

import Product from '../../entity/Product';
import Grid from '@material-ui/core/Grid';

interface Props {
  product: Product;
};

const ProductRow: React.FunctionComponent<Props> = (props) => {
  return (
    <Grid container justify="flex-start" spacing={1} >
      <Grid item spacing={5}>{props.product.id}</Grid>
      <Grid item spacing={5}>{props.product.name}</Grid>
    </Grid>
  )
};
  
export default ProductRow;