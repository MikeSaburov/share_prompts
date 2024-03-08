import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import User from '@models/user';

import { connectToBD } from '@utils/database';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {},
  async singIn({ profile }) {
    try {
      await connectToBD();
      // 1. Проверить существует ли пользватель
      const userExists = await User.findOne({
        email: profile.email,
      });
      // 2. Если нет пользователя, создать его и сохранить в БД
      if (!userExists) {
        await User.create({
          email: profile.email,
          username: profile.name.replace(' ', '').toLowerCase(),
          image: profile.picture,
        });
      }
      return true;
    } catch (error) {
      console.log('Не удалось подключиться к БД', error);
      return false;
    }
  },
});

export { handler as GET, handler as POST };
