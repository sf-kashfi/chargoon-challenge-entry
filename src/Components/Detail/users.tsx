import React from 'react';
import { Checkbox } from 'antd';

interface Props { }
function UsersList({ }: Props) {

	const options = [
		{ label: 'user1', value: 'user1' },
		{ label: 'user2', value: 'user2' },
		{ label: 'user3', value: 'user3' },
	];

	function handleOnChange() {

	}

	return (
		<Checkbox.Group options={options} onChange={handleOnChange} />

	);
}
export default UsersList