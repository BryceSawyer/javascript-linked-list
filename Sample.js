// Node class holds the data and links between nodes
// LinkedList class handles external operations on the list, like adding and removing nodes
// .addToHead()
// .removeHead()
// .addToTail()
// .removeTail()
// .removeData()
// .print() method to track the changes we made

const LinkedList = require('./LinkedList.js');

//// Sample: add to head and tail //////////////////////////////////////////////////////////////////
const sample = new LinkedList();
console.log('/// Adding ///')
sample.addToHead('a');
sample.print();
sample.addToTail('b');
sample.print();
sample.addToTail('c');
sample.print();
sample.addToTail('d');
sample.print();
console.log(JSON.stringify(sample, null, 2));

//// Sample: remove by head, tail and data  ////////////////////////////////////////////////////////
console.log('/// Removing ///')
sample.print();
sample.removeHead();
sample.print();
sample.removeTail();
sample.print();
sample.removeData('c');
sample.print();
sample.removeHead()
console.log(JSON.stringify(sample, null, 2));