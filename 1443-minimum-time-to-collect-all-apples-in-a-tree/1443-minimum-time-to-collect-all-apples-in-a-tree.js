/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function(n, edges, hasApple) {
    var tree = {};
    for(var i =0;i < n; i++) tree[i] = []
    for(var i =0;i < edges.length; i++) {
        tree[edges[i][0]].push(edges[i][1])
        tree[edges[i][1]].push(edges[i][0])
    }
    var minTime = dfs(0, -1, tree, hasApple)
    return minTime > 0 ? minTime - 2 : minTime
};

var dfs = function(root, parent, tree, has) {
    var adjCost = 0, adj = tree[root];
    for(var i = 0; i< adj.length; i++) {
        if(adj[i] == parent) continue
        adjCost += dfs(adj[i], root, tree, has)
    }
    if(has[root] || adjCost) return adjCost + 2
    else return adjCost
}