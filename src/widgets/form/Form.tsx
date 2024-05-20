import { Button, Group } from '@mantine/core';

import { IFormProps } from './model';

export const Form = <T, >(props: IFormProps<T>): JSX.Element => {
  const {
    children,
    formManager,
    customButtons,
    submitLabel,
  } = props;

  const handleOnClick = () => {
    formManager.form.validate();
    if (formManager.isValid) {
      formManager.handleFormSubmit(formManager.form.values);
    }
  };

  const Buttons = (<Group align='flex-end' mt={20} >
    <Button
      data-testid='form-save-btn'
      loading={formManager.isLoading}
      disabled={!formManager.isDirty || formManager.isLoading || formManager.isSubmitted}
      onClick={handleOnClick}
      h={36}
    >
      {submitLabel || 'Save'}
    </Button>
  </Group>);

  return (
    <form
      onSubmit={formManager.form.onSubmit(
        values => formManager.handleFormSubmit(values),
        validationErrors => {
          formManager.onValidationFailed ? formManager.onValidationFailed(validationErrors) : null;
        })
      }
    >
      {children}
      {
        customButtons || Buttons
      }
    </form>
  );
};
