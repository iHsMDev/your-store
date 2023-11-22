"use client";

import { getCartLength, getTotal } from "@/Server/Actions";
import { useEffect, useState } from "react";
import Cart from "./Cart";
import LastVisited from "./LastVisited";
import styles from "./Profile.module.css";
const SideBar = ({ email }: { email: string }) => {
  const [length, setLength] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const Length = async () => {
      setLength(await getCartLength(email));
      setTotal(await getTotal(email));
    };
    Length();
  }, [email]);

  return (
    <div className={styles.sidebarContainer}>
      <LastVisited />
      <Cart length={length} total={total} />
    </div>
  );
};

export default SideBar;
