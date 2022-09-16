import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Button } from '@mui/material';
import { useLogin } from '../../../security/useLogin';

export function LoginButton() {
  const { signIn } = useLogin()
  return (
    <>
      <Button
        id='login-button'
        className="login"
        variant="outlined"
        color="primary"
        size="large"
        endIcon={<ExitToAppIcon />}
        onClick={async () => await signIn()}
      >
        Login
      </Button>
    </>
  )
};