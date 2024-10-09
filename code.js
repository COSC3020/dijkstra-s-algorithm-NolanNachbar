function dijkstra(graph, sourceNode) {
    let distance = {}
    return [];
}

//function breadthFirstSearch(graph, startNode, targetNode) { // note that graph will be an adjacency list
//     let visited = [];
//     let parent = {};
//     let queue = [startNode];

//     while (queue.length > 0) {
//         let node = queue.shift();

//         if (node === targetNode) {
//             let path = [];
//             let currentNode = targetNode;
//             while (currentNode !== undefined) {
//                 path.unshift(currentNode);
//                 currentNode = parent[currentNode];
//             }
//             return path;
//         }

//         if (!visited.includes(node)) {
//             visited.push(node);

//             for (let i = 0; i < graph[node].length; i++) {
//                 const neighbor = graph[node][i];
//                 if (!visited.includes(neighbor) && !queue.includes(neighbor)) {
//                     queue.push(neighbor);
//                     parent[neighbor] = node;
//                 }
//             }
//         }
//     }

//     return [];
// }

const graph = {
    0: [[3, 1], [4, 2], [2, 4], [7, 7]],
    1: [[0, 3]],
    2: [[1, 1], [4, 3]],
    3: [[2, 1], [5, 2], [6, 4]],
    4: [[1, 5], [5, 2]],
    5: [[6, 1]],
    6: [],
    7: [[8, 1]],
    8: [],
    9: []
};

console.log(dijkstra(graph,0));
