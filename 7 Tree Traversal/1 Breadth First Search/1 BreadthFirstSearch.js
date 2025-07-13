class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.rigth = null;
  }
}

class BST {
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
      if (currentNode.value === value) return "Duplicated!!";
      if (value > currentNode.value) {
        if (!currentNode.rigth) {
          currentNode.rigth = newNode;
          return this;
        }
        currentNode = currentNode.rigth;
      } else {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      }
    }
  }

  breadthFirstSearch() {
    if (!this.root) return undefined;
    let queue = [];
    let visited = [];
    queue.push(this.root);
    while (queue.length) {
      let currentNode = queue.shift();
      visited.push(currentNode.value);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.rigth) queue.push(currentNode.rigth);
    }
    return visited;
  }
}

const tree = new BST();
tree.insert(12);
tree.insert(11);
tree.insert(22);
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.root);
console.log(tree.breadthFirstSearch());
