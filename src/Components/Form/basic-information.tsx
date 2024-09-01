import { Form, Input, Button, Table } from "antd";
import { useState } from "react";
import UserAutoComplete from "./user-autocomplete";
import CustomTable from "./customTable";

interface Props {
  initialValue?: any;
  showTable?: boolean;
}

function BasicInformation({ showTable }: Props) {
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState([
    { key: "1", code: "001", default: true },
    { key: "2", code: "003", default: false },
    { key: "3", code: "004", default: false },
    { key: "4", code: "005", default: false },
    { key: "5", code: "006", default: false },
  ]);

  const handleDelete = (key: string) => {
    setDataSource(dataSource.filter((item) => item.key !== key));
  };

  const handleDefaultChange = (key: string, checked: boolean) => {
    setDataSource(
      dataSource.map((item) => ({
        ...item,
        default: item.key === key ? checked : false,
      }))
    );
  };

  const columns = [
    { title: "عملیات", dataIndex: "actions", key: "actions" },
    { title: "پیشفرض", dataIndex: "default", key: "default" },
    { title: "کد", dataIndex: "code", key: "code" },
  ];

  return (
    <Form form={form}>
      <Form.Item name="title" label="عنوان" labelCol={{ span: 2 }}>
        <Input />
      </Form.Item>
      <Form.Item name="code" label="کد" labelCol={{ span: 2 }}>
        <Input />
      </Form.Item>
      <Form.Item name="users" label="کاربران" labelCol={{ span: 2 }}>
        <UserAutoComplete />
      </Form.Item>
      {showTable && (
        <Form.Item wrapperCol={{ offset: 2 }}>
          <CustomTable
            columns={columns}
            dataSource={dataSource}
            onDelete={handleDelete}
            onDefaultChange={handleDefaultChange}
          />
        </Form.Item>
      )}
      <Form.Item wrapperCol={{ offset: 2 }}>
        <Button type="primary" htmlType="submit">
          ذخیره
        </Button>
      </Form.Item>
    </Form>
  );
}
export default BasicInformation;
