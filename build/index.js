"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedListCollection_1 = require("./LinkedListCollection");
const numberscollection = new NumbersCollection_1.NumbersCollection([0, 10, 5, -1]);
numberscollection.sort();
console.log(numberscollection.data);
const characterscollection = new CharactersCollection_1.CharacterCollection("XaaZbB");
characterscollection.sort();
console.log(characterscollection.data);
const linkedlist = new LinkedListCollection_1.LinkedList();
const arr = [0, 10, -5, 12, -9];
for (let i of arr) {
    linkedlist.add(i);
}
linkedlist.sort();
linkedlist.print();
