"use client";
import Header from "@/Components/Header/Header";
import { motion } from "framer-motion";
import styles from "./page.module.css";
const Terms = () => {
  const animaton = {
    hidden: {
      y: 25,
      opacity: 0,
    },
    show: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  return (
    <main className={styles.container}>
      <Header text="الشروط والأحكام" />
      <motion.p
        variants={animaton}
        initial="hidden"
        animate="show"
        custom={0}
        className={styles.terms}
      >
        لوريم إيبسوم هو عبارة عن نسخة مشوهة من نص دي فينيبوس بونوروم إت مالوروم،
        وهو نص للسياسي والفيلسوف الروماني شيشرون من القرن الأول قبل الميلاد، مع
        تغيير وإضافة وإزالة بعض الكلمات لجعله غير منطقي وغير صحيح باللاتينية
        ظهرت نسخ من نص لوريم إيبسوم في مجال التنضيد على الأقل منذ الستينات من
        القرن الماضي، عندما اشتهرت بالإعلانات عن أوراق التحويل من شركة لتراسات2
        تم إدخال لوريم إيبسوم إلى العالم الرقمي في منتصف الثمانينات من القرن
        الماضي، عندما استخدمته شركة ألدس في قوالب رسومية ومعالجة نصوص لبرنامجها
        للنشر المكتبي باغ ماكر. اعتمدت بعد ذلك معالجات نصوص أخرى شهيرة، بما في
        ذلك باغز و مايكروسوفت وورد، على لوريم إيبسوم1 كذلك استخدامه في العديد من
        حزم لاتك، 34 وأدوات إدارة المحتوى على الإنترنت مثل جوملا! و ووردبرس، و
        مكتبات س س س مثل سامانتك يو آى.
      </motion.p>
      <motion.p
        variants={animaton}
        initial="hidden"
        animate="show"
        custom={2}
        className={styles.terms}
      >
        لوريم إيبسوم هو عبارة عن نسخة مشوهة من نص دي فينيبوس بونوروم إت مالوروم،
        وهو نص للسياسي والفيلسوف الروماني شيشرون من القرن الأول قبل الميلاد، مع
        تغيير وإضافة وإزالة بعض الكلمات لجعله غير منطقي وغير صحيح باللاتينية
        ظهرت نسخ من نص لوريم إيبسوم في مجال التنضيد على الأقل منذ الستينات من
        القرن الماضي، عندما اشتهرت بالإعلانات عن أوراق التحويل من شركة لتراسات2
        تم إدخال لوريم إيبسوم إلى العالم الرقمي في منتصف الثمانينات من القرن
        الماضي، عندما استخدمته شركة ألدس في قوالب رسومية ومعالجة نصوص لبرنامجها
        للنشر المكتبي باغ ماكر. اعتمدت بعد ذلك معالجات نصوص أخرى شهيرة، بما في
        ذلك باغز و مايكروسوفت وورد، على لوريم إيبسوم1 كذلك استخدامه في العديد من
        حزم لاتك، 34 وأدوات إدارة المحتوى على الإنترنت مثل جوملا! و ووردبرس، و
        مكتبات س س س مثل سامانتك يو آى.
      </motion.p>
      <motion.p
        variants={animaton}
        initial="hidden"
        animate="show"
        custom={4}
        className={styles.terms}
      >
        لوريم إيبسوم هو عبارة عن نسخة مشوهة من نص دي فينيبوس بونوروم إت مالوروم،
        وهو نص للسياسي والفيلسوف الروماني شيشرون من القرن الأول قبل الميلاد، مع
        تغيير وإضافة وإزالة بعض الكلمات لجعله غير منطقي وغير صحيح باللاتينية
        ظهرت نسخ من نص لوريم إيبسوم في مجال التنضيد على الأقل منذ الستينات من
        القرن الماضي، عندما اشتهرت بالإعلانات عن أوراق التحويل من شركة لتراسات2
        تم إدخال لوريم إيبسوم إلى العالم الرقمي في منتصف الثمانينات من القرن
        الماضي، عندما استخدمته شركة ألدس في قوالب رسومية ومعالجة نصوص لبرنامجها
        للنشر المكتبي باغ ماكر. اعتمدت بعد ذلك معالجات نصوص أخرى شهيرة، بما في
        ذلك باغز و مايكروسوفت وورد، على لوريم إيبسوم1 كذلك استخدامه في العديد من
        حزم لاتك، 34 وأدوات إدارة المحتوى على الإنترنت مثل جوملا! و ووردبرس، و
        مكتبات س س س مثل سامانتك يو آى.
      </motion.p>
    </main>
  );
};

export default Terms;
