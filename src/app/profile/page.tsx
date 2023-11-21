import Profile from "@/Components/Profile/Profile";
import SideBar from "@/Components/Profile/SideBar";
import { AuthConfig } from "@/lib/Auth";
import { getServerSession } from "next-auth";
import styles from "./page.module.css";
const ProfilePage = async () => {
  const session = await getServerSession(AuthConfig);

  return (
    <main className={styles.container}>
      <Profile />
      <SideBar email={session?.user?.email as string} />
    </main>
  );
};

export default ProfilePage;
