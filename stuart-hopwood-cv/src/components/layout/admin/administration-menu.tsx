/** @jsxImportSource @emotion/react */
import { style } from "./administration-menu.css";
import { AdminMenuLink } from "../../controls";
import { FaBahai, FaBookMedical, FaUserAlt } from "react-icons/fa";
import { ReactNode } from "react";

export function AdminMenu({ children }: { children?: ReactNode }) {
  return <div css={style}>
    <AdminMenuLink to="/admin/about-text" value="About Text">
      <FaUserAlt />
    </AdminMenuLink>
    <AdminMenuLink to="/admin/badges" value="Badges">
      <FaBahai />
    </AdminMenuLink>
    <AdminMenuLink to="/admin/skills" value="Skills">
      <FaBookMedical />
    </AdminMenuLink>
  </div>;
};

export default AdminMenu;
