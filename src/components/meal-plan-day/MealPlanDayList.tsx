import React from "react";

import {
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    Typography
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

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
                    <ListItemText primary={meal.name} secondary={meal.name} />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            )}
        </List>
    </div>
    )
};

export default MealPlanDayList;