import { Input, Tree } from "antd";
import type { DataNode } from "antd/es/tree";
import React, { useContext, useMemo, useRef, useState } from "react";
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
  const searchedKeyword = useRef();
  const [searchResultVisible, setSearchResultVisible] = useState(true);
  const { treeData } = useContext(AppContext);

  const onExpand = (newExpandedKeys: any[]) => {
    setExpandedKeys(newExpandedKeys);
    setAutoExpandParent(false);
  };

  const handleSearchInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {};

  const handlePressEnter = () => {
    setSearchResultVisible(true);
  };

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
      {searchResultVisible && <SearchResult items={[]} />}
    </div>
  );
};

export default TreeExtended;
