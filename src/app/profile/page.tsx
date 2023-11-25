import ProfileContainer from "@/Components/Profile/ProfileContainer";
import { getProfileReviews } from "@/Server/Actions";
import { AuthConfig } from "@/lib/Auth";
import { getServerSession } from "next-auth";
const ProfilePage = async () => {
  const session = await getServerSession(AuthConfig);
  const user = session?.user;
  const reviews = await getProfileReviews(user?.email as string);

  return <ProfileContainer reviews={reviews} user={user} />;
};

export default ProfilePage;
