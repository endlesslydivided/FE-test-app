import { UseFormReturnType } from '@mantine/form';
import { FormErrors, FormValidateInput } from '@mantine/form/lib/types';
import { ReactElement } from 'react';

export interface IFormProps<T> {
  formManager: IUseFormManageResponse<T>,
  children: ReactElement | ReactElement[],
  customButtons?: ReactElement | ReactElement[] | null,
  submitLabel?: string,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TFormSubmitFn = (values: any, setIsLoading: CallableFunction) => void;

export interface IUseFormManagerProps<T> {
  initialValues: T | Partial<T>,
  onSubmit: TFormSubmitFn,
  onValidationFailed?: (errors: T) => void,
  validate?: FormValidateInput<T> | undefined,
}

export interface IUseFormManageResponse<T> {
  onValidationFailed: (values: FormErrors) => void,
  form: UseFormReturnType<T, (values: T) => T>,
  reset: () => void,
  isDirty: boolean,
  isValid: boolean,
  isTouched: boolean,
  isSubmitted: boolean,
  isLoading: boolean,
  handleFormSubmit: (values: Partial<T>) => void,
}
