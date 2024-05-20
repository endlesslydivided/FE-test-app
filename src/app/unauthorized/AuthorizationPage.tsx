import { Box, Center, Image } from '@mantine/core';
import type { FC } from 'react';

import fullLogo from '../../assets/images/logo.svg';
import { SignInForm } from '../../features';

export const AuthorizationPage: FC = () => {

  return (
    <Box bg='#1B093C' h='100dvh' w='100dvw'>
      <Image src={fullLogo} h='45px' w='auto' pos='absolute' top='22px' left='36px' />
      <Center h='100%'>
        <SignInForm />
      </Center>
    </Box>
  );
};
