class TreeNode {
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

  // Insert node to Binary Search Tree
  insertion(value) {
    let newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (true) {
      if (currentNode.value === value) return null;
      if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      }
    }
  }

  // Find a value in Binary Search Tree
  find(value) {
    if (!this.root) return null;
    let currentNode = this.root;
    while (true) {
      if (!currentNode) {
        return null;
      } else if (value === currentNode.value) {
        return currentNode;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
  }
}

const list = new BinarySearchTree();
list.insertion(10);
list.insertion(8);
list.insertion(12);
list.insertion(2);
list.insertion(3);
list.insertion(1);
console.log(list.find(0));
console.log(list);
