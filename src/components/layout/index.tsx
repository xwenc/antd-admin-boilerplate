import React, { FC } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Layout } from "antd";
import styles from "./index.module.less";
import { useAuth } from "@contexts/auth.context";

import Sider from "./sider";
import Header from "./header";
const { Content } = Layout;
const MyLayout: FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const siderProps = {};
  const headerProps = {
    username: auth.user,
    avatar: "",
    signout: () => {
      auth.signout(() => navigate("/"));
    },
  };
  return (
    <Layout>
      <Sider {...siderProps} />
      <div className={styles.container} style={{ paddingTop: 72 }}>
        <Header {...headerProps} />
        <Content className={styles.content}>
          <Outlet />
        </Content>
      </div>
    </Layout>
  );
};

export default MyLayout;

// <div>
//     <h2>Layout page</h2>
//     <ul>
//       <li>
//         <Link to="/personals">Public Page</Link>
//       </li>
//       <li>
//         <Link to="/merchants">Protected Page</Link>
//       </li>
//     </ul>
//     <Outlet />
//   </div>
