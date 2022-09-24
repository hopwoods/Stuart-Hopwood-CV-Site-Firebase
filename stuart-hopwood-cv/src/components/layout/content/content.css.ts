import { mergeStyleSets } from "@fluentui/merge-styles"
import { useTheme } from "../../../Hooks"

const theme = useTheme()

export const classes = mergeStyleSets({
  content: {
    gridArea: 'content',
    display: 'grid',
    gridTemplateColumns: 'auto',
    gridTemplateRows: 'auto',
    gridGap: '0em',
    minHeight: '64.6vh',
    justifySelf: 'stretch',
    backgroundColor: theme.Grey1,
    fontSize: '1rem',
    color: theme.text,
    overflow: 'hidden',

    'h1,h2, h3,h4,h5,h6': {
      color: theme.brandAccentColor

    },
    'h2': {
      color: theme.Grey12
    }
  }
})
