// SINGLY LINKED LIST: JAVASCRIPT

// A linked list is a sequential chain of nodes.
// node's contain two elements:
// 'Data', and a 'link' to the next node
const Node = require('./Node.js'); // <--- Node Class Constructor()

// LinkedList Class Constructor()
// Handles external operations on the list, like adding and removing (head and tail) nodes
class LinkedList {
    constructor() {
        this.head = null;
    }

    // .addToHead() Method:
    // Adds a new node to the beginning (head) of the list,
    // Takes one parameter, 'data'.
    addToHead(data) {
        // Creates a Node instance, and passed data.
        const newHead = new Node(data);
        // If there is a current head to the list. 
        if (this.head) {
            // Sets the newhead’s next node to current head.
            newHead.setNextNode(this.head);
        }
        // Updates the head of the list to the new head
        this.head = newHead;
    }

    // .addToTail() Method: 
    // Adds a new node to the end (Tail) of the list,
    // Takes one parameter, 'data'.
    addToTail(data) {
        // Creates a Node instance, and passed data.
        const newTail = new Node(data);
        // If the list is empty, 
        if (!this.head) {
            // Sets the new node as the head
            this.head = newTail;
            // Else Traverse the list to find the current tail node
        } else {
            let currentNode = this.head;
            while (currentNode.getNextNode()) {
                currentNode = currentNode.getNextNode();
            }
            // Updates the tail of the list to the new Tail
            currentNode.setNextNode(newTail)
        }

    }

    //.removeHead() Method:
    // Removes the node from the beginning (head) of the list
    removeHead() {
        // If the list is not empty (head is not null)
        if (this.head) {
             // Initialize removedHead to the head node.
            const removedhead = this.head
            // Sets the list’s head equal to removedHead‘s next node.
            this.head = removedhead.getNextNode()
            // Returns the data from the removed head node
            return removedhead.data
        }
    }

    //.removeTail() Method:
    // Removes the node from the end of the list
    removeTail() {
        // If the list is not empty (head is not null)
        if (this.head) {
            // if there is only one node in the list (the head). 
            if (!this.head.getNextNode()) {
                // it uses .removeHead() method to remove node.
                return this.removeHead();
            }
            // Initialize removedTail to the head node.
            let removedTail = this.head;
            // Initialize reference to the previous node.
            let previousNode;
            // Traverse the list to find the current tail node.
            while (removedTail.getNextNode()) {
                // Tracks the previous node before moving to the next.
                previousNode = removedTail
                // Moves to the next node.
                removedTail = removedTail.getNextNode();
            }
            // Updates the link of previous node to the removedTails next node.
            previousNode.setNextNode(removedTail.getNextNode());
            // Return the data from the removedTail.
            return removedTail.data;
        }
    }

    //.removeData() Method:
    // Removes a node by its data value from the linked list.
    removeData(data) {
        // If the list is not empty (head is not null)
        if (this.head) {
            // If the data to remove is in the head node. 
            if (this.head.data === data) {
                // it uses .removeHead() method to remove node.
                return this.removeHead();
            }
            // Initialize currentNode to the head node.
            let currentNode = this.head;
            // Initialize reference to the previous node.
            let previousNode;
            // Traverse the list to find the node with the specified data.
            while (currentNode) {
                if (currentNode.data === data) {
                    // Updates the link of previous node to the currentNodes next node.
                    previousNode.setNextNode(currentNode.getNextNode());
                    // Return the data of the removed node.
                    return currentNode.data;
                }
                // Tracks the previous node before moving to the next.
                previousNode = currentNode;
                // Moves to the next node.
                currentNode = currentNode.getNextNode();
            }
            // Return null if the data was not found in the list.
            return null;
        }
    }

    //.printList() Method:
    // print out the nodes in the list in order from head to tail
    print() {
        let currentNode = this.head;
        let output = '<Head> ';
        while (currentNode) {
            output += currentNode.data + ' ';
            currentNode = currentNode.getNextNode();
        }
        output = output + '<Tail>';
        console.log(output)
    }
}

module.exports = LinkedList;
