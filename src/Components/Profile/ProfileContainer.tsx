"use client";
import { AverageColor } from "@/Functions/AverageRGB";
import { useSession } from "next-auth/react";
import { createContext, useEffect, useState } from "react";
import Reviews from "../Reviews/Reviews";
import Profile from "./Profile";
import styles from "./Profile.module.css";
import SideBar from "./SideBar";
export const Load = createContext<any>(false);
const ProfileContainer = ({ user, reviews }: { user: any; reviews: any }) => {
  const userSession = useSession().data?.user;
  const [color, setColor] = useState("");
  useEffect(() => {
    const getColor = async () => {
      let rgb = await AverageColor(user?.image);

      setColor(`rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
    };
    getColor();
  }, [user?.image]);

  return (
    <main
      className={styles.container}
      style={
        {
          "--clr-profile": color,
        } as React.CSSProperties
      }
    >
      {color && (
        <>
          <Profile user={user} />
          <div className={styles.ProfileData}>
            {userSession?.email == user.email && (
              <SideBar email={user?.email} />
            )}
            <Reviews reviews={reviews} />
          </div>
        </>
      )}
    </main>
  );
};

export default ProfileContainer;
