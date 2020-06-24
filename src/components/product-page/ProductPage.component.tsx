import React from "react";

import ProductOverview from '../product-overview/ProductOverview.component';
import * as data from '../../fake-data/products';
import styles from './ProductPage.styles';
import {
    withStyles,
    WithStyles,
    Typography,
    Paper,
    Container
} from "@material-ui/core";

interface IProductPageProps extends WithStyles<typeof styles> {
};

const ProductPage = withStyles(styles)(class extends React.Component<IProductPageProps> {
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