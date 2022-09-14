/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { FontFamilies, mediaQueries } from "../../../style";
import { useTheme } from "../../../Hooks";

const themeColors = useTheme();

const fadeIn = keyframes`
  0% {opacity:0;}
  100% {opacity:1;}  
`;

const growDown = keyframes`
  0% {
      transform: scaleY(0)
  }
  80% {
      transform: scaleY(1.1)
  }
  100% {
      transform: scaleY(1)
  }
`;

export const style = css`
    grid-area: nav;
    background-color: ${themeColors.darkShades};
    color: ${themeColors.white};
    padding: 0.3em;
    height: fit-content;
    font-size: 1.2em;
    text-transform: uppercase;
    border-bottom: 0.3em solid ${themeColors.Grey3};
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    z-index: 999;

    &.scrolled {
      position: sticky;
      top: 0;
      left: 0;
      animation: ${growDown} 300ms ease-in-out;
      animation: ${fadeIn} 300ms ease-in-out;
      box-shadow: 0 0 7px rgba(0,0,0,0.65);
    }

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: grid;
      grid-gap: 0em;
      align-items: center;
      justify-self: center;
    }

    ul li {
      grid-column-start: 1 / span 1;
      margin: 0.3em;
      display: inline-block;
    }
  
    ul li label {
    text-decoration: none;
    text-transform: uppercase;
    font-family: ${FontFamilies.secondary}
    font-weight: 400;
    display: inline-block;
    margin-right: 0.4em;
    }

    @media ${mediaQueries.xxlarge} {
      font-size: 1.2em;
      ul {
        grid-template-columns: repeat(7, auto);
        grid-template-rows: minmax(50px, 1fr);
        justify-items: center;
      }

      ul li {
        grid-column-start: span 1;
      }
    }
    
    @media ${mediaQueries.xlarge} {
      font-size: 1.2em;
      ul {
        grid-template-columns: repeat(7, auto);
        grid-template-rows: minmax(50px, 1fr);
        justify-items: center;
      }

      ul li {
        grid-column-start: span 1;
      }
    }

    
    @media ${mediaQueries.large} {
      font-size: 1.2em;
      ul {
        grid-template-columns: repeat(7, auto);
        grid-template-rows: minmax(50px, 1fr);        
        justify-items: center;
      }

      ul li {
        grid-column-start: span 1;
      }
    }

    
    @media ${mediaQueries.medium} {
      font-size: 1.2em;
      ul {
        grid-template-columns: repeat(7, auto);
        grid-template-rows: minmax(50px, 1fr);
        justify-items: center;
      }

      ul li {
        grid-column-start: span 1;
      }
    }

    @media ${mediaQueries.small} {
      font-size: 1.2em;
      ul {
        grid-template-columns: minmax(65px, 1fr);
        grid-template-rows: minmax(50px, 1fr);
      }

      ul li {
        grid-column-start: span 1;
      }
    }
  `;
