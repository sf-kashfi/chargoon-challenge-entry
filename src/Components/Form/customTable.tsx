import React from "react";
import { Popover, Button, Checkbox } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

interface CustomTableProps {
  columns: Array<{ title: string; key: string }>;
  dataSource: Array<{ key: string; [key: string]: any }>;
  onDelete: (key: string) => void;
  onDefaultChange: (key: string, checked: boolean) => void;
}

function CustomTable({
  columns,
  dataSource,
  onDelete,
  onDefaultChange,
}: CustomTableProps) {
  const renderActions = (recordKey: string) => (
    <Popover
      content={
        <Button type="text" onClick={() => onDelete(recordKey)}>
          حذف
        </Button>
      }
      trigger="click"
    >
      <EllipsisOutlined style={{ cursor: "pointer" }} />
    </Popover>
  );

  const renderDefaultCheckbox = (recordKey: string, isDefault: boolean) => (
    <Checkbox
      checked={isDefault}
      onChange={(e) => onDefaultChange(recordKey, e.target.checked)}
    />
  );

  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginBottom: "20px",
      }}
    >
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              key={col.key}
              style={{
                border: "1px solid black",
                backgroundColor: "#f3f0f0",
                padding: "8px",
                textAlign: "right",
              }}
            >
              {col.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataSource.map((data) => (
          <tr key={data.key}>
            {columns.map((col) => (
              <td
                key={col.key}
                style={{ border: "1px solid gray", padding: "8px" }}
              >
                {col.key === "actions"
                  ? renderActions(data.key)
                  : col.key === "default"
                  ? renderDefaultCheckbox(data.key, data[col.key])
                  : data[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CustomTable;
