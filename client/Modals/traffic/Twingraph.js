class Twingraph {

    constructor(nodes, edges, type, busyness, color) {
        this.nodes = nodes;
        this.edges = edges;
        this.type = type;
        this.busyness = busyness;
    }

    /**
     * returns info of the graph and the selected edge inside it
     * 
     * @param {*} node1 first node of the selected edge in the graph
     * @param {*} node2 second node of the selected edge in the graph
     * @returns the information of the graph in string form
     */
    getInfo(node1, node2) {
        let info = `node1: ${node1.ID}, <br>
                node2: ${node2.ID}, <br>
                type: ${this.type}, <br>
                busyness: ${this.busyness}`;
        return info;
    }

    /**
     * inserts each edge of the graph using the location of the first node and second node to place it in the digital twin.
     * for each edge in the graph, it looks for the nodes that matches the firstID and secondID of the edge and makes values out of them.
     * calls up a method afterwards with a list of coordinations of the two nodes, the color of the edge and information of the graph/edge
     * that's being called by a different function
     * 
     * @param {*} edgeDisplay method used to display the edges inside the digital twin
     * @param {*} TwinColor the color given to the edge
     */
    SetupGraph(edgeDisplay, TwinColor) {

            this.edges.forEach(EdgeData => {
                const firstNode = this.nodes.find(Node1 => Node1.ID === EdgeData.firstId);
                const secondNode = this.nodes.find(Node2 => Node2.ID === EdgeData.secondId);
          
                edgeDisplay([firstNode.point1, firstNode.point2, secondNode.point2, secondNode.point1], TwinColor, this.getInfo(firstNode, secondNode));
              });
    }
    

    ShortestPath(node1, node2) {
        const relevantnodes = [];
        this.edges.forEach(EdgeData => {
            const nearestNode = this.nodes.find
        })
    }

}

export default Twingraph;

// class node extends edge {
//     constructor(ID, locatie) {
//         this.ID = ID;
//         this.point1 = this.point1;
//         this.point2 = this.point2;
//     }

//  }



//  class edge {
//     constructor(firstId, secondId) {
//         this.firstId = firstId;
//         this.secondId = secondId;
//     }
//  }