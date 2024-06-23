// components
import { Menu } from "antd";

const items = [
  {
    key: "grp",
    type: "group",
    children: [
      { key: "1", label: "Home" },
      { key: "2", label: "Calendar" },
    ],
  },
];

const Sidebar = () => {
  const selectDashboardItem = (e) => {};

  return (
    <div style={{ height: "92vh" }}>
      <Menu
        onClick={selectDashboardItem}
        style={{ width: 256, height: "100vh" }}
        className="sidebar-container pt-1"
        defaultSelectedKeys={["g2"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </div>
  );
};

export default Sidebar;