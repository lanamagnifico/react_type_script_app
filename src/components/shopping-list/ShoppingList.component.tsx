import React from "react";

import {
    List,
    Typography
} from "@material-ui/core";
import IProduct from "../../entity/Product";
import ShoppingItem from '../shopping-item/ShoppingItem.component';


interface Props {
    items: IProduct[]
};

const ShoppingList: React.FunctionComponent<Props> = (props) => {
    return (<div>
        <Typography variant="h4">
            Shopping List
        </Typography>
        <List aria-label={'shopping-list'}>
            {props.items.map((item, i) =>
                <ShoppingItem key={i}
                    product={item} />
            )}
        </List>
    </div>)
};

export default ShoppingList;