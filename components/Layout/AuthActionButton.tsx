import React, { ReactElement } from 'react';
import useColorModeValue from '../../hooks/useColorModeValue';
import { useSession } from 'next-auth/react';
import { Button } from '@chakra-ui/react';

export interface AuthButtonProps {
  signInAction: () => void;
  signOutAction: () => void;
}

interface ActionButtonProps {
  text: string;
  action: () => void;
}

function ActionButton({ text, action }: ActionButtonProps): ReactElement {
  const { color } = useColorModeValue();

  return (
    <Button
      display={{ base: 'none', md: 'inline-flex' }}
      color={color('white', 'black')}
      bg={color('gray.700', 'gray.300')}
      _hover={{
        bg: color('gray.600', 'gray.200')
      }}
      onClick={action}
    >
      {text}
    </Button>
  );
}

export default function AuthActionButton({ signInAction, signOutAction }: AuthButtonProps): ReactElement {
  const { status } = useSession();

  switch (status) {
    case 'authenticated':
      return <ActionButton text='Sign Out' action={signOutAction} />;
    case 'unauthenticated':
      return <ActionButton text='Sign In' action={signInAction} />;
    default:
      return <ActionButton text='Loading...' action={() => {}} />;
  }
}
