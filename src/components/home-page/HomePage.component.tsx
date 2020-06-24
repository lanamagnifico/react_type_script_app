import React from "react";
import {
    Paper,
    Container,
    AppBar,
    Toolbar,
    List,
    ListItem,
    Link
} from "@material-ui/core";

import ShoppingList from '../shopping-list/ShoppingList.component';
import * as data from '../../fake-data/shopping';

import useStyles from './HomePage.styles';

interface IHomePageProps { };

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.root} aria-label="home">
            <AppBar position="static">
                <Toolbar>
                    <List>
                        <ListItem button>
                            <Link color='textPrimary'>Home</Link>
                        </ListItem>
                        <ListItem button>
                            <Link color='textPrimary'>Products</Link>
                        </ListItem>
                        <ListItem button>
                            <Link color='textPrimary'>Meal plan</Link>
                        </ListItem>
                    </List>
                </Toolbar>
            </AppBar>
            <Paper elevation={2}>
                <ShoppingList items={data.shopping} />
            </Paper>
        </Container>
    )
};

export default HomePage;