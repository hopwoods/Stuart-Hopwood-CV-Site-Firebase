/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import AdminForm from "../../components/layout/admin/administration-form";
import 'react-toastify/dist/ReactToastify.min.css';
import { jsx } from "@emotion/react";
import { AdminMenu, Loading, Page } from "../../components/layout";
import { title, aboutTextField, saveButton } from "./admin-about-text.css";
import { grid } from "./administration.css";
import { NavLink } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import { ToastContainer } from 'react-toastify';
import { useAboutTextStore } from "../../state";

const Banner: React.FC = () => {
  return (
    <h1 className="inverse">Edit About Text</h1>
  );
};

export const AdminAboutText: React.FC = () => {
  const { id, text, loading, setText, getAboutText, updateAboutText } = useAboutTextStore();

  useEffect(() => {
    getAboutText();
  }, [getAboutText]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(id, e.target.value);
  };

  return (
    <React.Fragment>
      <Page id="Edit About Text" fullscreen={false} BannerContent={Banner}>
        <div css={grid}>
          <AdminMenu>
            <NavLink to="/admin/abouttext">About Text</NavLink>
          </AdminMenu>
          {
            loading ? <Loading />
              : <AdminForm >
                <ToastContainer />
                <h3 css={title}>Edit About Text</h3>
                <TextField css={aboutTextField}
                  required
                  id="about-Text"
                  variant="filled"
                  label="About Text"
                  multiline
                  fullWidth
                  rowsMax={20}
                  color="primary"
                  onChange={handleChange}
                  helperText="HTML is supported"
                  placeholder="Enter some words about yourself..."
                  value={text} />
                <Button css={saveButton} variant="contained" color="primary" onClick={() => { updateAboutText() }}>Save</Button>
              </AdminForm>
          }
        </div>
      </Page>
    </React.Fragment>
  );
}
export default AdminAboutText;