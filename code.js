function dijkstra(graph, sourceNode) {
    let distance = {}
    return [];
}

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
