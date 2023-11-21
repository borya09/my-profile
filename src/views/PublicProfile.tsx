import React from "react";
import ProfileHeader from "../components/ProfileHeader";
import useFetchPublicProfile from "../hooks/useFetchPublicProfile";
import ProfileDescription from "../components/ProfileDescription";

export default function PublicProfile() {
  const { publicProfile, loading, error } = useFetchPublicProfile();

  if (loading) return "loading";
  if (error || !publicProfile) return "error while loading public profile";

  return (
    <>
      <ProfileHeader {...publicProfile} />
      {publicProfile.description && (
        <ProfileDescription description={publicProfile.description} />
      )}
    </>
  );
}
