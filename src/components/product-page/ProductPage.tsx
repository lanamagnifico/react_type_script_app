import React from "react";

import ProductOverview from '../product-overview/ProductOverview';
import * as data from '../../fake-data/products';
import styles from './ProductPageStyles';
import { withStyles, WithStyles, Typography, Paper, Container } from "@material-ui/core";

interface Props extends WithStyles<typeof styles> {
};

const ProductPage = withStyles(styles)(class extends React.Component<Props> {
    render() {
        return (
            <Container maxWidth="lg">
                <Paper>
                    <Typography variant="h4">
                        Products
                    </Typography>
                    <ProductOverview productList={data.Products} />
                </Paper>
            </Container>

        )
    }
});

export default ProductPage;