import React from "react";
import {
    Grid,
    Paper,
    Container
} from "@material-ui/core";

import MealPlan from '../meal-plan/MealPlan';
import ShoppingList from '../shopping-list/ShoppingList';
import * as data from '../../fake-data/shopping';

import useStyles from './HomePageStyles';

interface Props { };

const HomePage: React.FunctionComponent<Props> = (props) => {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.root} >
            <Paper elevation={2}>
                <ShoppingList items={data.Shopping} />
            </Paper>
        </Container>
    )
};

export default HomePage;