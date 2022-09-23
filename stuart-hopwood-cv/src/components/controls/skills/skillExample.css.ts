import { mergeStyleSets } from "@fluentui/merge-styles"
import { theme } from "../../../Hooks/useTheme"


export const classes = mergeStyleSets({
  skillExample: {
    paddingLeft: '0.6rem',
    borderLeft: `3px solid ${theme.hotpink}`,

    ':hover': {
      color: theme.Grey12
    }
  }
})