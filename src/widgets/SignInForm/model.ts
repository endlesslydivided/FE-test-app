import { UseFormReturnType } from '@mantine/form';

export interface ISignInData {
  email: string,
  password: string,
}

export type TFormReturnType = UseFormReturnType<ISignInData, (values: ISignInData) => ISignInData>;

