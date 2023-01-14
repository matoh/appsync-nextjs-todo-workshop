import { Box, Flex, Icon, Link, Popover, PopoverContent, PopoverTrigger, Stack, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { NavItem, NavItems } from './HeaderBar';
import useColorModeValue from '../../hooks/useColorModeValue';

export function DesktopSubNav({ label, href, subLabel }: NavItem) {
  const { color } = useColorModeValue();

  return (
    <Link href={href} role='group' display='block' p='2' rounded='md' _hover={{ bg: color('pink.50', 'gray.900') }}>
      <Stack direction='row' align='center'>
        <Box>
          <Text transition='all .3s ease' _groupHover={{ color: 'gray.400' }} fontWeight='medium'>
            {label}
          </Text>
          <Text fontSize='sm'>{subLabel}</Text>
        </Box>
        <Flex
          transition='all .3s ease'
          transform='translateX(-10px)'
          opacity='0'
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify='flex-end'
          align='center'
          flex='1'
        >
          <Icon color='gray.400' w='5' h='5' as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
}

export default function DesktopNav() {
  const { color } = useColorModeValue();

  return (
    <Stack direction='row' spacing='4'>
      {NavItems.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                as={NextLink}
                p='6'
                href={navItem.href ?? '#'}
                fontSize='xl'
                fontWeight='medium'
                color={color('gray.600', 'gray.200')}
                _hover={{
                  textDecoration: 'none',
                  color: color('gray.800', 'white')
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent border='0' boxShadow='xl' bg={color('white', 'gray.800')} p='4' rounded='xl' minW='sm'>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
}
