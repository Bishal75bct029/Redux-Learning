import { Chance } from "chance";

const chance = new Chance();

const fakeData = () => chance.name({middle:true});

export default fakeData;