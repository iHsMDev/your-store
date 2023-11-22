import Profile from "@/Components/Profile/Profile";
import SideBar from "@/Components/Profile/SideBar";
import Reviews from "@/Components/Reviews/Reviews";
import { AuthConfig } from "@/lib/Auth";
import { getServerSession } from "next-auth";
import styles from "./page.module.css";
import ProfileContainer from "@/Components/Profile/ProfileContainer";
const ProfilePage = async () => {
  const session = await getServerSession(AuthConfig);
  const user = session?.user;

  return (
    <ProfileContainer user={user} />
  );
};

export default ProfilePage;
