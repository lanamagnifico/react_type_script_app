import React from "react";

import IProduct from '../../entity/Product';
import {
  TableRow,
  WithStyles,
  withStyles,
  TableCell,
  IconButton,
  Checkbox
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit'; 
import styles from './ProductRow.styles';

interface Props extends WithStyles<typeof styles> {
  product: IProduct;
};

const ProductRow = withStyles(styles)(class extends React.Component<Props> {
  render() {
    const { classes, product } = this.props;
    const productClasses = product.condiment ?
          classes.italic : product.readyToEat ? classes.bold : '';
    return (
      <TableRow>
        <TableCell scope="row">
          <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton>
             <DeleteIcon />
          </IconButton>
          <Checkbox
                            edge="start"
                            checked={true}
                            tabIndex={-1}
                            disableRipple
                        />
        </TableCell>
        <TableCell align="center" className={productClasses}>{product.name}</TableCell>
        <TableCell align="center">{product.category}</TableCell>
      </TableRow>
    )
  }
});

export default ProductRow;