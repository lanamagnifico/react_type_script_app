import React from "react";

import {
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    Typography
} from "@material-ui/core";
import ClearIcon from '@material-ui/icons/Clear';

import IMealPlanDay from "../../entity/MealPlanDay";
import IProduct from "../../entity/Product";

interface Props {
    mealPlanDay: IMealPlanDay;
};

const MealPlanDayList: React.FunctionComponent<Props> = (props) => {
    return (<div>
        <Typography variant="subtitle1">
            {props.mealPlanDay.day.toLocaleString('en-us', { weekday: 'long' })}
        </Typography>
        <List dense={true} aria-label="meal-pan-of-the-day">
            {props.mealPlanDay.meals.map((meal: IProduct, i: number) =>
                <ListItem dense key={i}>
                    <ListItemText primary={meal.name} secondary={meal.name} />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                            <ClearIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            )}
        </List>
    </div>
    )
};

export default MealPlanDayList;