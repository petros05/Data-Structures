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

  // Insertion(Nodes are all sorted) Method
  insertion(value) {
    let newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (true) {
      if (value > currentNode.value) {
        if (currentNode.value === value) return undefined;
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

  // Find a Node by value Methode
  find(value) {
    if (!this.root) return null;
    let currentNode = this.root;
    while (true) {
      if (!currentNode) {
        return null;
      } else if (currentNode.value === value) {
        return currentNode;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      }
    }
  }

  // Remove node from Binary Search Tree by it's value
  remove(value) {
    if (!this.root) return null;
    let target = this.root;
    let parent = null;

    // Get the target Node
    while (target && target.value !== value) {
      parent = target;
      if (value < target.value) {
        target = target.left;
      } else {
        target = target.right;
      }
    }

    if (!target) return undefined;

    // If there is no children
    if (!target.left && !target.right) {
      if (parent === null) {
        this.root = null;
      } else if (parent.left === target) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }
    // If target node has two(2) children.
    else if (target.left && target.right) {
      let minRight = target.right;
      let minParent = target;
      while (minRight.left) {
        minParent = minRight;
        minRight = minRight.left;
      }
      target.value = minRight.value;
      if (minParent.left === minRight) {
        minParent.left = minRight.right;
      } else {
        minParent.right = minRight.right;
      }
    }
    // If target has only one child
    else {
      let child = target.left ? target.left : target.right;
      if (parent === null) {
        this.root = child;
      } else if (parent.left === target) {
        parent.left = child;
      } else {
        parent.right = child;
      }
    }
    return target;
  }
}

const list = new BinarySearchTree();
list.insertion(12);
list.insertion(10);
list.insertion(11);
list.insertion(8);
list.insertion(9);
list.insertion(6);
list.insertion(7);
list.insertion(20);
list.insertion(50);
list.insertion(21);
list.remove(10);
console.log(list.root);
