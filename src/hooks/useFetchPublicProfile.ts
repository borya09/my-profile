import { useEffect, useState } from "react";
import macFetcher from "../services/macFetcher";
import { PublicProfile } from "../models/PublicProfile";

export default function useFetchPublicProfile() {
  const [publicProfile, setPublicProfile] = useState<
    PublicProfile | undefined
  >();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null | undefined>();

  const fetchPublicProfile = async () => {
    setLoading(true);
    try {
      const profile = await macFetcher();
      setPublicProfile(profile);
      setError(null);
    } catch (error) {
      console.error(error);
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPublicProfile();
  }, []);

  return {
    publicProfile,
    loading,
    error,
  };
}
