import React, { FC } from "react";
import {
  Link,
  Outlet,
} from "react-router-dom";
const Layout: FC = () => (
  <div>
    <h2>Layout page</h2>
    <ul>
      <li>
        <Link to="/personals">Public Page</Link>
      </li>
      <li>
        <Link to="/merchants">Protected Page</Link>
      </li>
    </ul>
    <Outlet />
  </div>
);

export default Layout;
