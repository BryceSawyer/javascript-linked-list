// SINGLY LINKED LIST: JAVASCRIPT

// A linked list is a sequential chain of nodes.
// node's contain two elements:
// 'Data', and a 'link' to the next node
const Node = require('./Node.js'); // <--- Node Class Constructor()

// LinkedList Class Constructor()
// Handles external operations on the list, like adding, removing and swaping (head, tail and by data) nodes
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
            let node = this.head;
            while (node.getNextNode()) {
                node = node.getNextNode();
            }
            // Updates the tail of the list to the new Tail
            node.setNextNode(newTail)
        }

    }

    //.removeHead() Method:
    // Removes the node from the beginning (head) of the list
    removeHead() {
        // If the list is not empty (head is not null)
        if (this.head) {
            // Initialize removeHead to be the head node.
            const removeHead = this.head
            // Sets the list’s head equal to removeHead‘s next node.
            this.head = removeHead.getNextNode()
            // Returns the data from the removed head node
            return removeHead.data
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
            // Initialize removeTail to be the head node.
            let removeTail = this.head;
            // Initialize reference to the previous node.
            let prevNode = null;
            // Traverse the list to find the tail node.
            while (removeTail.getNextNode()) {
                // Tracks the previous node.
                prevNode = removeTail
                // Moves removeTail to the next node.
                removeTail = removeTail.getNextNode();
            }
            // Updates the link of previous node to the removeTails next node.
            prevNode.setNextNode(removeTail.getNextNode());
            // Return the data from the removeTail.
            return removeTail.data;
        }
    }

    //.removeData() Method:
    // Removes a node by its data value from the linked list.
    // Takes one parameter, 'data'.
    removeData(data) {
        // If the list is not empty (head is not null)
        if (this.head) {
            // If the data to remove is in the head node. 
            if (this.head.data === data) {
                // it uses .removeHead() method to remove node.
                return this.removeHead();
            }
            // Finds the data using .findNodeByData() method
            const { node: node, prevNode: prevNode } = this.findNodeByData(data);
            // If data is found
            if (node?.data === data) {
                // Updates the link of previous node to the nodes next node.
                prevNode.setNextNode(node.getNextNode());
                // Return the data of the node to be removed.
                return node.data;
            }
            console.log('Data not found')
        }
        // Return null if the data was not found in the list.
        return null;
    }

    // .findNodeByData() Method:
    // Finds a node by its data value in the linked list and returns the node and its previous node.
    // Takes one parameter, 'data'.
    findNodeByData(data) {
        // If the list is not empty (head is not null)
        if (this.head) {
            // Initialize node to be the head node.
            let node = this.head;
            // Initialize reference to the previous node.
            let prevNode = null;
            // Traverse the list to find the data.
            while (node !== null && node.data !== data) {
                // Tracks the previous node.
                prevNode = node;
                // Moves node to the next node.
                node = node.getNextNode();
            }
            // Returns an object containing the found node and its previous node.
            return { node, prevNode };
        }
    }

    // .swapNodes() Method:
    // Swaps two nodes in the linked list based on their data values.
    // Takes Two parameters, data1 and data2.
    swapNodes(data1, data2) {
        // If data2 is falsy, indicating that both data1 and data2 should be provided.
        if (!data2) {
            console.log('Requires two arguments')
            return;
        }
        // If the list is not empty and contains at least two nodes (head and next node).
        if (this.head && this.head.getNextNode()) {
            // if the data values to be swapped are the same.
            if (data1 === data2) {
                console.log('Elements are the same - no swap to be made');
                // Returns
                return;
            }
            // Find the first node equal to 'data1' and its previous node using .findNodeByData() method
            const { node: node1, prevNode: node1Prev } = this.findNodeByData(data1);
            // Find the second node equal 'data2' and its previous node using .findNodeByData() method.
            const { node: node2, prevNode: node2Prev } = this.findNodeByData(data2);
            // If either of the nodes was not found in the list.
            if (node1 === null || node2 === null) {
                console.log('Swap not possible - one or more element is not in the list');
                // Returns
                return;
            }
            // Update the links between nodes to perform the swap.
            if (node1Prev === null) {
                this.head = node2;
            } else {
                node1Prev.setNextNode(node2);
            }

            if (node2Prev === null) {
                this.head = node1;
            } else {
                node2Prev.setNextNode(node1)
            }
            // Swaps the links between node1 and node2.
            let temp = node1.getNextNode();
            node1.setNextNode(node2.getNextNode());
            node2.setNextNode(temp);
            console.log(`Swapped ${data1} and ${data2}`);
        } else {
            // Else the list is empty or contains only one element, indicate that swapping is not possible.
            console.log('Swap not possible - only one element in the list')
        }
    }

    //.printList() Method:
    // print out the nodes in the list in order from head to tail
    print() {
        let node = this.head;
        let output = '<Head> ';
        while (node) {
            output += node.data + ' ';
            node = node.getNextNode();
        }
        output = output + '<Tail>';
        console.log(output)
    }
}

module.exports = LinkedList;
