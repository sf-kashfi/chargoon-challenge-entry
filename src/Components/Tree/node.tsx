// @ts-nocheck
import React from 'react';
import { ContextMenuTrigger, ContextMenu, ContextMenuItem } from 'rctx-contextmenu';
import { NodeType } from '../../types';

interface Props {
	node: NodeType;
	handleContextMenuClick: (key: string) => void;
}

function Node({node, handleContextMenuClick}: Props) {
	return (
    <div>
      {/* NOTICE: id must be unique between EVERY <ContextMenuTrigger> and <ContextMenu> pair */}
      {/* NOTICE: inside the pair, <ContextMenuTrigger> and <ContextMenu> must have the same id */}
			<ContextMenuTrigger
        id={node.key}
      >
         {node.title}
      </ContextMenuTrigger>

      <ContextMenu  id={node.key}>
        <ContextMenuItem onClick={() => {handleContextMenuClick('ACTION1')}}>افزودن زیرشاخه</ContextMenuItem>
        <ContextMenuItem onClick={() => {handleContextMenuClick('ACTION2')}}>برش</ContextMenuItem>
        <ContextMenuItem onClick={() => {handleContextMenuClick('ACTION3')}}>چسباندن</ContextMenuItem>
        <ContextMenuItem onClick={() => {handleContextMenuClick('ACTION4')}}>حذف</ContextMenuItem>
      </ContextMenu>
 
    </div>
  );
}
export default Node