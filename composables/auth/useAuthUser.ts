import type { UserWithoutPassword } from '~/types/user';

// const authUser = ref<Maybe<UserWithoutPassword> | null>(null);

export const useAuthUser = () =>
  useState<Maybe<UserWithoutPassword>>('user', () => null);

// export const useAuthUser = () => {
//   const isAuthenticated = computed(() => !!authUser.value);
//   const isAdmin = computed(() => !!authUser.value?.roles.includes('ADMIN'));
//   // const isUser = computed(() => !!authUser.value?.roles.includes('USER'));

//   return {
//     authUser,
//     isAuthenticated,
//     isAdmin,
//   };
// };
