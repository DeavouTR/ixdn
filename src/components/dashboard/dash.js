import { IDCARD, LOGIN } from "../../lib/routes";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import Navbar from "../../components/layout/Navbar";
import { Box, Flex,Text, Heading, Img, Link } from "@chakra-ui/react";
import User from "../users/User";
import { SimpleGrid } from "@chakra-ui/react";
import { useUsers } from "../../hooks/users";
import { Button,} from "@chakra-ui/react";
import { Code, HStack } from "@chakra-ui/react";
import { USERS } from "../../lib/routes";
import { DASHBOARD } from "../../lib/routes";
import { PROTECTED,} from "../../lib/routes";
import { LANDING } from "../../lib/routes";
import { Link as RouterLink } from "react-router-dom";
import Img2 from '../../assets/12.jpeg'
import BackgroundVideo from "../../assets/backgroundvideo";
import vid12 from "../../assets/video-2.mp4"
export default function Layout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();

  const { users,} = useUsers();
  


  useEffect(() => {
    if (!isLoading && pathname.startsWith("/protected") && !user) {
      navigate(LOGIN);
    }
  }, [pathname, user, isLoading]);

  if (isLoading) return "Loading auth user...";

  return (
    <>

      <SimpleGrid maxW="1440px" justify="space-between" Img={Img2} back mx="auto" po  columns={[1, 1, 2]} spacing={[2, 2]}  py="5">


        <Button 
        h="200"
bgImage={Img2}
        colorScheme="twitter"
    w={"full"}
        as={RouterLink} 
        to={USERS} fontWeight="bold"
      >
       <text align="center">
       <Heading size="lg" >ARTIST &  BUSINESSES</Heading>
       <p>........................................ </p>
       <h1 pos="center" size="md">Artist Of All Genre</h1>
        <h2 size="sm">Buisness Services And or Staff</h2>
        <p> Ready To Be Booked For Your Next Event.</p>
        <p>........................................ </p>
        <p> Artist,Business Services,Staff, NETWORK</p>
        
        
        
        
        </text>
      </Button>
      <Button  h="200"
bg="black"
        colorScheme="blue"
        w="full"
        as={RouterLink} 
        to={DASHBOARD} fontWeight="bold"
      >
      <text align="center">
       <Heading size="lg" >JOB & EVENT BOARD</Heading>
       <p>........................................ </p>
       <h1 pos="center" size="md">Artist Of All Genre</h1>
        <h2 size="sm">Post Jobs And Gigs </h2>
        <p> Promote Your Upcoming Events.</p>
        <p>........................................ </p>
        <p> Jobs,Gigs,Events,Promotion, NETWORK</p>
        
        
        
        
        </text>
      </Button>
        <Button
        colorScheme="blue"
        w="full"
        h="200"
        bg={"black"}
        as={RouterLink} 
        to={IDCARD} fontWeight="bold"
      >
       <text align="center">
       <Heading size="lg" >IXDN ID CARD</Heading>
       <p>........................................ </p>
       <h1 pos="center" size="md">Access Your ID Card</h1>
        <h2 size="sm">Proof Of Afiliation</h2>
        <p> In Network Discounts.</p>
        <p>........................................ </p>
        <p> ID Card,POA,Discounts, MEMBERSHIP</p>
        
        
        
        
        </text>
      </Button>
      <Button
        colorScheme="blue"
        w="full"
        h="200"
        bg={"black"}
        as={RouterLink} 
        to={`${PROTECTED}/profile/${user.id}`} fontWeight="bold"
      >
       <text align="center">
       <Heading size="lg" >IXDN ACCOUNT </Heading>
       <p>........................................ </p>
       <h1 pos="center" size="md">Edit Your Account Information</h1>
        <h2 size="sm">Login And Profile Information</h2>
        <p> Business Information And Billing</p>
        <p>........................................ </p>
        <p>Account,Profile,Billing, MEMBERSHIP</p>
        
        
        
        
        </text>
      </Button>

      <Button
        colorScheme="blue"
        w="full"
        h="200"
        bg={"black"}
        as={RouterLink} 
        to={`${PROTECTED}/profile/${user.id}`} fontWeight="bold"
      >
       <text align="center">
       <Heading size="lg" >MESSENGER HUB </Heading>
       <p>........................................ </p>
       <h1 pos="center" size="md">IXDN Chat</h1>
        <h2 size="sm">Chat With Other IXDN Members</h2>
        <p> Direct Link To All In Network Businesses</p>
        <p>........................................ </p>
        <p>Chat,Community,Interact, MESSENGER</p>
        
        
        
        
        </text>
      </Button>
     
      <Button
        colorScheme="blue"
        w="full"
        h="200"
        bg={"black"}
        as={RouterLink} 
        to={`${PROTECTED}/profile/${user.id}`} fontWeight="bold"
      >
       <text align="center">
       <Heading size="lg" >CONTACT & SUPPORT </Heading>
       <p>........................................ </p>
       <h1 pos="center" size="md">Contact & Support Information</h1>
        <h2 size="sm">Phone, Email, And Chat</h2>
        <p> Web Support, Consumer Relations, And App Support</p>
        <p>........................................ </p>
        <p>Web,App,IXDN Support,Contact MESSENGER</p>
        
        
        
        
        </text>
      </Button>
    
      
    </SimpleGrid>

    </>
  );
}
