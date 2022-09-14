/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { DataGrid, GridCellParams, GridCellValue, GridColDef, GridValueFormatterParams } from "@mui/x-data-grid";
import React from "react";
import { EditSkillButton } from "..";
import { useAccessToken, useTheme } from "../../../Hooks";
import { useSkillsStore } from "../../../state";
import { SkillExampleProps, SkillProps } from "../../../types";
import { DeleteSkillButton } from "../buttons/deleteSkillButton";

const theme = useTheme();

export const skillsTable = css`
  grid-column: 1 / span 1;
  grid-row: 2/ span 1;
  justify-self: stretch;
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
`;

export const cellExample = css`
  display: block;
  margin: 0.25em;
  margin-right: 0.5em;
  line-height: 1.5em;
  background-color: ${theme.Grey6};
  color: ${theme.text};
  border-radius: 5px;
  padding: 0.25em 0.5em 0.25em 0.5em;
`;

type SkillsTableProps = {
    rows: SkillProps[];
}

export function SkillsTable({ rows }: SkillsTableProps) {

    const accessToken = useAccessToken();
    const { deleteSkill } = useSkillsStore();
    const onClickHandler = (id: number) => {
        deleteSkill(id, accessToken);
        alert("Trigger Modal");
    }

    const columns: GridColDef[] = [
        { field: 'id', hide: true },
        {
            field: 'skillName',
            headerName: 'Skill Name',
            type: `string`,
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
                ).toLocaleString();
                return `${valueFormatted} %`;
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
                                return <span key={idx} css={cellExample}>{example.text}</span>
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
                return (
                    <React.Fragment>
                        <EditSkillButton
                            id={params.row?.id}
                            skillName={params.row?.skillName}
                            percentage={params.row?.percentage}
                            skillExamples={params.row?.skillExamples}
                            color="secondary"
                            size="small" />
                        <DeleteSkillButton onClickHandler={() => onClickHandler(params.row?.id)} color="secondary" size="small" />
                    </React.Fragment>
                )
            },
            sortable: false,
            align: 'center'
        }
    ];

    return (
        <div id="skills" css={skillsTable}>
            <DataGrid rows={rows} rowHeight={100} columns={columns} autoHeight pageSize={10} disableColumnMenu />
        </div>
    );
};



