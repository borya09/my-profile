import { useEffect, useState } from "react";
import { PublicProfile } from "../../../models/PublicProfile";
import macFetcher from "../../../services/macFetcher";
import { useSpinner } from "../../../providers/SpinnerProvider";

export default function useFetchPublicProfile() {
  const [publicProfile, setPublicProfile] = useState<
    PublicProfile | undefined
  >();  
  const [error, setError] = useState<Error | null | undefined>();
  const { showSpinner, hideSpinner } = useSpinner();

  useEffect(() => {
    const fetchPublicProfile = async () => {
      showSpinner();
      try {
        const profile = await macFetcher();
        setPublicProfile(profile);
        setError(null);
      } catch (error) {
        console.error(error);
        setError(error as Error);
      } finally {
        hideSpinner();
      }
    };
    fetchPublicProfile();
  }, []);

  return {
    publicProfile,
    error,
  };
}
