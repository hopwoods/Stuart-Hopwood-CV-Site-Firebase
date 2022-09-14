/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { form } from "./administration-form.css";

export const AdminForm: React.FC = ({ children }) => {
  return <form noValidate autoComplete="off" css={form}>
    {children}
  </form>
};

export default AdminForm;
