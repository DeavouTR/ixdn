import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./lib/routes";
import Img from '../src/assets/INFINITE X DOMAIN Logo.png'
import Img2 from "./assets/12.jpeg"
import BackgroundVideo from "./assets/backgroundvideo";
const theme = extendTheme({

BackgroundVideo,
  styles: {
    global: () => ({
      body: {
      
     bg:"black"
        
      }
    })
  }
});

export default function App() 
{
  return ( 
    <ChakraProvider theme={theme}>
   
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}
