// ============= GRAPH TRAVERSAL =================

// === what do we mean by traversal in a graph? ===
/*
    what we simply mean by traversal in a graph is visiting/updating/checking 
    each vertex (node/points) in a graph.
*/

// === Graph Traversal Uses ===
/* 
    1. Peer to Peer Networking.
    2. Web Crawlers.
    3. Finding "closet" matches/recommendations - netflix recommendations / facebook suggestions.
    4. Shortest Path Problems
        a. GPS Navigation.
        b. Solving Mazes.
        c. AI (shortest path to win the game).
*/

// === Ways to Traverse a graph ===
/*
    1. Depth-first Traversal (DFS).
    2. Breadth-first Traversal (BFS).
*/

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => {
        return vertex !== vertex2;
      }
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex) => {
        return vertex !== vertex1;
      }
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length !== 0) {
      let adjacencyVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacencyVertex);
    }
    delete this.adjacencyList[vertex];
  }
  depthFirstRecursive(vertex) {
    let result = [];
    let visited = {};
    let adjacencyList = this.adjacencyList;
    function dfs(currentVertex) {
      if (!currentVertex) return null;
      visited[currentVertex] = true;
      result.push(currentVertex);
      for (let i = 0; i < adjacencyList[currentVertex].length; i++) {
        let neighbor = adjacencyList[currentVertex][i];
        if (!visited[neighbor]) {
          dfs(neighbor);
        }
      }
      return;
    }
    dfs(vertex);
    return result;
  }
  depthFirstIterative(vertex) {
    let stack = [];
    let result = [];
    let visited = {};
    stack.push(vertex);
    while (stack.length !== 0) {
      let currentVertex = stack.pop();
      if (!visited[currentVertex]) {
        visited[currentVertex] = true;
        result.push(currentVertex);
        for (let i = 0; i < this.adjacencyList[currentVertex].length; i++) {
          let neighbor = this.adjacencyList[currentVertex][i];
          stack.push(neighbor);
        }
      }
    }
    return result;
  }
  breadthFirstIterative(vertex) {
    let queue = [];
    let result = [];
    let visited = {};
    queue.push(vertex);
    while (queue.length !== 0) {
      let currentVertex = queue.shift();
      if (!visited[currentVertex]) {
        visited[currentVertex] = true;
        result.push(currentVertex);
        for (let i = 0; i < this.adjacencyList[currentVertex].length; i++) {
          let neighbor = this.adjacencyList[currentVertex][i];
          if (!visited[neighbor]) {
            queue.push(neighbor);
          }
        }
      }
    }
    return result;
  }
}

let graph = new Graph();
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addVertex("D");
// graph.addVertex("E");
// graph.addVertex("F");
// graph.addEdge("A", "B");
// graph.addEdge("A", "C");
// graph.addEdge("B", "D");
// graph.addEdge("C", "E");
// graph.addEdge("D", "E");
// graph.addEdge("D", "F");
// graph.addEdge("E", "F");
// console.log(graph);
/* 
  We would use the illustration below for the dfs traversal
  Expected result is as follows:
*/
//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

// console.log(graph.depthFirstRecursive("A"));
// console.log(graph.depthFirstIterative("A"));
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addVertex("D");
// graph.addVertex("E");
// graph.addVertex("F");
// graph.addEdge("A", "B");
// graph.addEdge("A", "E");
// graph.addEdge("B", "C");
// graph.addEdge("B", "D");
// graph.addEdge("C", "D");
// graph.addEdge("D", "E");
// graph.addEdge("D", "F");
// graph.addEdge("E", "F");
// console.log(graph);
/* 
  We would use the illustration below for the bfs traversal
  Expected result is as follows:
*/

/*
    A
   / \
  /   \
B       E
|\     / |
| \   /  |
C  \ /   F
  \ D /
*/

// console.log(graph.breadthFirstIterative("A"));
