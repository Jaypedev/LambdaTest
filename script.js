class TreeNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  
    insert(newValue) {
      if (newValue < this.value) {
        // Insert to the left
        return new TreeNode(
          this.value,
          this.left ? this.left.insert(newValue) : new TreeNode(newValue),
          this.right
        );
      } else {
        // Insert to the right
        return new TreeNode(
          this.value,
          this.left,
          this.right ? this.right.insert(newValue) : new TreeNode(newValue)
        );
      }
    }
  }
  
  // Creating a simplified tree structure
  const root = new TreeNode(5);
  root.left = new TreeNode(3);
  root.right = new TreeNode(8);
  
  // Logging the original tree
  console.log("Original Tree:");
  console.log(root);
  
  // Creating an updated tree by inserting a new value (in this case, 10)
  const updatedRoot = root.insert(10);
  
  // Logging the updated tree
  console.log("\nUpdated Tree:");
  console.log(updatedRoot);