import React from "react";

import Product from '../product-row/Product';
import ProductRow from '../product-row/ProductRow';
import {
    TableContainer, Table, TableHead, TableRow,
    TableCell, TableBody, Paper, Theme, withStyles, WithStyles
} from "@material-ui/core";
import styles from './ProductOverviewStyles';

interface Props extends WithStyles<typeof styles> {
    productList: Product[];
};

const ProductOverview = withStyles(styles)(class extends React.Component<Props> {
    render() {
        const { classes, productList } = this.props;
        return (
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table className={classes.table} size="small" aria-label="products table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Actions</TableCell>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Category</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {productList.map((row: Product) => (
                                <ProductRow key={row.id} product={row} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        )
    }
});

export default ProductOverview;

