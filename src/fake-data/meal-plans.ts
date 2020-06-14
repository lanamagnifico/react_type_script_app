import Product from '../entity/Product';
import uuid from 'uuid';
import MealPlanDay from '../entity/MealPlanDay';

export const MealPlanWeek: MealPlanDay[] = [{
    day: new Date(2020,5,1),
    meals: [
        {
            id: uuid.v4(),
            name: 'eggs'
        },
        {
            id: uuid.v4(),
            name: 'white fish'
        },
        {
            id: uuid.v4(),
            name: 'salat'
        },
        {
            id: uuid.v4(),
            name: 'olive oil'
        }
    ]
}, {
    day: new Date(2020,5,2),
    meals: [
        {
            id: uuid.v4(),
            name: 'eggs'
        },
        {
            id: uuid.v4(),
            name: 'white fish'
        },
        {
            id: uuid.v4(),
            name: 'salat'
        },
        {
            id: uuid.v4(),
            name: 'olive oil'
        }
    ]
}, {
    day: new Date(2020,5,3),
    meals: [
        {
            id: uuid.v4(),
            name: 'eggs'
        },
        {
            id: uuid.v4(),
            name: 'white fish'
        },
        {
            id: uuid.v4(),
            name: 'salat'
        },
        {
            id: uuid.v4(),
            name: 'olive oil'
        }
    ]
}, {
    day: new Date(2020,5,4),
    meals: [
        {
            id: uuid.v4(),
            name: 'eggs'
        },
        {
            id: uuid.v4(),
            name: 'white fish'
        },
        {
            id: uuid.v4(),
            name: 'salat'
        },
        {
            id: uuid.v4(),
            name: 'olive oil'
        }
    ]
}, {
    day: new Date(2020,5,5),
    meals: [
        {
            id: uuid.v4(),
            name: 'eggs'
        },
        {
            id: uuid.v4(),
            name: 'white fish'
        },
        {
            id: uuid.v4(),
            name: 'salat'
        },
        {
            id: uuid.v4(),
            name: 'olive oil'
        }
    ]
}, {
    day: new Date(2020,5,6),
    meals: [
        {
            id: uuid.v4(),
            name: 'eggs'
        },
        {
            id: uuid.v4(),
            name: 'white fish'
        },
        {
            id: uuid.v4(),
            name: 'salat'
        },
        {
            id: uuid.v4(),
            name: 'olive oil'
        }
    ]
}, {
    day: new Date(2020,5,7),
    meals: [
        {
            id: uuid.v4(),
            name: 'eggs'
        },
        {
            id: uuid.v4(),
            name: 'white fish'
        },
        {
            id: uuid.v4(),
            name: 'salat'
        },
        {
            id: uuid.v4(),
            name: 'olive oil'
        }
    ]
}];
