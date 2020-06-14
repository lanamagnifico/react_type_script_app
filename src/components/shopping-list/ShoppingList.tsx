import React from "react";

import { List, Typography } from "@material-ui/core";
import Product from "../../entity/Product";
import ShoppingItem from '../shopping-item/ShoppingItem';


interface Props {
    items: Product[]
};

const ShoppingList: React.FunctionComponent<Props> = (props) => {
    return (<div>
        <Typography variant="h4">
            Shopping List
        </Typography>
        <List>
            {props.items.map((item, i) =>
                <ShoppingItem key={i}
                    product={item} />
            )}
        </List>
    </div>)
};

export default ShoppingList;