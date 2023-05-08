"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        //This part work for only number[]
        if (this.collection instanceof Array) {
            for (let i = 0; i < length; i++) {
                for (let j = 0; j < length - i - 1; j++) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        this.collection[j] = this.collection[j] + this.collection[j + 1];
                        this.collection[j + 1] = this.collection[j] - this.collection[j + 1];
                        this.collection[j] = this.collection[j] - this.collection[j + 1];
                    }
                }
            }
        }
    }
}
const sorter = new Sorter([0, 10, 5, -1]);
sorter.sort();
console.log(sorter.collection);
