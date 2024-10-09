const fs = require('fs');
const jsc = require('jsverify');
eval(fs.readFileSync('code.js')+'');

// Running tests
const startNode = 0;
const targetNode = 7;
const graph = [
    [3, 4, 2, 7],
    [0],
    [1, 4],
    [2, 5, 6],
    [1, 5],
    [6],
    [],
    [8],
    [],
    []
];

const graph2 = [
    [1, 2],
    [3],
    [3, 4],
    [],
    [5, 6],
    [],
    [7],
    [],
    [],
    []
];

const graph3 = [
    [1],
    [2, 3],
    [4],
    [7],
    [5],
    [],
    [8],
    []
];


function arraysEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}

const tests = [
    { func: depthFirstSearch, graph: graph, result: [0, 7], name: 'DFS Test 1' },
    { func: depthFirstSearch, graph: graph2, result: [0, 2, 4, 6, 7], name: 'DFS Test 2' },
    { func: depthFirstSearch, graph: graph3, result: [0, 1, 3, 7], name: 'DFS Test 3' },
    { func: breadthFirstSearch, graph: graph, result: [0, 7], name: 'BFS Test 1' },
    { func: breadthFirstSearch, graph: graph2, result: [0, 2, 4, 6, 7], name: 'BFS Test 2' },
    { func: breadthFirstSearch, graph: graph3, result: [0, 1, 3, 7], name: 'BFS Test 3' }
];

tests.forEach(test => {
    const output = test.func(test.graph, startNode, targetNode);
    if (arraysEqual(output, test.result)) {
        console.log(`${test.name} successful`);
    } else {
        console.error(`${test.name} failed: ${output} != ${test.result}`);
    }
});
