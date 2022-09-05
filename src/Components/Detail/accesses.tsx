import React from 'react';
import { Checkbox } from 'antd';

interface Props { 
	initialValue?: any;
}

function Accesses({}: Props) {
	const options = [
		{ label: 'ارسال نامه', value:  'Send_Letter' },
		{ label: 'ویرایش نامه', value: 'Edit_Letter' },
		{ label: 'مشاهده نامه', value: 'View_Letter' },
	];

	function handleOnChange() {

	}

	return (
		<Checkbox.Group options={options}  onChange={handleOnChange} />

	);}
export default Accesses