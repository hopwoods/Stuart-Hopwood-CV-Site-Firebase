/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import { jsx } from "@emotion/react";
import { Loading } from "..";
import { style } from "./aboutText.css";
import parse from "html-react-parser";
import { useAboutTextStore } from "../../../state";

export function AboutText() {

  const { text, loading, getAboutText } = useAboutTextStore();

  useEffect(() => {
    getAboutText();
  }, [getAboutText]);

  return loading ? <Loading /> : <div css={style}>{parse(text)}</div>;
};
