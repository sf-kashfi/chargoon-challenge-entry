import { Form, Input, Button, Checkbox } from "antd";
import { useEffect, useState } from "react";
import UserAutoComplete from "./user-autocomplete";
import CustomTable from "./customTable";

interface Props {
  initialValue?: any;
  item?: any;
}

function BasicInformation({ item }: Props) {
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    if (item?.users && item.users.length > 0) {
      setDataSource(
        item.users.map((user: any, index: any) => ({
          key: `${index + 1}`,
          code: user.title,
          default: user.isDefault,
        }))
      );
    } else {
      setDataSource([]);
    }
  }, [item]);

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
    {
      title: "عملیات",
      dataIndex: "actions",
      key: "actions",
      render: (_: any, record: any) => (
        <Button type="link" onClick={() => handleDelete(record.key)}>
          حذف
        </Button>
      ),
    },
    {
      title: "پیشفرض",
      dataIndex: "default",
      key: "default",
      render: (defaultValue: boolean, record: any) => (
        <Checkbox
          checked={defaultValue}
          onChange={(e) => handleDefaultChange(record.key, e.target.checked)}
        />
      ),
    },
    {
      title: "کد",
      dataIndex: "code",
      key: "code",
    },
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
      {dataSource.length > 0 && (
        <Form.Item wrapperCol={{ offset: 2 }}>
          <CustomTable
            columns={columns}
            dataSource={dataSource}
            onDelete={handleDelete}
            onDefaultChange={handleDefaultChange}
          />
        </Form.Item>
      )}
    </Form>
  );
}
export default BasicInformation;
