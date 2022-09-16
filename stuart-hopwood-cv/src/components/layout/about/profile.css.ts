import { mergeStyleSets } from "@fluentui/merge-styles"
import { materialTheme } from "../../../style"
import { FontFamilies } from "../../typeography/font-families"
export const classes = mergeStyleSets({
  profile: {
    fontFamily: FontFamilies.primary,
    gridColumn: '1 / span 1',
    padding: '1em',
    display: 'grid',
    gridTemplateColumns: '30vw',
    gridTemplateRows: 'auto',
    gridGap: '0.4em',
    height: 'fit-content',
    width: 'fit-content',
    justifySelf: 'center',
    justifyItems: 'center',
  }
})