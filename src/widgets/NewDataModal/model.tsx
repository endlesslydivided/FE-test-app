import { UseFormReturnType } from '@mantine/form';

export interface INewDataEntry {
  name: string,
  type: string,
  companies: string,
  description: string,
  scope: string,
  expert: string[],
}

export type TFormReturnType = UseFormReturnType<INewDataEntry, (values: INewDataEntry) => INewDataEntry>;

export interface INewDataModalProps {
  opened: boolean,
  close: () => void,
}

export interface IFormProps {
  form: TFormReturnType,
}
