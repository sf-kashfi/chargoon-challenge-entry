import React, { useEffect, useState } from "react";
import { Checkbox, Button } from "antd";
import { getAccessList } from "../../transportLayer";

interface Props {
  initialValue?: any;
}

function Accesses({}: Props) {
  const [options, setOptions] = useState([]);

  const fetchAccessList = async () => {
    const result = await getAccessList();
    setOptions(result);
  };

  useEffect(() => {
    fetchAccessList();
  }, []);

  function handleOnChange() {}

  return (
    <div>
      <Checkbox.Group options={options as any} onChange={handleOnChange} />
      <div style={{ marginTop: 16 }}>
        <Button type="primary">
          ذخیره
        </Button>
      </div>
    </div>
  );
}
export default Accesses;
