/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";
import { form } from "./administration-form.css";

export function AdminForm({ children }: { children: ReactNode }) {
  return <form noValidate autoComplete="off" css={form}>
    {children}
  </form>
};

export default AdminForm;
