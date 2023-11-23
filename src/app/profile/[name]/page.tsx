import ProfileContainer from "@/Components/Profile/ProfileContainer";
import { getProfile } from "@/Server/Actions";
import { AuthConfig } from "@/lib/Auth";
import { getServerSession } from "next-auth";
import { notFound, redirect } from "next/navigation";
const page = async ({ params }: { params: { name: string } }) => {
  const profile = await getProfile(params.name.replace("%40", ""));
  const user = profile?.user;
  const message = profile?.message;

  const logged = await getServerSession(AuthConfig);
  if (!message) {
    notFound();
  }
  if (user.email === logged?.user?.email) {
    redirect("/profile");
  }

  return <ProfileContainer user={user} />;
};

export default page;
