import React from "react";

import Product from './Product';
import { TableRow, WithStyles, withStyles, TableCell, IconButton } from "@material-ui/core";
import styles from './ProductRowStyles';

interface Props extends WithStyles<typeof styles> {
  product: Product;
};

const ProductRow = withStyles(styles)(class extends React.Component<Props> {
  render() {
    const { classes, product } = this.props;
    const productClasses = product.condiment ?
          classes.italic : product.readyToEat ? classes.bold : '';
    return (
      <TableRow>
        <TableCell scope="row">
          <IconButton size={'small'}>
            E
          </IconButton>
          <IconButton size={'small'}>
            D
          </IconButton>
        </TableCell>
        <TableCell align="center" className={productClasses}>{product.name}</TableCell>
        <TableCell align="center">{product.category}</TableCell>
      </TableRow>
    )
  }
});

export default ProductRow;