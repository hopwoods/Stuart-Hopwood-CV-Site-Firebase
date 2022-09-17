import { useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { SkillsTable } from "../../components/controls";
import { AddSkillButton } from "../../components/controls/buttons/addSkillButton";
import { AdminMenu, EditSkillDialog, Loading, Page } from "../../components/layout";
import { AddSkillDialog } from "../../components/layout/about/addSkillDialog";
import { useSkillsStore } from "../../state";
import { classes } from "./admin-skills.css";
import { gridClasses } from "./administration.css";

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
      <div className={gridClasses.grid}>
        <AdminMenu />
        {
          loading ? <Loading />
            :
            <div className={classes.manageSkills}>
              <h3 className={classes.title}>Manage Skills</h3>
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