import { Collapse, Flex, Icon, Link, Stack, Text, useDisclosure } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { NavItem, NavItems } from './HeaderBar';
import useColorModeValue from '../../hooks/useColorModeValue';

export default function MobileNav() {
  const { color } = useColorModeValue();

  return (
    <Stack bg={color('white', 'gray.800')} p='4' display={{ md: 'none' }}>
      {NavItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
}

export function MobileNavItem({ label, children, href }: NavItem) {
  const { isOpen, onToggle } = useDisclosure();
  const { color } = useColorModeValue();

  return (
    <Stack spacing='4' onClick={children && onToggle}>
      <Flex
        py='2'
        as={NextLink}
        href={href ?? '#'}
        justify='space-between'
        align='center'
        _hover={{
          textDecoration: 'none'
        }}
      >
        <Text fontWeight='bold' color={color('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && <Icon as={ChevronDownIcon} transition='all .25s ease-in-out' transform={isOpen ? 'rotate(180deg)' : ''} w='6' h='6' />}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack mt='2' pl='4' borderLeft='1' borderStyle='solid' borderColor={color('gray.200', 'gray.700')} align='start'>
          {children &&
            children.map((child) => (
              <Link key={child.label} py='2' href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
}
