import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useGlobalStore } from "../../state";

export function useAccessToken(): string {

  const { getAccessTokenSilently } = useAuth0();
  const { accessToken, setAccessToken } = useGlobalStore();

  useEffect(() => {
    const fetchAccessToken = (async () => {
      const token = await getAccessTokenSilently();
      setAccessToken(token);
    });

    fetchAccessToken();

  }, [getAccessTokenSilently, setAccessToken]);

  return accessToken;
};
