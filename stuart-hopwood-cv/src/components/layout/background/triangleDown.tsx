/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

type Triangle = {
    color: string;
    backgroundColor: string;
}
export const TriangleDown: React.FC<Triangle> = ({ color, backgroundColor }) => {

    const style = css`
    grid-column: 1 / span 2;
    width: 0; 
    height: 0; 
    border-left: 50vw solid ${backgroundColor};
    border-right: 50vw solid ${backgroundColor};
    border-top: 30vh solid ${color};
    padding: 0;
    margin: 0;
    margin-top: 3rem;
    `;

    return (
        <div css={style}></div>
    );
};
