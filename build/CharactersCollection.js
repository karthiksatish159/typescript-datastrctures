"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollection = void 0;
class CharacterCollection {
    constructor(data) {
        this.data = data;
    }
    ;
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }
    swap(leftIndex, rightIndex) {
        const characters = this.data.split("");
        characters[leftIndex] = String.fromCharCode(characters[leftIndex].charCodeAt(0) ^ characters[rightIndex].charCodeAt(0));
        characters[rightIndex] = String.fromCharCode(characters[leftIndex].charCodeAt(0) ^ characters[rightIndex].charCodeAt(0));
        characters[leftIndex] = String.fromCharCode(characters[leftIndex].charCodeAt(0) ^ characters[rightIndex].charCodeAt(0));
        this.data = characters.join("");
    }
}
exports.CharacterCollection = CharacterCollection;
