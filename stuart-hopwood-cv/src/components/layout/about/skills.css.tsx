import { mergeStyleSets } from "@fluentui/merge-styles"

export const classes = mergeStyleSets({
  skills: {
    gridColumn: '2 / span 1',
    gridRow: '2 / span 1',
    padding: '1em',
    display: 'grid',
    gridTemplateColumns: '30vw',
    gridTemplateRows: 'auto',
    gridGap: ' 0.4em',
    height: 'fit-content',
    width: 'fit-content',
    justifySelf: 'center',
    justifyItems: 'center'
  }
})

