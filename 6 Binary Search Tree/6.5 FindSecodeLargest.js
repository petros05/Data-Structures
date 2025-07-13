class TreeNode {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insertion(value) {
    let newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    }
    let currentNode = this.root;
    while (currentNode.value !== value) {
      if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      } else {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      }
    }
    return undefined;
  }

  findSecondLargest() {
    // case 1: if the tree has no root or has only one child
    if (!this.root || (!this.root.right && !this.root.left)) return undefined;
    let first = this.root;
    let second;
    // case 2: if the root has right child
    if (first.right) {
      while (first.right) {
        second  = first;
        first = first.right;
      }
      if (first.left) {
        second = first.left;
        while (second.right) {
          second = second.right;
        }
      }
      return second.value;
    // case 3: if the root has no right child but has left child
    } else {
      second = first.left;
      while(second.right) {
        second = second.right;
      }
      return second.value;
    }
  }
}

const list = new BinarySearchTree();
list.insertion(10);
list.insertion(8);
list.insertion(9);
list.insertion(9.5)
list.insertion(6);
list.insertion(12);
list.insertion(15);
list.insertion(17);
list.insertion(16);
list.insertion(16.5)
list.insertion(8);
list.insertion(6);
list.insertion(4);
list.insertion(7);
list.insertion(3);
console.log(list.findSecondLargest());
console.log(list.root);
