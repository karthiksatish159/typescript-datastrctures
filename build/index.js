"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const numberscollection = new NumbersCollection_1.NumbersCollection([0, 10, 5, -1]);
const sorter = new Sorter_1.Sorter(numberscollection);
sorter.sort();
console.log(numberscollection.data);
