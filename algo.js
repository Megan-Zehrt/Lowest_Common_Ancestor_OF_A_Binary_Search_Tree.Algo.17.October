// 235. Lowest Common Ancestor of a Binary Search Tree



// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”







/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {

    function dfs(node) {
        if (node == null) {
            return null;
        }

        // If the current node is p or q, return the node
        if (node == p || node == q) {
            return node;
        }

        // Recurse on left and right subtrees
        let left = dfs(node.left);
        let right = dfs(node.right);

        // If both sides return a non-null value, this node is the LCA
        if (left != null && right != null) {
            return node;
        }

        // Otherwise, return whichever side is non-null (either p, q, or the LCA found deeper in the tree)
        return left != null ? left : right;
    }

    return dfs(root);
};
