import { useColorMode } from '@chakra-ui/react';
import { useCallback } from 'react';

/**
 * Hook allowing resolving color according to the colorMode in the callbacks/JSX
 * Chakra hook useColorModeValue has similar functionality but cannot be used inside callbacks/JSX
 */
export default function useColorModeValue() {
  const { colorMode } = useColorMode();
  const color = useCallback((lightMode: string, darkMode: string) => (colorMode === 'light' ? lightMode : darkMode), [colorMode]);
  return { color };
}
