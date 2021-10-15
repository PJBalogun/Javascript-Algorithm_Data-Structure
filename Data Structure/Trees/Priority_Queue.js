//Implement Priority Queue

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    Enqueue(value, priority) {
        let newNode = new Node(value, priority);
        this.values.push(newNode);
        let index = this.values.length - 1;
        let element = this.values[index];
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];

            if (element.priority >= parent.priority) break;
            this.values[index] = parent;
            this.values[parentIndex] = element;
            index = parentIndex;
        }
    }
    Dequeue() {
        if (this.values.length === 0) {
            console.log("The Heap is Empty");
            return;
        }
        let min = this.values[0];
        this.values[0] = this.values[this.values.length - 1];
        this.values.pop();
        let parentIndex = 0;
        while (this.IsChildless(parentIndex)) {
            let leftChildIdx = 2 * parentIndex + 1;
            let rightChildIdx = 2 * parentIndex + 2;
            let parent = this.values[parentIndex];
            let leftChild = this.values[leftChildIdx];
            let rightChild = this.values[rightChildIdx];
            if (leftChild === undefined)
                leftChild = new Noded(null, undefined);
            if (rightChild === undefined)
                rightChild = new Node(null, undefined);
            if (leftChild.priority > parent.priority && rightChild.priority > parent.priority)
                break;
            else if (leftChild.priority > rightChild.priority) {
                this.Swap(rightChildIdx, parentIndex);
                parentIndex = rightChildIdx;
            }
            else if (leftChild.priority < rightChild.priority) {
                this.Swap(leftChildIdx, parentIndex);
                parentIndex = leftChildIdx;
            }
            else {
                if (rightChild === undefined) {
                    if (leftChild.priority < parent.priority)
                        this.Swap(leftChildIdx, parentIndex)
                }
                if (leftChild === undefined) {
                    if (rightChild.priority < parent.priority)
                        this.Swap(rightChildIdx, parentIndex)
                }
                break;
            }
        }
        console.log(min);
    }
    IsChildless(parentIndex) {
        let leftChildIdx = 2 * parentIndex + 1;
        let rightChildIdx = 2 * parentIndex + 2;
        return this.values[leftChildIdx] !== undefined || this.values[rightChildIdx] !== undefined;
    }
    Swap(index1, index2) {
        let temp = this.values[index1];
        this.values[index1] = this.values[index2];
        this.values[index2] = temp;
    }
}
class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

let PR = new PriorityQueue();
PR.Enqueue("cc", 1);
PR.Enqueue("G w", 5);
PR.Enqueue("h f", 2);
PR.Enqueue("H I", 6);
PR.Enqueue("ICU", 3);
console.log(PR.values);
PR.Dequeue();
console.log(PR.values);
PR.Dequeue();
console.log(PR.values);
PR.Dequeue();
console.log(PR.values);