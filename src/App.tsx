import { useEffect, useContext, useState, useMemo } from "react";
import Form from "./Components/Detail";
import Sidebar from "./Components/Sidebar";
import ExtendedTree from './Components/Tree'
import { createMockData } from "./Components/Tree/mockData";

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showEdit, setShowEdit] = useState(true);
  const treeData = useMemo(() => createMockData(), []);
  
  const handleContextMenuClick = (actionKey: any) => {
    switch(actionKey){
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
