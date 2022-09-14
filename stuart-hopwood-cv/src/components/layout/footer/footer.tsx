/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";
import { style } from "./footer.css";

export function Footer({ children }: { children?: ReactNode }) {
  const GetYear = () => {
    var date = new Date();
    return date.getFullYear();
  };

  return (
    <footer css={style}>
      &copy; Stuart Hopwood {GetYear()}
      {children}
    </footer>
  );
};
