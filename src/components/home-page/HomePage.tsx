import React from "react";
import { Grid, Paper, Container } from "@material-ui/core";

import MealPlan from '../meal-plan/MealPlan';
import ShoppingList from '../shopping-list/ShoppingList';

import * as data from '../../fake-data/shopping';

interface Props { };

const HomePage: React.FunctionComponent<Props> = (props) => {
    return (
        <Grid container direction="row" justify="center" alignItems="stretch" spacing={5}>
            <Grid item key='sshoppingList' >
                <Paper elevation={2}>
                    <ShoppingList items={data.Shopping} />
                </Paper>
            </Grid>
            <Grid item key='mealPlan' >
                <Paper elevation={2}>
                    <MealPlan />
                </Paper>
            </Grid>
        </Grid>
    )
};

export default HomePage;