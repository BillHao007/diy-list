import { Tabs, Table } from 'antd';
import EditableTable from '../../components/EditableTable';

export default function Equipment() {
  return (
    <div className="equipment">
      <EditableTable />
      {/* <Tabs 
        items={[
          {
            label: 'CPU',
            key: 'CPU',
          }
        ]}
      /> */}
    </div>
  )
}