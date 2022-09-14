/** @jsxImportSource @emotion/react */
import React from "react";
import { jsx } from "@emotion/react";
import { AdminMenu, Page } from "../../components/layout";
import { grid } from "./administration.css";

const Banner: React.FC = () => {
  return (
    <React.Fragment>
      <h1 className="inverse">Admin Area</h1>
    </React.Fragment>
  );
};
function Admin() {
  return (
    <React.Fragment>
      <Page id="Administration" fullscreen={false} BannerContent={Banner}>
        <div css={grid}>
          <AdminMenu />
          <p>This is the Admin Area. To update the CV Sections click on the links to the left.</p>
        </div>
      </Page>
    </React.Fragment>
  );
}

export default Admin;
