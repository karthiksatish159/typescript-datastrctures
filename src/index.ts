import { NumbersCollection } from "./NumbersCollection";
import { CharacterCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedListCollection";
const numberscollection=new NumbersCollection([0,10,5,-1]);
numberscollection.sort();
console.log(numberscollection.data);
const characterscollection=new CharacterCollection("XaaZbB");
characterscollection.sort();
console.log(characterscollection.data);
const linkedlist=new LinkedList();
const arr:number[]=[0,10,-5,12,-9];
for(let i of arr)
{
    linkedlist.add(i);
}
linkedlist.sort();
linkedlist.print();
