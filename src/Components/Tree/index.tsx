import { Input, Tree } from "antd";
import type { DataNode } from "antd/es/tree";
import { useContext, useMemo, useRef, useState } from "react";
import AppContext from "../../appContext";
import { NodeType } from "../../types";
import Node from "./node";
import SearchResult from "./searchResult";

const { Search } = Input;

interface Props {
  handleContextMenuClick: (actionKey: string, nodeKey: string) => void;
  setSelectedItem: (node: NodeType | null) => void;
}

const TreeExtended: React.FC<Props> = ({ handleContextMenuClick, setSelectedItem  }) => {
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const searchedKeyword = useRef<string>("");
  const [searchResultVisible, setSearchResultVisible] = useState(false);
  const [searchResultOpen, setSearchResultOpen] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const { treeData } = useContext(AppContext);
  const onExpand = (newExpandedKeys: any[]) => {
    setExpandedKeys(newExpandedKeys);
    setAutoExpandParent(false);
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchedKeyword.current = e.target.value;
  };

  const handlePressEnter = () => {
    setSearchResultVisible(true);
    const result = filterNodes(treeData)
    setFilteredData(result)
  };


  const filterNodes = (nodes : NodeType[]) : NodeType[] => {
    return nodes.reduce<NodeType[]>((acc, node)=> {
      const exist = node.title.toLowerCase().includes(searchedKeyword.current.toLowerCase());
      let filteredChildren: NodeType[] = []
      if (node.children.length > 0) {
        filteredChildren = filterNodes(node.children)
      }

      if (exist) {
        acc.push({...node})

      }

      if ( filteredChildren.length > 0) {
        acc.push(...filteredChildren)
        
      }

      return acc;
    }, [])
  }
  

  const titleRenderer = (node: NodeType) => {
    return (
      <div onClick={() => setSelectedItem(node)}>
        <Node node={node} handleContextMenuClick={handleContextMenuClick} />
      </div>
    );
  };

  return (
    <div className="tree-wrap">
      <Search
        style={{ marginBottom: 8 }}
        placeholder="جستجو"
        onChange={handleSearchInputChange}
        onPressEnter={handlePressEnter}
      />
      <Tree
        onExpand={onExpand}
        expandedKeys={expandedKeys}
        autoExpandParent={autoExpandParent}
        treeData={treeData}
        titleRender={titleRenderer}
      />
      {searchResultVisible && <SearchResult items={filteredData} />}
    </div>
  );
};

export default TreeExtended;
