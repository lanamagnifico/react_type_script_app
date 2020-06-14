import React from "react";

import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

import Product from "../../entity/Product";

interface Props {
    product: Product;
    key: number;
 };

const ShoppingItem: React.FunctionComponent<Props> = (props) => {
    return (<ListItem dense key={props.product.id}>
        <ListItemText primary={props.product.name} secondary={props.product.id} />
        <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
    </ListItem>)
};

export default ShoppingItem;