import IProduct from "./Product";

interface IMealPlanDay {
    day: Date;
    meals: IProduct[];
}

export default IMealPlanDay;