import { Modal } from '@mantine/core';
import { ReactElement } from 'react';
import { IconX } from '@tabler/icons-react';

import { Form } from './Form';
import { IFormProps } from './model';

interface IModalFormProps<T, > extends IFormProps<T>{
  opened: boolean,
  close: () => void,
  title: string,
}

export const ModalForm = <T, >(props: IModalFormProps<T>): ReactElement => {

  const { title, opened, close, children, formManager, submitLabel, customButtons } = props;
  
  return (
    <Modal styles={{
        title: {
          fontWeight: 'bold',
          fontSize: '22px',
        },
      }} 
      closeButtonProps={{ icon: <IconX strokeWidth='4px' color='#787C84'/> }} 
      centered 
      size='1020px' 
      opened={opened} 
      onClose={close} 
      title={title}>
      <Form<T>
        customButtons={customButtons}
        submitLabel={submitLabel}
        formManager={formManager}
      >
        {children}
      </Form>
    </Modal>
  );
};

