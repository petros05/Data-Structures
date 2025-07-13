class TreeNode {
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
    let newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while (true) {
      if (currentNode.value === value) return "Duplicated!!";
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

  DFS_pre_order() {
    let visited = [];
    const helper = (node) => {
      visited.push(node.value);
      if(node.left) helper(node.left);
      if(node.right) helper(node.right);
    }
    helper(this.root);
    return visited
  }
}

const tree = new BST();
tree.insert(10);
tree.insert(20);
tree.insert(6);
tree.insert(25);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(1);
tree.insert(4);
console.log(tree. DFS_pre_order() );
console.log(tree.root);

