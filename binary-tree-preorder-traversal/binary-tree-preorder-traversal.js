var preorderTraversal = function(root) {
    if (root === null){
        return []
    }
    
    const answer = []
    
    const func = (node) =>{
        if (node === null) return
        
        answer.push(node.val);
        func(node.left)
        func(node.right)
    }
    
    func(root)
    
    return answer
};