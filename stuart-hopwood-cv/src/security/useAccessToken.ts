import { useGlobalStore } from "../state";

export function useAccessToken(): string {
  const { accessToken } = useGlobalStore();
  return accessToken;
};
