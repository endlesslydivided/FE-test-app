import { usersJSON } from '../../../shared';
import { ISignInData } from '../../../features/SignInForm/model';
import { IUser } from '../user.model';

export const signIn = (values: ISignInData): IUser | null => {
  console.log(usersJSON);
  const foundUser = usersJSON.find(user => user.email === values.email && user.password === values.password);

  if (foundUser) {
    return foundUser;
  }

  return null;
};
