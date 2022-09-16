import { mergeStyleSets } from "@fluentui/merge-styles";

export const classes = mergeStyleSets({
    textInput: {
        width: '85%'
    },
    deleteButton: {
        display: 'inline-block',
        position: 'relative',
        top: '1.5rem'
    }
});
