import { connectToDB } from "@/utils/Database";
import User from "@/utils/Models/Users";
import {
  Account,
  NextAuthOptions,
  User as NextAuthUser,
  Profile,
} from "next-auth";
import GoogleProvider from "next-auth/providers/google";

type SignInParams = {
  user: NextAuthUser | null;
  account: Account | null;
  profile?: Profile;
  email?: { verificationRequest?: boolean };
  credentials?: Record<string, any>;
};
export const AuthConfig: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }: SignInParams) {
      await connectToDB();

      const userFind = await User.findOne({ email: user?.email });
      if (userFind?.image !== user?.image) {
        await User.findOneAndUpdate(
          { email: user?.email },
          { image: user?.image }
        );
      }
      if (userFind?.name !== user?.name) {
        await User.findOneAndUpdate(
          { email: user?.email },
          { name: user?.name }
        );
      }
      if (!userFind) {
        await new User({
          email: user?.email,
          name: user?.name,
          image: user?.image,
          platform: account?.provider,
        }).save();
      }
      return true;
    },
  },
};
