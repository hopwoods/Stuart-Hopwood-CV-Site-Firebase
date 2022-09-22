import { mergeStyleSets } from "@fluentui/merge-styles"
import { materialTheme } from "../../../style"

export const classes = mergeStyleSets({
  skillExample: {
    paddingLeft: '1rem',
    borderLeft: `4px solid ${materialTheme.palette.primary.main}`,
    color: materialTheme.palette.grey[100]
  }
})