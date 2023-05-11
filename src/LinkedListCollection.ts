import { Sorter } from "./Sorter";

class Node
{
    next:Node|null=null;
    constructor(public data:number){}
}
export class LinkedList extends Sorter
{
    private head:Node|null=null;
    add(data:number):void
    {
        const newNode=new Node(data);
        if(!this.head)
        {
            this.head=newNode;
            return;
        }
        let node=this.head;
        while(node.next)
        {
            node=node.next;
        }
        node.next=newNode;
    }
    at(index:number):Node
    {
        if(!this.head)
        {
            throw new Error("Index out of bounds");
        }
        let node:Node|null=this.head;
        let counter=0;
        while(node)
        {
            if(counter===index)
            {
                return node;
            }
            counter++;
            node=node.next;
        }
        throw new Error("Index out of bounds");
    }
    compare(leftIndex:number,rightIndex:number):boolean
    {
        if(!this.head)
        {
            throw new Error('List is empty');
        }
        return this.at(leftIndex).data>this.at(rightIndex).data;
    }
    swap(leftIndex:number,rightIndex:number):void
    {
        if(!this.head)
        {
            return;
        }
        this.at(leftIndex).data=this.at(leftIndex).data^this.at(rightIndex).data;
        this.at(rightIndex).data=this.at(leftIndex).data^this.at(rightIndex).data;
        this.at(leftIndex).data=this.at(leftIndex).data^this.at(rightIndex).data;
    }
    print():void
    {
        if(!this.head)
        {
            return;
        }
        let node:Node|null=this.head;
        while(node)
        {
            console.log(node.data);
            node=node.next;
        }
    }
    get length():number
    {
        if(!this.head)
        {
            return 0;
        }
        let count=0;
        let node:Node|null=this.head;
        while(node)
        {
            count++;
            node=node.next;
        }
        return count;
    }
}