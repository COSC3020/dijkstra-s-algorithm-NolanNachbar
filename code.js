function dijkstra(graph, sourceNode) {
    let visited = [];
    let parent = {};
    let distance = {};
    let queue = [sourceNode];

    for (let node in graph) {
        distance[node] = Infinity;
    }

    distance[sourceNode] = 0;

    while (queue.length > 0) {
        let min = null;

        for (let node in graph) {
            if (!visited.includes(node) && (min === null || distance[node] < distance[min])) {
                min = node;
            }
        }

        if (min === null) break;

        visited.push(min);

        for (let i = 0; i < graph[min].length; i++) {
            const [neighbor, weight] = graph[min][i];
            let newDistance = distance[min] + weight;

            if (newDistance < distance[neighbor]) {
                distance[neighbor] = newDistance;
                parent[neighbor] = min;

                if (!visited.includes(neighbor) && !queue.includes(neighbor)) {
                    queue.push(neighbor);
                }
            }
        }
    }

    return distance;
}
