/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import 'react-toastify/dist/ReactToastify.min.css';
import { jsx } from "@emotion/react";
import { AdminMenu, EditSkillDialog, Loading, Page } from "../../components/layout";
import { title, manageSkills } from "./admin-skills.css";
import { grid } from "./administration.css";
import { ToastContainer } from 'react-toastify';
import { useSkillsStore } from "../../state";
import { SkillsTable } from "../../components/controls";
import { AddSkillDialog } from "../../components/layout/about/addSkillDialog";
import { AddSkillButton } from "../../components/controls/buttons/addSkillButton";

//TODO: Add a new Example Button.
function Banner() {
  return (
    <h1 className="inverse">Manage Skills</h1>
  );
};

export function AdminSkills() {

  const { skills, loading, getSkills } = useSkillsStore();

  useEffect(() => {
    getSkills();
  }, [getSkills]);

  return (
    <Page id="Manage Skills" fullscreen={false} BannerContent={Banner}>
      <div css={grid}>
        <AdminMenu />
        {
          loading ? <Loading />
            :
            <div css={manageSkills}>
              <h3 css={title}>Manage Skills</h3>
              <AddSkillButton color="primary" size="medium" />
              <AddSkillDialog />
              <SkillsTable rows={skills} />
              <EditSkillDialog />
              <ToastContainer />
            </div>
        }
      </div>
    </Page>
  );
}
export default AdminSkills;