import { Backdrop, CircularProgress } from "@mui/material"
import { useState } from "react"
import { classes } from "./loading.css"

export function Loading({ loading }: { loading?: boolean }) {
  const [open, setOpen] = useState(loading ? true : false)

  return (
    <Backdrop className={classes.loading} open={open}>
      <CircularProgress color="primary" />
    </Backdrop>
  )
}
