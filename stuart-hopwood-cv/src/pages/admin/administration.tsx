import React, { useEffect } from "react";
import { AdminMenu, Page } from "../../components/layout";
import { gridClasses } from "./administration.css";

function Banner() {
  return (
    <React.Fragment>
      <h1 className="inverse">Admin Area</h1>
    </React.Fragment>
  );
};

function Admin() {

  useEffect(() => {
    if (sessionStorage.getItem("authPending") == "true") {
      sessionStorage.removeItem("authPending")
    }

  }, [])

  return (
    <React.Fragment>
      <Page id="Administration" fullscreen={false} BannerContent={Banner}>
        <div className={gridClasses.grid}>
          <AdminMenu />
          <p>This is the Admin Area. To update the CV Sections click on the links to the left.</p>
        </div>
      </Page>
    </React.Fragment>
  );
}

export default Admin;
