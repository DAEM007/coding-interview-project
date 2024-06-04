// ============= DIJKSTRA'S ALGORITHM =================

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val: val, priority: priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ vertex: vertex2, weight: weight });
    this.adjacencyList[vertex2].push({ vertex: vertex1, weight: weight });
  }
  dijkstra(start, finish) {
    let nodes = new PriorityQueue();
    let distance = {};
    let previous = {};
    let smallest;
    let path = [];

    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distance[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distance[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    while (nodes.values.length !== 0) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        // we are done...then, we build path to return at the end...
        while (previous[smallest] !== null) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distance[smallest] !== Infinity) {
        for (let i = 0; i < this.adjacencyList[smallest].length; i++) {
          let neighbor = this.adjacencyList[smallest][i];
          let newDistance = distance[smallest] + neighbor.weight;
          let neighborVertex = neighbor.vertex;
          if (newDistance < distance[neighborVertex]) {
            distance[neighborVertex] = newDistance;
            previous[neighborVertex] = smallest;
            nodes.enqueue(neighborVertex, newDistance);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
console.log(graph);

console.log(graph.dijkstra("A", "E"));

// ["A", "C", "D", "F", "E"]
