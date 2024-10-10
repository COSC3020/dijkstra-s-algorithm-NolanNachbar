# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

Recall my code,
```js
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
```

The first for-loop will loop $|V|$ times. 
The while-loop will loop $|V|$ times also. Inside there are two for-loops; the first one will loop a total of $|E|$ times, and the second will loop $|V|$. Thus the complexity is $|V| + |V|(|V| + |E|) \in \Theta(|V|^2)$.

I used this to help me understand the concept:
https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/

I mainly based my solution off of my BFS algorithm and modified it to match the pseudocode on the slide. 

I also used this to help me figure out a couple syntax parts like how I should access nodes using  ```let node in graph```
https://github.com/COSC3020/dijkstra-s-algorithm-Assel-Aljazwe/tree/Code-%26-Analysis

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
