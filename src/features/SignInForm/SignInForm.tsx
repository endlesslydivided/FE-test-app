import { Button, PasswordInput, Stack, Text, TextInput } from '@mantine/core';
import { zodResolver } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { MAIN_PATH } from '../../app/Router';
import { Form } from '../../widgets/form/Form';
import { useFormManager } from '../../widgets/form/useFormManager';
import { useAuth } from '../../app/context';
import { signIn } from '../../entities/user/api/signIn';
import { ISignInData } from './model';
import { signInValidationSchema } from './validation';

export const SignInForm: FC = () => {

  const validate = zodResolver(signInValidationSchema);

  const { setAuth, signOut } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (values: ISignInData, setIsLoading: CallableFunction) => {
    const signInResult = signIn(values);
    setIsLoading(false);
    if (signInResult) {
      setAuth({
        user: signInResult,
        isSignedIn: true,
      });
      notifications.show({ color: 'green', message: 'You logged in successfully', title: 'Success' });
      navigate(MAIN_PATH);
    } else {
      signOut();
      notifications.show({ color: 'red', message: 'Your password or email are invalid', title: 'Error' });
    }
  };

  const formManager = useFormManager<ISignInData>({
    onSubmit,
    validate,

    initialValues: {
      email: '',
      password: '',
    },
  });

  const handleOnClick = () => {
    formManager.form.validate();
    if (formManager.isValid) {
      formManager.handleFormSubmit(formManager.form.values);
    }
  };

  const inputLabelsStyle = { fontFamily: 'Inter', color: 'white', fontWeight: 'normal', fontSize: '14px' };

  return (<Form<ISignInData>
    customButtons={<></>}
    formManager={formManager}
  >
    <Stack w='320px' ta='center' gap='40px' justify='center'>
      <Text c='white' fz='48px' ff='Inter'>Welcome</Text>
      <TextInput
        type='email'
        {...formManager.form.getInputProps('email')}
        styles={{ label: inputLabelsStyle }}
        ta='left'
        label='User' />
      <PasswordInput
        {...formManager.form.getInputProps('password')}
        styles={{ label: inputLabelsStyle }}
        ta='left'
        label='Password' />
      <Button
        color='#2D3648'
        ff='Inter'
        px='24px'
        py='16px'
        h='56px'
        loading={formManager.isLoading}
        onClick={handleOnClick}>Continue</Button>
    </Stack>
  </Form>);
};

