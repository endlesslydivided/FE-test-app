import { usersJSON } from '../../shared';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useAuthorization = () => {
  console.log(usersJSON);

  return usersJSON;
};
