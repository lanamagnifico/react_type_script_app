import React from "react";

import { ListItem, 
  ListItemText, 
  ListItemSecondaryAction, 
  IconButton } from "@material-ui/core";
import ClearIcon from '@material-ui/icons/Clear';

import IProduct from "../../entity/Product";

interface Props {
    product: IProduct;
    key: number;
 };

const ShoppingItem: React.FunctionComponent<Props> = (props) => {
    return (<ListItem dense key={props.product.id}>
        <ListItemText primary={props.product.name} secondary={props.product.category} />
        <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <ClearIcon />
              </IconButton>
            </ListItemSecondaryAction>
    </ListItem>)
};

export default ShoppingItem;