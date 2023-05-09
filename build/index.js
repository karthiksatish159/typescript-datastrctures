"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const LinkedListCollection_1 = require("./LinkedListCollection");
// const numberscollection=new NumbersCollection([0,10,5,-1]);
// const characterscollection=new CharacterCollection("XaaZbB");
// const numbers_sorter=new Sorter(numberscollection);
// const characters_sorter=new Sorter(characterscollection);
// numbers_sorter.sort();
// characters_sorter.sort();
// console.log(numberscollection.data);
// console.log(characterscollection.data);
const linkedlist = new LinkedListCollection_1.LinkedList();
const arr = [0, 10, -5, 12, -9];
for (let i of arr) {
    linkedlist.add(i);
}
const sortLinkedList = new Sorter_1.Sorter(linkedlist);
sortLinkedList.sort();
linkedlist.print();
