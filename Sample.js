// Node class holds the data and links between nodes
// LinkedList class handles external operations on the list, like adding, removing and swaping nodes
// .addToHead()
// .removeHead()
// .addToTail()
// .removeTail()
// .removeData()
// .swapNodes()
// .print() method to track the changes made.

const LinkedList = require('./LinkedList.js');

// Sample: add to head and tail ///////////////////////////
const sample = new LinkedList();
console.log('\n/// Adding ///')
//Add head
sample.addToHead('a');
sample.print();
// Add tails
sample.addToTail('b');
sample.print();
sample.addToTail('c');
sample.print();
sample.addToTail('d');
sample.print();
console.log(JSON.stringify(sample, null, 2));

//// Sample: remove by head, tail and data  ///////////////
console.log('\n/// Removing ///')
sample.print();

sample.removeHead();
sample.print();

sample.removeTail();
sample.print();

sample.removeData('c');
sample.print();

sample.removeData('b');
console.log(JSON.stringify(sample, null, 2));

//// Sample: Add and swap ///////////////
console.log('\n/// Add swap remove ///');
sample.addToHead('x');
sample.print();

sample.addToHead('y');
sample.print();

sample.addToTail('z');
sample.print();

sample.swapNodes('x', 'y');
sample.print();
console.log(JSON.stringify(sample, null, 2));

// Try remove non existing data.
sample.removeData('non existing data');
sample.print();
///////////////////////////////
sample.removeData('z');
sample.print();

sample.removeData('x');
sample.print();

sample.removeData('y');
sample.print();

console.log(JSON.stringify(sample, null, 2));

// Sample: Swap nodes //////////////////////////////////
const testSwapList = new LinkedList();
for (let i = 0; i <= 10; i++) {
    testSwapList.addToTail(i);
}

testSwapList.print();
testSwapList.swapNodes();
testSwapList.swapNodes(1);
testSwapList.swapNodes(0, 11);
testSwapList.swapNodes('x', 'y');
testSwapList.swapNodes(0, 10);
testSwapList.print();

console.log(JSON.stringify(testSwapList, null, 2));