import { mergeStyleSets } from "@fluentui/merge-styles";

export const classes = mergeStyleSets({
  main: {

    gridColumn: '1 / span 2',
  },
  toTopButton: {
    gridColumn: '1/span 2',
    justifySelf: 'center'
  },
  subTitle: {
    fontSize: '2.4rem'
  }
});