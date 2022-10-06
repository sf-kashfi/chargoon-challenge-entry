import { useEffect, useContext, useState, useMemo } from "react";
import Form from "./Components/Form";
import Sidebar from "./Components/Sidebar";
import ExtendedTree from './Components/Tree'
import { getNodes } from "./transportLayer";

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showEdit, setShowEdit] = useState(true);
  const [treeData, setTreeData] = useState([]);

  const fetchTreeData = async () => {
    const result = await getNodes();
    setTreeData(result);
  }

  useEffect(() => {
    fetchTreeData()
  }, [])

  const handleContextMenuClick = (actionKey: any) => {
    switch (actionKey) {
      case '':
        break;
    }
  }

  const handleUpdateNode = (key: string, data: any) => {

  }

  return (
      <div className="App">
        <Sidebar>
          <ExtendedTree treeData={treeData} handleContextMenuClick={handleContextMenuClick} />
        </Sidebar>
        {showEdit && <Form item={selectedItem} updateNode={handleUpdateNode} />}
      </div>
  );
}

export default App;
