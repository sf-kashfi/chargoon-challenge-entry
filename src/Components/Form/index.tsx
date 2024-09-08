import { Form, Input, Tabs, Button } from "antd";
import React from "react";
import ErrorBoundry from "../../ErrorBoundry";
import ActionBar from "../ActionBar";
import ArrowDownIcon from "../SvgIcons/arrow-down";
import ArrowUpIcon from "../SvgIcons/arrow-up";
import Accesses from "./accesses";
import BasicInformation from "./basic-information";
import UsersList from "./user-autocomplete";

interface Props {
  item: any;
  updateNode: (key: string, data: any) => void;
}

function FormComponent({ item, updateNode }: Props) {
  const [basicForm] = Form.useForm();
  const [accessForm] = Form.useForm();

  // const handleSave = () => {
  //   updateNode("key", {});
  // };

  const handleSave = async () => {
    try {
      
      const basicInfo = await basicForm.validateFields();
      const accesses = accessForm.getFieldsValue();

      
      const formData = {
        ...basicInfo,
        accesses: accesses.accesses,
      };

      updateNode(item?.key, formData);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <div className="detail">
      <div>
        <Tabs>
          <Tabs.TabPane tab="اطلاعات اصلی" key="item-1">
            <div className="form-content">
              <BasicInformation
                form={basicForm}
                initialValue={item?.data?.basicInformation}
                item={item}
              />
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="دسترسی ها" key="item-2">
            <div className="form-content">
              <ErrorBoundry>
                <Accesses
                  form={accessForm}
                  initialValue={item?.data?.accesses}
                />
              </ErrorBoundry>
            </div>
          </Tabs.TabPane>
        </Tabs>
        <Button type="primary" onClick={handleSave}>
          ذخیره
        </Button>
      </div>
      <ActionBar actions={[]} />
    </div>
  );
}
export default FormComponent;
