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

  insert(value) {
    let newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (true) {
      if (currentNode.value === value) return undefined;
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
  }

  // chick if Binary Search Tree is balanced
  isBalanced(node = this.root) {
    function checkDepth(node) {
      if (node === null) return 0;

      const leftDepth = checkDepth(node.left);
      if (leftDepth === -1) return -1;

      const rightDepth = checkDepth(node.right);
      if (rightDepth === -1) return -1;

      if (Math.abs(leftDepth - rightDepth) > 1) return -1;

      return 1 + Math.max(leftDepth, rightDepth);
    }

    return checkDepth(node) !== -1;
  }
}

const list = new BinarySearchTree();
list.insert(10);
list.insert(20);
list.insert(15);
list.insert(5);
list.insert(6);
list.insert(25);
// list.findSecondLargest()
console.log(list.isBalanced());
// console.log(list.root);
