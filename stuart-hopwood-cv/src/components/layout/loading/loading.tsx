/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { useState } from "react";

export const Loading: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Backdrop className="loading" open={open} onClick={handleClose}>
      <CircularProgress color="primary" />
    </Backdrop>
  );
};
