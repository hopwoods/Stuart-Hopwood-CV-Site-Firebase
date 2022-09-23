import { mergeStyleSets } from "@fluentui/merge-styles";
import { theme } from "../../../../Hooks/useTheme";

export const classes = mergeStyleSets({
    socialLink: {
        color: theme.hotpink,
    }
})