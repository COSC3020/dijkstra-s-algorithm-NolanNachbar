const fs = require('fs');
const jsc = require('jsverify');
eval(fs.readFileSync('code.js')+'');

// Running tests
const sourceNode = 0;

const graph = {
    0: [[3, 2], [4, 1], [2, 1], [7, 5]], 
    1: [[0, 6]],                          
    2: [[1, 87], [4, 4]],                  
    3: [[2, 3], [5, 3], [6, 5]],         
    4: [[1, 4], [5, 4]],
    5: [[6, 2]],
    6: [],
    7: [[8, 1]],
    8: [],
    9: []
};

const graph2 = {
    0: [[1, 3], [2, 7]],
    1: [[3, 2]], 
    2: [[3, 1], [4, 0]],
    3: [],
    4: [[5, 2], [6, 4]],
    5: [],
    6: [[7, 4]],
    7: [],
    8: [],
    9: []
};

const graph3 = {
    0: [[1, 1]],
    1: [[2, 5], [3, 12]],
    2: [[4, 1]],
    3: [[7, 5]],
    4: [[5, 2]],
    5: [],
    6: [[8, 8]],
    7: [],
};

function arraysEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}

const tests = [
    { func: dijkstra, graph: graph, result: { '0': 0, '1': 5, '2': 1, '3': 2, '4': 1, '5': 5, '6': 7, '7': 5, '8': 6, '9': 8 }
, name: "Dijkstra's Test 1" },
    { func: dijkstra, graph: graph2, result: { '0': 0, '1': 3, '2': 7, '3': 5, '4': 7, '5': 9, '6': 11, '7': 15, '8': 10, '9': 13 }
, name: "Dijkstra's Test 2" },
    { func: dijkstra, graph: graph3, result: { '0': 0, '1': 5, '2': 1, '3': 2, '4': 1, '5': 5, '6': 7, '7': 5, '8': 6, '9': 8 }
, name: "Dijkstra's Test 3" },
];

tests.forEach(test => {
    const output = test.func(test.graph, sourceNode);
    if (arraysEqual(output, test.result)) {
        console.log(`${test.name} successful`);
    } else {
        console.error(`${test.name} failed: ${output} != ${test.result}`);
    }
});
