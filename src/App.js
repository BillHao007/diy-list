import { Menu } from 'antd';
import { Routes, Route, Link } from 'react-router-dom';
import { UnorderedListOutlined, InboxOutlined } from '@ant-design/icons';
import Equipment from './pages/Equipments/Equipments';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="side-bar">
        <Menu
          style={{ height: '100%' }}
          defaultSelectedKeys={['list']}
          items={[
            {
              key: 'list',
              label: <Link to="/list">配置清单</Link>,
              icon: <UnorderedListOutlined />
            },
            {
              key: 'repo',
              label: <Link to="/repo">配置仓库</Link>,
              icon: <InboxOutlined />, 
            }
          ]}
        />
      </div>
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Equipment />} />
          <Route path="/list" element={<div>配置清单</div>} />
          <Route path="/repo" element={<div>配置仓库</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
