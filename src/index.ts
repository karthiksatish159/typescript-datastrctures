import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharacterCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedListCollection";
// const numberscollection=new NumbersCollection([0,10,5,-1]);
// const characterscollection=new CharacterCollection("XaaZbB");
// const numbers_sorter=new Sorter(numberscollection);
// const characters_sorter=new Sorter(characterscollection);
// numbers_sorter.sort();
// characters_sorter.sort();
// console.log(numberscollection.data);
// console.log(characterscollection.data);
const linkedlist=new LinkedList();
const arr:number[]=[0,10,-5,12,-9];
for(let i of arr)
{
    linkedlist.add(i);
}
const sortLinkedList=new Sorter(linkedlist);
sortLinkedList.sort();
linkedlist.print();
