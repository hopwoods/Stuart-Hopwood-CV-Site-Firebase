import parse from "html-react-parser"
import { useEffect } from "react"
import { Loading } from ".."
import { useAboutTextStore } from "../../../state"
import { typography } from "../../typeography/typography.css"
import { classes } from "./aboutText.css"

export function AboutText() {

  const { text, loading, getAboutText } = useAboutTextStore()

  useEffect(() => {
    getAboutText()
  }, [getAboutText])

  return loading ? <Loading /> : <div className={`${classes.aboutText} ${typography.copy1}`}>{parse(text)}</div>
}
