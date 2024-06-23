import axios from 'axios';
import { RadarChartOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Input, notification, Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';


// hooks
import { useLayoutEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";

const items = [
    {
      key: 'sub1',
      label: 'Navigation One',
      icon: <MailOutlined />,
      children: [
        {
          key: 'g1',
          label: 'Item 1',
          type: 'group',
          children: [
            { key: '1', label: 'Option 1' },
            { key: '2', label: 'Option 2' },
          ],
        },
        {
          key: 'g2',
          label: 'Item 2',
          type: 'group',
          children: [
            { key: '3', label: 'Option 3' },
            { key: '4', label: 'Option 4' },
          ],
        },
      ],
    },
    {
      key: 'sub2',
      label: 'Navigation Two',
      icon: <AppstoreOutlined />,
      children: [
        { key: '5', label: 'Option 5' },
        { key: '6', label: 'Option 6' },
        {
          key: 'sub3',
          label: 'Submenu',
          children: [
            { key: '7', label: 'Option 7' },
            { key: '8', label: 'Option 8' },
          ],
        },
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'sub4',
      label: 'Navigation Three',
      icon: <SettingOutlined />,
      children: [
        { key: '9', label: 'Option 9' },
        { key: '10', label: 'Option 10' },
        { key: '11', label: 'Option 11' },
        { key: '12', label: 'Option 12' },
      ],
    },
    {
      key: 'grp',
      label: 'Group',
      type: 'group',
      children: [
        { key: '13', label: 'Option 13' },
        { key: '14', label: 'Option 14' },
      ],
    },
  ];

function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
}

const Sidebar = () => {
  const navigate = useNavigate();

  
  // Onchange handler
  const changeHandler =(e)=>{
   
  }
  
  const selectDashboardItem = (e) => {
    // console.log("E",e)
    //   navigate(e?.key)
  };
      
  return (
    <div style={{ height: "92vh" }}>
      <Menu
        onClick={selectDashboardItem}
        style={{ width: 256, height: 'fit-content' }}
        className='sidebar-container pt-1'
        defaultSelectedKeys={['g2']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
      />
    </div>
  )
}

export default Sidebar