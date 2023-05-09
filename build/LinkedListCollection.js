"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let node = this.head;
        while (node.next) {
            node = node.next;
        }
        node.next = newNode;
    }
    at(index) {
        if (!this.head) {
            throw new Error("Index out of bounds");
        }
        let node = this.head;
        let counter = 0;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error("Index out of bounds");
    }
    compare(leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error('List is empty');
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }
    swap(leftIndex, rightIndex) {
        if (!this.head) {
            return;
        }
        this.at(leftIndex).data = this.at(leftIndex).data ^ this.at(rightIndex).data;
        this.at(rightIndex).data = this.at(leftIndex).data ^ this.at(rightIndex).data;
        this.at(leftIndex).data = this.at(leftIndex).data ^ this.at(rightIndex).data;
    }
    print() {
        if (!this.head) {
            return;
        }
        let node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
    get length() {
        if (!this.head) {
            return 0;
        }
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }
}
exports.LinkedList = LinkedList;
