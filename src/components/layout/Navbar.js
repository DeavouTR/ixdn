import { Link as RouterLink } from "react-router-dom";
import { Avatar as ChakraAvatar } from "@chakra-ui/react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,

  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Img,
  Center,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { useLogout } from '../../hooks/auth';
import { DASHBOARD, HOME, USERS, LOGIN,PROTECTED,PROFILE } from '../../lib/routes';
import Img2  from "../../assets/INFINITE X DOMAIN Logo.png";
import { useEffect } from "react";
import { useAuth } from "../../hooks/auth";

import { Outlet, useLocation, useNavigate } from "react-router-dom";
export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const { logout,} = useLogout();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, isLoading,overrideAvatar = null } = useAuth();

  


  useEffect(() => {
    if (!isLoading && pathname.startsWith("/protected") && !user) {
      navigate(LOGIN);
    }
  }, [pathname, user, isLoading]);

  if (isLoading) return "Loading auth user...";


  return (
    <Box
    bgColor={"black"}
    color={"white"}
    
    >
      <Flex
       bgColor={"grey"}
        color={"white"}
        minH={'60px'}
        py={{ base: 2 }}
        pos={"fixed"}
        zIndex={2}
        shadow={"lg"}
        opacity={"0.9"}
        w={"full"}
       
        px={{ base: 30 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={"grey"}
        align={'center'}>
              
        <Flex
          flex={{ base: 2, md: 'auto' }}
          ml={{ base: -3 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
              <Link  as={RouterLink} to={HOME} fontWeight="bold">
          <img src= {Img2}  width={100} height={50} alt="pic" align="center"></img>
        </Link>
        <Flex flex={{ base: 1}} justify={{ base: 'center', md: 'start' }}>
       

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'center'}
          direction={'row'}
          spacing={2}
         >

 <ChakraAvatar size={"sm"}
        colorScheme="blue"
       
        src={overrideAvatar || user.avatar}
        as={RouterLink} 
        to={`${PROTECTED}/profile/${user.id}`} fontWeight="bold"
        
     />
   





<Link  as={RouterLink}onClick={logout}  fontWeight="bold">
<Text fontSize={'sm'}> Logout</Text>
        </Link>
        </Stack>
      </Flex>
 
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = "white";
  const linkHoverColor = "black";
  const popoverContentBgColor = "black";

  return (
    <Stack  direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                paddingTop={20}
                href={navItem.href ?? '#'}
                fontSize={'lg'}
                fontWeight={500}
                
                color={linkColor}
                pt="500"
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
               opacity={"0.1"}
                boxShadow={'xl'}
                bg={"grey"}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                
                <Stack color={"black"}>
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
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}

      p={2}
      rounded={'md'}
      _hover={{ bg:"black" }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'white' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
       
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'grey'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('grey', 'gray.800')}
      p={4}
      pt={20}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={"white"}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={20}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'NETWORK',
    children: [
      {
        label: 'ARTIST & BUSINESSES',
        subLabel: ' Take Advantage Of IXDN Services, Or Hire Artist, Businesses, And Or Staff For Your Next Event!',
        href: "/protected/users"
      },
      {
        label: 'JOBS & EVENTS',
        subLabel: 'List Or Accept Upcoming GiGs. Promote Your Upcoming Events And Business Oportunities.',
        href: "/protected/dashboard"
      },
    ],
  },
  {
    label: 'MEMBERSHIP',
    children: [
      {
        label: 'IXDN ID CARD',
        subLabel: 'Your Proof Of Association To IXDN',
        href: '#',
      },
      {
        label: 'IXDN Account',
        subLabel: 'Account And Membership Status',
        href: '#',
      },
    ],
  },
  {
    label: 'MESSENGER HUB',
    children: [
      {
        label: 'IXDN CHAT',
        subLabel: 'Chat With The Members Of the IXDN Community',
        href: '#',
      },
      {
        label: 'CONTACT & SUPPORT',
        subLabel: 'App Support, Web Support, And Chat Support',
        href: '#',
      },
    ],
  },
  

];