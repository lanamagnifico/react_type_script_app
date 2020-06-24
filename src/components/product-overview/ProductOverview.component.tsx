import React from "react";

import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    withStyles,
    WithStyles
} from "@material-ui/core";
import styles from './ProductOverview.styles';
import IProduct from '../../entity/Product';
import ProductRow from '../product-row/ProductRow.component';

interface Props extends WithStyles<typeof styles> {
    productList: IProduct[];
};

const ProductOverview = withStyles(styles)(class extends React.Component<Props> {
    render() {
        const { classes, productList } = this.props;
        return (
            <TableContainer className={classes.container}>
                <Table className={classes.table} size="small" aria-label="products table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Actions</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Category</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody aria-label="products table body">
                        {productList.map((row: IProduct) => (
                            <ProductRow key={row.id} product={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
});

export default ProductOverview;

