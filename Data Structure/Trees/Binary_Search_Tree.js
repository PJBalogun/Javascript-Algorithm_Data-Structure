// Binary Search Tree Implementation.

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    InsertIteratively(value) {
        let newNode = new Node(value);
        if (this.root === null)
            this.root = newNode;
        else {
            let currentNode = this.root;
            while (true) {
                if (value === currentNode.value)
                    return undefined;
                if (value <= currentNode.value) {
                    if (currentNode.left === null) {
                        currentNode.left = newNode;
                        return this;
                    }
                    else
                        currentNode = currentNode.left;
                }
                else {
                    if (currentNode.right === null) {
                        currentNode.right = newNode;
                        return this;
                    }
                    else
                        currentNode = currentNode.right;
                }
            }
        }
    }
    InsertRecursively(value) {

    }
    IterativeSearch(value) {
        if (this.root === null)
            return undefined;
        let currentNode = this.root;
        while (true) {
            if (value === currentNode.value)
                return value;
            else if (value < currentNode.value) {
                if (currentNode.left === null)
                    return undefined;
                currentNode = currentNode.left;
            }
            else {
                if (currentNode.right === null)
                    return undefined
                currentNode = currentNode.right;
            }
        }
    }
    Contains(value) {
        if (this.root === null)
            return false;
        let currentNode = this.root;
        while (true) {
            if (value === currentNode.value)
                return true;
            else if (value < currentNode.value) {
                if (currentNode.left === null)
                    return false;
                currentNode = currentNode.left;
            }
            else {
                if (currentNode.right === null)
                    return false;
                currentNode = currentNode.right;
            }
        }
    }
    BFS() {
        let data = [],
            queue = [],
            node = this.root;

        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }
        return data;
    }
    DFSPreOrder() {
        let data = [];
        function Tranverse(node) {
            data.push(node.value);
            if (node.left) Tranverse(node.left);
            if (node.right) Tranverse(node.right);
        }
        Tranverse(this.root);
        console.log(data);
        //return data;
    }
    DFSPostOrder() {
        let data = [];
        function Tranverse(node) {
            if (node.left) Tranverse(node.left);
            if (node.right) Tranverse(node.right);
            data.push(node.value);
        }
        Tranverse(this.root);
        console.log(data);
        //return data;
    }
    DFSInOrder() {
        let data = [];
        function Tranverse(node) {
            if (node.left) Tranverse(node.left);
            data.push(node.value);
            if (node.right) Tranverse(node.right);
        }
        Tranverse(this.root);
        console.log(data);
        //return data;
    }
}


var tree = new BinarySearchTree();
tree.InsertIteratively(15);
tree.InsertIteratively(6);
tree.InsertIteratively(3);
tree.InsertIteratively(8);
tree.InsertIteratively(20);
tree.InsertIteratively(16);
tree.InsertIteratively(22);
//console.log(BST.Contains());
tree.DFSPreOrder();
tree.DFSPostOrder();
tree.DFSInOrder();
//console.log(BST.root);