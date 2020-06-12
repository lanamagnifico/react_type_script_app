import React from "react";

import Product from '../product/Product';
import ProductRow from '../product/ProductRow';
import Grid from "@material-ui/core/Grid";

interface Props {
    productList: Product[];
};

const ProductOverview: React.FunctionComponent<Props> = (props) => {
    return (
        <div>
            <Grid container justify="flex-start" spacing={1} >
                <Grid item spacing={5}>ID</Grid>
                <Grid item spacing={5}>Name</Grid>
            </Grid>
            {props.productList.map(item =>
                <ProductRow product={item} />
            )}
        </div>
    )
};
  
  export default ProductOverview;

