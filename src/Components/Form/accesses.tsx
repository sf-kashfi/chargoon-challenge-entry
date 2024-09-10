import React, { useEffect, useState } from "react";
import { Form, Checkbox, Button } from "antd";
import { getAccessList } from "../../transportLayer";

interface Props {
  initialValue?: any;
  form?: any;
}

function Accesses({ initialValue, form }: Props) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (initialValue) {
      form.setFieldsValue({ accesses: initialValue });
    } else {
      form.resetFields(); 
    }

  }, [initialValue]);

  const fetchAccessList = async () => {
    const result = await getAccessList();
    setOptions(result);
  };

  useEffect(() => {
    fetchAccessList();
  }, []);

  function handleOnChange() {}

  return (
    <Form form={form}>
      <Form.Item name="accesses">
        <Checkbox.Group options={options as any} onChange={handleOnChange} />
      </Form.Item>
    </Form>
  );
}
export default Accesses;
