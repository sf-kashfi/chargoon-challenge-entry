import { useState } from "react";
import { NodeType } from "../../types";
import ArrowDownIcon from "../SvgIcons/arrow-down";
import ArrowUpIcon from "../SvgIcons/arrow-up";
interface Props {
  items: (NodeType & { hierarchy: string[] })[];

}

function SearchResult({ items,  }: Props) {
  const [isOpen, setIsOpen] = useState(true);
  const toggleWindow = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="search-result" style={{ height: isOpen? 200 : 0 , overflow: "auto" }}>
      <div style={{width: '100%', textAlign: 'center'}} onClick={toggleWindow}>
		<div style={{width: '20px', height: '20px',}}>
          {isOpen ? <ArrowDownIcon /> : <ArrowUpIcon />}
		</div>
      </div>
      {isOpen && items.map((item) => (
        <div>{item.title}</div>
      ))}
    </div>
  );
}
export default SearchResult;
