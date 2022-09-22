import { mergeStyleSets } from "@fluentui/merge-styles";
import { materialTheme } from "../../../style";

export const classes = mergeStyleSets({
    badge: {
        background: 'linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)',
        placeSelf: 'stretch stretch',
        display: 'flex',
        placeItems: 'center',
        placeContent: 'center',
        textAlign: 'center',
        color: materialTheme.palette.text.primary,
        borderRadius: '10px'

    }
})