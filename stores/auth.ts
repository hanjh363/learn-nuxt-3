import type { UserWithoutPassword } from '~/types/user';

export const useAuthStore = defineStore(
  'auth',
  () => {
    const authUser = ref<Maybe<UserWithoutPassword>>(null);

    const signIn = async (email: string, password: string) => {
      const data = await $fetch<{ user: UserWithoutPassword }>('/auth/login', {
        method: 'POST',
        body: {
          email,
          password,
        },
      });

      const { user } = data;

      if (!user)
        throw createError({
          statusCode: 401,
          message: 'Invalid email or password',
        });

      setUser(user);
    };

    const setUser = (user: Maybe<UserWithoutPassword>) =>
      (authUser.value = user);

    const signOut = async () => {
      await $fetch('/auth/logout', { method: 'POST' });
      setUser(null);
    };

    const fetchUser = async () => {
      const data = await $fetch<{ user: UserWithoutPassword }>('/auth/user', {
        headers: useRequestHeaders(['cookie']),
      });
      setUser(data.user);
    };

    return {
      user: authUser,
      isAuthenticated: computed(() => !!authUser.value),
      isAdmin: computed(() =>
        !authUser.value ? false : authUser.value.roles.includes('ADMIN'),
      ),
      signIn,
      signOut,
      fetchUser,
    };
  },
  {
    // persist: {
    //   storage: {
    //     getItem: (key: string) => localStorage.getItem(key),
    //     setItem: (key: string, value: string) =>
    //       localStorage.setItem(key, value),
    //   },
    // },
    persist: true,
  },
);
