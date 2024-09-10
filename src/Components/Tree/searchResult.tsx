import { useState } from "react";
import { NodeType } from "../../types";
import ArrowDownIcon from "../SvgIcons/arrow-down";
import ArrowUpIcon from "../SvgIcons/arrow-up";
interface Props {
  items: (NodeType & { hierarchy: string[] })[];
}

function SearchResult({ items }: Props) {
  const [isOpen, setIsOpen] = useState(true);
  const toggleWindow = () => {
    setIsOpen(!isOpen);
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
        {isOpen && items.map((item) => <div>{item.title}</div>)}
      </div>
    </div>
  );
}
export default SearchResult;
