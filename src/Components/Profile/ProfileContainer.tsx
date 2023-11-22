"use client";
import { average } from "color.js";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Reviews from "../Reviews/Reviews";
import Profile from "./Profile";
import styles from "./Profile.module.css";
import SideBar from "./SideBar";
const ProfileContainer = ({ user }: { user: any }) => {
  const userSession = useSession().data?.user;
  const [color, setColor] = useState("");
  useEffect(() => {
    const color = async () => {
      const fac = await average(user?.image as string);
      setColor(`rgb(${fac[0]}, ${fac[1]}, ${fac[2]})`);
    };
    color();
  }, [user?.image]);
  return (
    <main
      className={styles.container}
      style={{ "--clr-brand": color } as React.CSSProperties}
    >
      <Profile user={user} />
      <div className={styles.ProfileData}>
        {userSession?.email == user.email && <SideBar email={user?.email} />}
        <Reviews
          email={user?.email as string}
          image={user?.image as string}
          name={user?.name as string}
        />
      </div>
    </main>
  );
};

export default ProfileContainer;
