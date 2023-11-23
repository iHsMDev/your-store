import ProfileContainer from "@/Components/Profile/ProfileContainer";
import { AuthConfig } from "@/lib/Auth";
import { getServerSession } from "next-auth";
const ProfilePage = async () => {
  const session = await getServerSession(AuthConfig);
  const user = session?.user;
  return <ProfileContainer user={user} />;
};

export default ProfilePage;
