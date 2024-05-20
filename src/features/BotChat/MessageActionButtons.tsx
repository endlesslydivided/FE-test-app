import { ActionIcon } from '@mantine/core';
import type { PropsWithChildren } from 'react';

interface IMessageActionButtonProps extends PropsWithChildren {
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

const MessageActionButton = ({ children, onClick }: IMessageActionButtonProps) =>
  <ActionIcon variant='transparent' color='#787C84' onClick={onClick}>{children}</ActionIcon>;

export default MessageActionButton;
