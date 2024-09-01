import React from "react";
import { NodeType } from "../../types";
import {
  ContextMenuTriggerEx,
  ContextMenuItemEx,
  ContextMenuEx,
} from "../ContextMenu";

interface Props {
  node: NodeType;
  handleContextMenuClick: (actionKey: string, nodeKey: string) => void;
}

function Node({ node, handleContextMenuClick }: Props) {
  return (
    <div>
      {/* NOTICE: id must be unique between EVERY <ContextMenuTrigger> and <ContextMenu> pair */}
      {/* NOTICE: inside the pair, <ContextMenuTrigger> and <ContextMenu> must have the same id */}
      <ContextMenuTriggerEx id={node.key} title={node.title} />

      <ContextMenuEx id={node.key}>
        <ContextMenuItemEx handleClick={handleContextMenuClick} action={'ACTION1'} nodeKey={node.key} title={"افزودن زیرشاخه"} />
        <ContextMenuItemEx handleClick={handleContextMenuClick} action={'ACTION2'} nodeKey={node.key} title={"برش"} />
        <ContextMenuItemEx handleClick={handleContextMenuClick} action={'ACTION3'} nodeKey={node.key} title={"چسباندن"} />
        <ContextMenuItemEx handleClick={handleContextMenuClick} action={'ACTION4'} nodeKey={node.key} title={"حذف"} />
      </ContextMenuEx>
    </div>
  );
}
export default Node;
