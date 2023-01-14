import React, { ReactElement } from 'react';
import { useColorMode, Button } from '@chakra-ui/react';
import { FaGlobe, FaMoon } from 'react-icons/fa';

export default function ColorModeSwitcher(): ReactElement {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      variant='base'
      size='md'
      onClick={toggleColorMode}
      leftIcon={colorMode === 'light' ? <FaMoon fontSize='md' /> : <FaGlobe fontSize='md' />}
    ></Button>
  );
}
