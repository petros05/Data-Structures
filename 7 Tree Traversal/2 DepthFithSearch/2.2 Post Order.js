class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while (true) {
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

  // Depth First Search post-order
  DFS_post_order() {
    if (!this.root) return undefined;
    let visited = [];

    const traversal = (node = this.root) => {
        if(node.left) traversal(node.left);
        if(node.right) traversal(node.right);
        visited.push(node.value);
    }
    traversal();
    return visited
  }
}

const tree = new BST();
tree.insert(12);
tree.insert(10);
tree.insert(8);
tree.insert(20);
tree.insert(18);
tree.insert(11);
tree.insert(22);
console.log(tree.DFS_post_order());
console.log(tree.root);

