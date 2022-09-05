import { Form, Input } from 'antd';
import React from 'react';

interface Props { 
	initialValue?: any;
}

function BasicInformation({ }: Props) {
	const [form] = Form.useForm();

	return (
		<Form form={form}>
			<Form.Item name="title" label="عنوان">
				<Input />
			</Form.Item>
			<Form.Item name="code" label="کد">
				<Input />
			</Form.Item>
		</Form>
	);
}
export default BasicInformation