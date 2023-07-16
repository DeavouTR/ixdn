import { LOGIN, IDCARDF } from "../../lib/routes";
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

  if (isLoading) return "Loading Back Of Card";

  return (
    <>
<center position="relative">  
      <Box maxW="1440px" justify="space-between"  back mx="auto" columns={[1, 1, 2]} spacing={[2, 2]} pt="10">
<Heading size="3xl" color="white">
    IXDN ID CARD
</Heading>
<Heading size="sm" color="grey"> 
(Use Your Id Card For POA To Recieve Your Discounts!)
</Heading>

       
      <Link  as={RouterLink} to={IDCARDF} fontWeight="bold">
          <img src= {user.idcardf}  width={500} height={50} alt="pic" align="center"></img>
        </Link>
      
    </Box>
    </center>
    </>
  );
}
