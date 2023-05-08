import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
const numberscollection=new NumbersCollection([0,10,5,-1]);
const sorter=new Sorter(numberscollection);
sorter.sort();
console.log(numberscollection.data);