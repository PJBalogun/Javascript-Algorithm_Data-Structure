//Implement Binary Heap

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    Insert(value) {
        this.values.push(value);
        let index = this.values.length - 1;
        let element = this.values[index];
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];

            if (element <= parent) break;
            this.values[index] = parent;
            this.values[parentIndex] = element;
            index = parentIndex;
        }
    }
    ExtractMax() {
        if (this.values.length === 0) {
            console.log("The Heap is Empty");
            return;
        }
        this.values[0] = this.values[this.values.length - 1];
        this.values.pop();
        let parentIndex = 0;
        while (this.IsChildless(parentIndex)) {
            let leftChildIdx = 2 * parentIndex + 1;
            let rightChildIdx = 2 * parentIndex + 2;
            if (this.values[leftChildIdx] < this.values[parentIndex] && this.values[rightChildIdx] < this.values[parentIndex])
                break;
            else if (this.values[leftChildIdx] < this.values[rightChildIdx]) {
                this.Swap(rightChildIdx, parentIndex);
                parentIndex = rightChildIdx;
            }
            else if (this.values[leftChildIdx] > this.values[rightChildIdx]) {
                this.Swap(leftChildIdx, parentIndex);
                parentIndex = leftChildIdx;
            }
            else {
                if (this.values[rightChildIdx] === undefined) {
                    if (this.values[leftChildIdx] > this.values[parentIndex])
                        this.Swap(leftChildIdx, parentIndex)
                }
                if (this.values[leftChildIdx] === undefined) {
                    if (this.values[rightChildIdx] > this.values[parentIndex])
                        this.Swap(rightChildIdx, parentIndex)
                }
                break;
            }
        }
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
let heap = new MaxBinaryHeap();
heap.Insert(41);
heap.Insert(39);
heap.Insert(33);
heap.Insert(18);
heap.Insert(27);
heap.Insert(12);
heap.Insert(55);
heap.Insert(123);
heap.Insert(17);
heap.Insert(45);
heap.Insert(4);
console.log(heap.values);

for (let i = 0; heap.values.length > 0; i++) {
    heap.ExtractMax();
    console.log(heap.values);
}