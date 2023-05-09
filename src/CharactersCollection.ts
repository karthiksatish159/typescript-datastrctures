export class CharacterCollection
{
    constructor(public data:string){};
    get length():number
    {
        return this.data.length;
    }
    compare(leftIndex:number,rightIndex:number):boolean
    {
        return this.data[leftIndex].toLowerCase()>this.data[rightIndex].toLowerCase();
    }
    swap(leftIndex:number,rightIndex:number):void
    {
        const characters=this.data.split("");
        characters[leftIndex]=String.fromCharCode(characters[leftIndex].charCodeAt(0)^characters[rightIndex].charCodeAt(0));
        characters[rightIndex]=String.fromCharCode(characters[leftIndex].charCodeAt(0)^characters[rightIndex].charCodeAt(0));
        characters[leftIndex]=String.fromCharCode(characters[leftIndex].charCodeAt(0)^characters[rightIndex].charCodeAt(0));
        this.data=characters.join("");
    }
}