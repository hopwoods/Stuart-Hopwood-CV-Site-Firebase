import React from "react";
import { Button } from "@material-ui/core";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export function LoginButton() {

  //TODO - Use Firebase Auth
  //const { loginWithRedirect } = useAuth0();

  return (
    <Button
      className="login"
      variant="outlined"
      color="primary"
      size="large"
      endIcon={<ExitToAppIcon />}
    //onClick={() => loginWithRedirect()}
    >
      Login
    </Button>
  );
};