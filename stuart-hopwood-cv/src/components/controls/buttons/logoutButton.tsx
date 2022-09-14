import React from "react";
import { Button } from "@material-ui/core";
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

export function LogoutButton() {

  //TODO Use Firebase Auth
  //const { logout } = useAuth0();

  return (
    <Button
      className="login"
      variant="outlined"
      color="primary"
      size="large"
      endIcon={<MeetingRoomIcon />}
    //onClick={() => logout({ returnTo: window.location.origin })}
    >
      Logout
    </Button>
  );
};
