import { AutoComplete, Button } from 'antd';
import React, { useRef, useState } from 'react';


const UserAutoComplete: React.FC = () => {
	const orginalOptions = useRef([
		{
			value: '1',
			label: '1'
		},
		{
			value: '2',
			label: '2'
		}
	])
  const [options, setOptions] = useState<{ value: string }[]>(orginalOptions.current);

  const onSearch = (searchText: string) => {
    setOptions(
      orginalOptions.current.filter(o => o.label.indexOf(searchText) > -1 )
    );
  };

  const onSelect = (data: string) => {
    console.log('onSelect', data);
  };

  return (
    <>
      <AutoComplete
        options={options}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={onSearch}
        placeholder="جستجوی کاربر"
      />
     <Button >افزودن</Button>
    </>
  );
};

export default UserAutoComplete;