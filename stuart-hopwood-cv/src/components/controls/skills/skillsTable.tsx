
import { DataGrid, GridCellParams, GridColDef, GridValueFormatterParams } from '@mui/x-data-grid'
import React, { Suspense } from 'react'
import { useSkillsStore } from '../../../state'
import { SkillExampleProps, SkillProps } from '../../../types'
import { classes } from './skillsTable.css'

const EditSkillButton = React.lazy(() => import('../buttons/editSkillButton'))
const DeleteButton = React.lazy(() => import('../buttons/deleteButton'))

type SkillsTableProps = {
	rows: SkillProps[]
}

export default function SkillsTable({ rows }: SkillsTableProps) {
	const { deleteSkill } = useSkillsStore()

	const onClickHandler = (id: string) => {
		deleteSkill(id)
	}

	const columns: GridColDef[] = [
		{ field: 'id', hide: true },
		{
			field: 'skillName',
			headerName: 'Skill Name',
			type: 'string',
			flex: 0.35,
			editable: false,
		},
		{
			field: 'percentage',
			headerName: '%',
			headerAlign: 'center',
			flex: 0.19,
			editable: false,
			valueFormatter: (params: GridValueFormatterParams) => {
				const valueFormatted = Number(
					(params.value as number),
				).toLocaleString()
				return `${valueFormatted} %`
			},
			valueParser: (value: unknown) => Number(value),
			align: 'center'
		},
		{
			field: 'skillExamples',
			headerName: 'Examples',
			type: 'string',
			flex: 1,
			editable: false,
			renderCell: (params: GridCellParams) => {
				return (
					<div>
						{
							params.row?.skillExamples?.map(function (example: SkillExampleProps, idx: number) {
								return <span key={idx} className={classes.cellExample}>{example.text}</span>
							})
						}
					</div>
				)
			},
			sortable: false
		},
		{
			field: '',
			headerName: '',
			type: 'string',
			flex: 0.15,
			editable: false,
			renderCell: (params: GridCellParams) => {
				return <Suspense>
					<EditSkillButton
						id={params.row?.id}
						skillName={params.row?.skillName}
						percentage={params.row?.percentage}
						skillExamples={params.row?.skillExamples}
						color="primary"
						size="small" />
					<DeleteButton onClickHandler={() => onClickHandler(params.row?.id)} color="primary" size="small" />
				</Suspense>
			},
			sortable: false,
			align: 'center'
		}
	]

	return <div id="skills" className={classes.skillsTable}>
		<DataGrid rows={rows} rowHeight={100} columns={columns} autoHeight pageSize={10} disableColumnMenu />
	</div>

}