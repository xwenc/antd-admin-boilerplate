import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd/es/menu";


type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("注册", "register", <SettingOutlined />, [
    getItem(<Link to="/personals">个人</Link>, "register-personal"),
    getItem(<Link to="/merchants">商家</Link>, "register-merchant"),
  ]),
];

const MyMenu: FC = () => {
  return (
    <Menu
      style={{ width: 256 }}
      defaultSelectedKeys={["register-personal"]}
      defaultOpenKeys={["register"]}
      mode="inline"
      theme="light"
      items={items}
    />
  );
};

export default MyMenu;
