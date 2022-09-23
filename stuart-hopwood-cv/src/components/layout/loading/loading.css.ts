import { mergeStyleSets } from "@fluentui/merge-styles"

export const classes = mergeStyleSets({
  loading: {
    gridArea: 'content',
    display: 'grid',
    gridTemplateColumns: 'auto',
    gridTemplateRows: 'auto',
    gridGap: '0em',
    minHeight: '45.5vh',
    justifySelf: 'center',

    '@media(max-width: 2560px)': {
      fontSize: '70vw'
    },
    '@media(max-width: 1920px)': {
      fontSize: '70vw'
    },
    '@media(max-width: 1366px)': {
      fontSize: '60vw'

    },
    '@media(max-width: 1024px)': {
      fontSize: '97vw'
    },
    '@media(max-width: 768px)': {
      fontSize: '97vw'
    },
    '@media(max-width: 480px)': {
      fontSize: '97vw'
    },
    '@media(max-width: 425px)': {
      fontSize: '97vw'
    }
  }
})