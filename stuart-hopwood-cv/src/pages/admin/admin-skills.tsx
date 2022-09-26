import React, { Suspense, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { useSkillsStore } from '../../state'
import { classes } from './admin-skills.css'
import { gridClasses } from './administration.css'

const SkillsTable = React.lazy(() => import('../../components/controls/skills/skillsTable'))
const AddSkillButton = React.lazy(() => import('../../components/controls/buttons/addSkillButton'))
const AdminMenu = React.lazy(() => import('../../components/layout/admin/administration-menu'))
const EditSkillDialog = React.lazy(() => import('../../components/layout/admin/skills/editSkillDialog'))
const AddSkillDialog = React.lazy(() => import('../../components/layout/admin/skills/addSkillDialog'))
const Loading = React.lazy(() => import('../../components/layout/loading/loading'))
const Page = React.lazy(() => import('../../components/layout/page/page'))

function Banner() {
	return <h1 className="inverse">Manage Skills</h1>
};

export default function AdminSkills() {

	const { skills, loading, getSkillsFromDb } = useSkillsStore()

	useEffect(() => {
		getSkillsFromDb()
	}, [])

	return <Suspense>
		<Page id="Manage Skills" fullscreen={false} bannerContent={<Banner />}>
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
	</Suspense>
}