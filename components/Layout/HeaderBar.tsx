import { Collapse, Flex, IconButton, Image, Stack, Text, useBreakpointValue, useColorMode, useDisclosure } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import { signIn, signOut } from 'next-auth/react';
import useColorModeValue from '../../hooks/useColorModeValue';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import ColorModeSwitcher from './ColorModeSwitcher';
import AuthActionButton from './AuthActionButton';

export interface NavItem {
  label: string;
  subLabel?: string;
  children?: NavItem[];
  href?: string;
}

export const NavItems: NavItem[] = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'About',
    href: '/about'
  }
];

export default function HeaderBar() {
  const router = useRouter();
  const { isOpen, onToggle } = useDisclosure();
  const { color } = useColorModeValue();
  const { colorMode } = useColorMode();

  return (
    <>
      <Flex
        backgroundColor={color('gray.200', 'gray.700')}
        color={color('gray.600', 'white')}
        minH='60px'
        py={{ base: '2' }}
        px={{ base: '4' }}
        borderBottom='1'
        align='center'
      >
        <Flex flex={{ base: '1', md: 'auto' }} ml={{ base: '-2' }} display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w='3' h='3' /> : <HamburgerIcon w='5' h='5' />}
            variant='ghost'
            aria-label='Toggle Navigation'
          />
        </Flex>
        <Flex flex={{ base: '1' }} justify={{ base: 'center', md: 'start' }}>
          <Text textAlign={useBreakpointValue({ base: 'center', md: 'left' })} fontFamily='heading' color={color('gray.800', 'white')}>
            <Image src={colorMode === 'light' ? './stackZoneText.jpg' : './stackZoneTextWhite.jpg'} alt='StackZone' />
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml='10'>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack flex={{ base: '1', md: '0' }} justify='flex-end' direction='row' spacing='6'>
          <ColorModeSwitcher />
          <AuthActionButton
            signInAction={() => signIn('cognito')}
            signOutAction={async () => {
              await signOut();
              await router.push('/logout');
            }}
          />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </>
  );
}
