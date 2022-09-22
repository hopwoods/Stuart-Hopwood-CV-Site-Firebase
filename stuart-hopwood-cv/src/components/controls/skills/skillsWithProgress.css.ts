import { mergeStyleSets } from "@fluentui/merge-styles"
import { useTheme } from "../../../Hooks"

const themeColors = useTheme()

export const classes = mergeStyleSets({
  skillsWithProgress: {
    gridColumn: '1 / span 1',
    justifySelf: 'stretch',
    padding: 0,
    margin: '0.3em 0'
  },
  progressCircle: {
    gridColumn: '3 / span 1',
    justifySelf: 'end',

    '.MuiCircularProgress-colorPrimary': {
      color: themeColors.hotpink
    },
    '.MuiCircularProgress-circle': {
      strokeLinecap: 'round'
    },
    '.MuiTypography-colorTextSecondary': {
      color: themeColors.text,
      fontWeight: 600
    },
  },
  progressBar: {
    gridColumn: '2 / span 1',
    justifySelf: 'start',
    paddingRight: '0',
    width: '100%',
    '.MuiLinearProgress-root': {
      height: '9px',
      borderRadius: '5px'
    },
    '.MuiLinearProgress-colorPrimary': {
      backgroundColor: themeColors.Grey5
    },
    '.MuiLinearProgress-bar': {
      borderRadius: 5,
      backgroundColor: themeColors.hotpink
    }
  },
  nameStyle: {
    gridColumn: '1 / span 1',
    justifySelf: 'start'
  },
  progressBarWrapper: {
    display: 'grid',
    gridTemplateColumns: '8em auto 3em',
    gridTemplateRows: 'auto',
    gridGap: '0em',
    height: 'fit-content',
    alignItems: 'center',
    padding: 0
  }
})