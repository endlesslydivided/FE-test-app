import { useEffect, useState } from 'react';
import { useForm } from '@mantine/form';
import { merge } from 'lodash';
import { FormErrors } from '@mantine/form/lib/types';

import { IUseFormManagerProps, IUseFormManageResponse } from './model';

export const useFormManager = <T extends Record<string, any>>(props: IUseFormManagerProps<T>): IUseFormManageResponse<T> => {
  const { onSubmit, validate, initialValues, onValidationFailed } = props;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<T>({
    validate,
    initialValues: initialValues as T,
  });

  const resetFormState = () => {
    form.setValues(merge({} as T, initialValues));
    form.resetDirty(merge({} as T, initialValues));
  };

  const handleFormSubmit = async (values: Partial<T>) => {
    setIsSubmitted(true);
    setIsLoading(true);
    onSubmit(values, setIsLoading);
  };

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setIsSubmitted(false);
      }, 500);
    }
  }, [isLoading]);

  return {
    form,
    reset: resetFormState,
    isSubmitted,
    isLoading,
    handleFormSubmit,
    onValidationFailed: onValidationFailed as (values: FormErrors) => void,
    isDirty: form.isDirty(),
    isValid: form.isValid(),
    isTouched: form.isTouched(),
  };
};
