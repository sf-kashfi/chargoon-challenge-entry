import { useEffect, useContext, useState, useMemo } from "react";
import AppContext from "./appContext";
import Form from "./Components/Form";
import Sidebar from "./Components/Sidebar";
import ExtendedTree from "./Components/Tree";
import { getNodes } from "./transportLayer";
import { NodeType } from "./types";

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showEdit, setShowEdit] = useState(true);
  const [treeData, setTreeData] = useState([]);
  const [cutNode, setCutNode] = useState(null);

  const fetchTreeData = async () => {
    const result = await getNodes();
    setTreeData(result);
  };

  useEffect(() => {
    fetchTreeData();
  }, []);

  const handleContextMenuClick = (actionKey: string, nodeKey: string) => {
    switch (actionKey) {
      case "ACTION2":
        const nodeToCut = findNodeByKey(nodeKey, treeData);
        setCutNode(nodeToCut);
        break;
      case "ACTION3":
        if (cutNode) {
          let newTreeData = removeNode(cutNode.key, treeData);
          newTreeData = addNodeAsChild(nodeKey, cutNode, newTreeData);
          setCutNode(null);
          handleUpdateTree(newTreeData);
        }
        break;
      case "ACTION4":
        const node = findNodeByKey(nodeKey, treeData);
        if (node && (!node.children || node.children.length === 0)) {
          const newTreeData = removeNode(nodeKey, treeData);
          handleUpdateTree(newTreeData);
        }
        break;
    }
  };

  const handleUpdateTree = (nodes: NodeType[]) => {
    setTreeData(nodes);
  };

  const handleUpdateNode = (key: string, data: any) => {};

  const findNodeByKey = (key: string, nodes: NodeType[]): any => {
    for (let node of nodes) {
      if (node.key === key) return node;
      if (node.children) {
        const found = findNodeByKey(key, node.children);
        if (found) return found;
      }
    }
    return null;
  };

  const removeNode = (key: string, nodes: NodeType[]): NodeType[] => {
    return nodes.filter((node) => {
      if (node.key === key) {
        return false;
      }
      if (node.children) {
        node.children = removeNode(key, node.children);
      }
      return true;
    });
  };

  const addNodeAsChild = (
    parentKey: string,
    newNode: NodeType,
    nodes: NodeType[]
  ): NodeType[] => {
    return nodes.map((node) => {
      if (node.key === parentKey) {
        node.children = node.children ? [...node.children, newNode] : [newNode];
      } else if (node.children) {
        node.children = addNodeAsChild(parentKey, newNode, node.children);
      }
      return node;
    });
  };

  return (
    <AppContext.Provider
      value={{
        treeData,
        updateTreeData: handleUpdateTree,
      }}
    >
      <div className="App">
        <Sidebar>
          <ExtendedTree handleContextMenuClick={handleContextMenuClick} />
        </Sidebar>
        {showEdit && <Form item={selectedItem} updateNode={handleUpdateNode} />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
