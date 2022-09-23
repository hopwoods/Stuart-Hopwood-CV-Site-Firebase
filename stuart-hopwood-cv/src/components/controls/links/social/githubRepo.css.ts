import { mergeStyleSets } from "@fluentui/merge-styles"
import { useTheme } from "../../../../Hooks"

const themeColors = useTheme()

export const classes = mergeStyleSets({
  githubRepoLink: {
    gridColum: '1 / span 1',
    justifySelf: 'stretch',
    display: 'grid',
    gridTemplateColumns: '1.5rem auto',
    gridTemplateRows: 'auto',
    gridGap: '0em',
    height: 'fit-content',
    alignItems: 'center',
    padding: 0,
  },
  icon: {
    fontSize: '1.3rem',
    left: '0.1rem',
    position: 'relative',
  },
  link: {
    display: 'inline-block',
    marginLeft: '0.3rem',
    fontSize: '0.8rem',
    color: themeColors.hotpink,
    textDecoration: 'none',
    paddingBottom: '5px',
    width: 'fit-content',

    ':hover': {
      //color: themeColors.Grey12
    }
  }
})