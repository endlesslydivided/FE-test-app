import { ActionIcon } from '@mantine/core';
import type { FC, PropsWithChildren } from 'react';

interface IMessageActionButtonProps extends PropsWithChildren {
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

const MessageActionButton: FC<IMessageActionButtonProps> = ({ children, onClick }) =>
  <ActionIcon variant='transparent' color='#787C84' onClick={onClick}>{children}</ActionIcon>;

export default MessageActionButton;
