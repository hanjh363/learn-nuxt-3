import { useAuthUser } from './useAuthUser';
import { getUser } from './usersData';
import type { UserWithoutPassword } from '~/types/user';

export const useAuth = () => {
  // const { authUser } = useAuthUser();
  const authUser = useAuthUser();

  const signIn = (email: string, password: string) => {
    const user = getUser(email, password);

    if (!user)
      throw createError({
        statusCode: 401,
        message: 'Invalid email or password',
      });

    setUser(user);
  };

  const setUser = (user: Maybe<UserWithoutPassword>) => (authUser.value = user);

  const signOut = () => setUser(null);

  return {
    signIn,
    signOut,
  };
};
