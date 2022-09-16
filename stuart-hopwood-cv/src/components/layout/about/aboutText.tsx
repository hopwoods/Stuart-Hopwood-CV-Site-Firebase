import parse from "html-react-parser";
import { useEffect } from "react";
import { Loading } from "..";
import { useAboutTextStore } from "../../../state";
import { classes } from "./aboutText.css";

export function AboutText() {

  const { text, loading, getAboutText } = useAboutTextStore();

  useEffect(() => {
    getAboutText();
  }, [getAboutText]);

  return loading ? <Loading /> : <div className={classes.aboutText}>{parse(text)}</div>;
};
