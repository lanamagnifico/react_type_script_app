import React from "react";

import { Grid, Typography } from "@material-ui/core";

import { MealPlanWeek as data } from '../../fake-data/meal-plans';
import MealPlanDayList from "../meal-plan-day/MealPlanDayList";

interface Props { };

const MealPlan: React.FunctionComponent<Props> = (props) => {
    return (<div>
        <Typography variant="h4">
            Meal plan
        </Typography>
        <Grid container spacing={3}>
            <Grid item>
                <MealPlanDayList mealPlanDay={data[0]} />
            </Grid>
            <Grid item>
                <MealPlanDayList mealPlanDay={data[1]} />
            </Grid>
            <Grid item>
                <MealPlanDayList mealPlanDay={data[2]} />
            </Grid>
            <Grid item>
                <MealPlanDayList mealPlanDay={data[3]} />
            </Grid>
            <Grid item>
                <MealPlanDayList mealPlanDay={data[4]} />
            </Grid>
            <Grid item>
                <MealPlanDayList mealPlanDay={data[5]} />
            </Grid>
            <Grid item>
                <MealPlanDayList mealPlanDay={data[6]} />
            </Grid>
        </Grid>
    </div>)
};

export default MealPlan;