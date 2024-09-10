import { useState, useContext } from "react";
import { NodeType } from "../../types";
import ArrowDownIcon from "../SvgIcons/arrow-down";
import ArrowUpIcon from "../SvgIcons/arrow-up";
import OrgchartIcon from "../SvgIcons/orgchart";
import { Popover, Button, Tree } from "antd";
import AppContext from "../../appContext";
interface Props {
  items: (NodeType & { hierarchy: string[] })[];
}

function SearchResult({ items }: Props) {
  const [isOpen, setIsOpen] = useState(true);
  const { treeData } = useContext(AppContext);

  const toggleWindow = () => {
    setIsOpen(!isOpen);
  };

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

  const renderAncestorTree = (node: NodeType) => {
    const parentNode = node.parentKey
      ? findNodeByKey(node.parentKey, treeData)
      : null;
    const grandparentNode = parentNode?.parentKey
      ? findNodeByKey(parentNode.parentKey, treeData)
      : null;

    const treeDataForPopover = [
      grandparentNode
        ? {
            title: grandparentNode.title,
            key: grandparentNode.key,
            children: [
              {
                title: parentNode?.title || "",
                key: parentNode?.key || "",
                children: [
                  {
                    title: node.title,
                    key: node.key,
                  },
                ],
              },
            ],
          }
        : parentNode
        ? {
            title: parentNode.title,
            key: parentNode.key,
            children: [
              {
                title: node.title,
                key: node.key,
              },
            ],
          }
        : {
            title: node.title,
            key: node.key,
          },
    ];

    return <Tree treeData={treeDataForPopover} defaultExpandAll />;
  };

  return (
    <div className="search-result">
      <div className="arrow-icon-container" onClick={toggleWindow}>
        {isOpen ? <ArrowDownIcon /> : <ArrowUpIcon />}
      </div>

      <div
        className="search-result-content"
        style={{ height: isOpen ? 200 : 0 }}
      >
        {isOpen &&
          items.map((item) => (
            <div className="search-result-item">
              {item.title}

              <Popover
                placement="leftBottom"
                trigger="click"
                content={renderAncestorTree(item)}
              >
                <Button type="text" icon={<OrgchartIcon />} />
              </Popover>
            </div>
          ))}
      </div>
    </div>
  );
}
export default SearchResult;
