// ============= GRAPHS =================

// === what are graphs? ===
// A graph data structure is simply a collection of nodes(vertices or points) and connections (edges).
// They could either be DIRECTED OR UNDIRECTED.

// === Applications of graph ===
// 1. social networks.
// 2. Location/Mapping.
// 3. Routing Algorithms.
// 4. visual hierarchy.
// 5. File system optimizations.

// === Essential graph terms ===
// 1. Vertex: Is simply a NODE.
// 2. Edge: connection between nodes(vertices).
// 3. Weighted/Unweighted: values assigned to distance between vertices.

// Note: Weighted simply means the edges have additional details like numbers while unweighted
// just means the exact opposite.

// 4. Directed/Undirected: directions assigned to distance between vertices.

// Note: Directed simply means the connection is a directed one-way while Undirected means it's
// directed two-way.

// === How to store a graph? ===
// There are various ways to store a graph...but the two standard way are as follows:
// 1. Adjacency Matrix.
// 2. Adjacency List.

// === BIG-O of adjacency list vs adjacency matrix ===
// 1. List takes up less space compared to matrix.
// 2. Faster to iterate over edges in a list compared to matrix.
// 3. Can be slower to look up specific edge on a list compared to matrix.

// Now, to the fun part...let's implement an adjacency List for an UNDIRECTED GRAPH (2-way direction)...

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
}

let graph = new Graph();
graph.addVertex("Dallas");
graph.addVertex("Tokyo");
graph.addVertex("Aspen");
graph.addVertex("Los Angeles");
graph.addVertex("Hong Kong");
graph.addEdge("Dallas", "Tokyo");
graph.addEdge("Dallas", "Aspen");
graph.addEdge("Hong Kong", "Tokyo");
graph.addEdge("Hong Kong", "Dallas");
graph.addEdge("Los Angeles", "Hong Kong");
graph.addEdge("Los Angeles", "Aspen");
// graph.removeVertex("Hong Kong");
console.log(graph);
