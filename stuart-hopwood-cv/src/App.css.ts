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
    fontSize: '1.4rem',

    '@media(max-width: 2560px)': {
      fontSize: '2.4rem'
    },
    '@media(max-width: 1920px)': {
      fontSize: '2.43rem'
    },
    '@media(max-width: 1366px)': {
      fontSize: '2.43rem'
    },
    '@media(max-width: 1024px)': {
      fontSize: '2.4rem'
    },
    '@media(max-width: 768px)': {
      fontSize: '1.4rem'
    },
    '@media(max-width: 480px)': {
      fontSize: '1.4rem'
    },
    '@media(max-width: 425px)': {
      fontSize: '1.3rem'
    },
  }
});