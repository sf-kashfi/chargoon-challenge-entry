// @ts-nocheck
import React from "react";
import {
  ContextMenuTrigger,
  ContextMenu,
  ContextMenuItem,
} from "rctx-contextmenu";

export function ContextMenuTriggerEx({ id, title }) {
  return <ContextMenuTrigger id={id}>{title}</ContextMenuTrigger>;
}

export function ContextMenuEx({ id, children }) {
  return <ContextMenu id={id}>{children}</ContextMenu>;
}

export function ContextMenuItemEx({ title, handleClick, action, nodeKey }) {
  return (
    <ContextMenuItem onClick={() => handleClick(action, nodeKey)}>
      {title}
    </ContextMenuItem>
  );
}
