import React from "react";

import { List, ListItem, ListItemText, ListItemIcon, Checkbox, Typography } from "@material-ui/core";

import MealPlanDay from "../../entity/MealPlanDay";
import Product from "../../entity/Product";

interface Props {
    mealPlanDay: MealPlanDay;
};

const MealPlanDayList: React.FunctionComponent<Props> = (props) => {
    return (<div>
        <Typography variant="subtitle1">
            {props.mealPlanDay.day.toLocaleString('en-us', { weekday: 'long' })}
        </Typography>
        <List dense={true}>
            {props.mealPlanDay.meals.map((meal: Product, i: number) =>
                <ListItem dense key={i}>
                    {/* <ListItemIcon>
                         <Checkbox
                            edge="start"
                            checked={true}
                            tabIndex={-1}
                            disableRipple
                        /> 
                    </ListItemIcon> */}
                    <ListItemText primary={meal.name} secondary={meal.name} />
                </ListItem>
            )}
        </List>
    </div>
    )
};

export default MealPlanDayList;