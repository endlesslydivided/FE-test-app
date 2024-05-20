import { Button, Group } from '@mantine/core';
import { zodResolver } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { FC, useEffect } from 'react';

import { ModalForm } from '../../widgets/form/ModalForm';
import { useFormManager } from '../../widgets/form/useFormManager';
import { FormInputs } from './FormInputs';
import { INewDataEntry, INewDataModalProps } from './model';
import { newDataValidationSchema } from './validation';

export const NewDataModal: FC<INewDataModalProps> = props => {

  const { opened, close } = props;

  const validate = zodResolver(newDataValidationSchema);

  const onSubmit = (values: INewDataEntry) => {
    notifications.show({ color: 'green', message: 'Entry created successfully', title: 'Success' });
    console.log(values);
    close();
  };

  const formManager = useFormManager<INewDataEntry>({
    onSubmit,
    validate,
    initialValues: {
      name: '',
      type: '',
      companies: '',
      description: '',
      scope: '',
      expert: [],
    },
  });

  const handleOnClick = () => {
    formManager.form.validate();
    if (formManager.isValid) {
      formManager.handleFormSubmit(formManager.form.values);
    }
  };

  const customButtons = (
    <Group justify='flex-end' gap='16px'>
      <Button
        onClick={close}
        variant='default'
        fw='lighter'
        px='32px'
        py='8px'
        w='160px'>Cancel</Button>
      <Button
        onClick={handleOnClick}
        variant='light'
        color='#AEADD5'
        c='#3E4551'
        px='32px'
        py='8px'
        w='160px'>Upload</Button>
    </Group>);

  useEffect(() => {
    formManager.reset();
  }, [opened]);

  return (
    <ModalForm<INewDataEntry>
      customButtons={customButtons}
      opened={opened}
      close={close}
      formManager={formManager}
      title='New Data'>
      <FormInputs form={formManager.form} />
    </ModalForm>
  );
};
