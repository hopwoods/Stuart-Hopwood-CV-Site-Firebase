import { mergeStyleSets } from "@fluentui/merge-styles"

export const classes = mergeStyleSets({
  manageSkills: {
    gridColumn: '2 / span 1',
    gridRow: '1 / span 1',
    justifySelf: 'stretch',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto auto auto',
    gridGap: '0em',
    height: 'fit - content',
    alignItems: 'start',
  },
  title: {
    gridColumn: '1 / span 1',
    gridRow: '1 / span 1',
    justifySelf: 'stretch'
  },
  saveButton: {
    display: 'block',
    margin: '1rem',
    marginLeft: 0
  },
})

