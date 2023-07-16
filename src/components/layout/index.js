import { LOGIN } from "../../lib/routes";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import Navbar from "../../components/layout/Navbar";
import { Box, Flex, Img } from "@chakra-ui/react";
import BackgroundVideo from "react-background-video";
import Img2 from "../../assets/12.jpeg"

export default function Layout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && pathname.startsWith("/protected") && !user) {
      navigate(LOGIN);
    }
  }, [pathname, user, isLoading]);

  if (isLoading) return "Loading auth user...";

  return (
    <>
      <Navbar />
      <Flex 
   
      
   
      pt="16" pb="12"  w="full"bg={Img2} maxW="1440px">
        <Box w="1440px">
          <Outlet />
        </Box>
      </Flex>
    </>
  );
}
