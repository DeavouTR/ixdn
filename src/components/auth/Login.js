import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import { DASHBOARD, REGISTER, HOME } from "../../lib/routes";
import { Link as RouterLink } from "react-router-dom";
import { useLogin } from "../../hooks/auth";
import { useForm } from "react-hook-form";
import { emailValidate, passwordValidate } from "../../utils/form-validate";
import Img from '../../assets/12.jpeg'
import Img2 from '../../assets/INFINITE X DOMAIN Logo.png'

export default function Login() {
  const { login, isLoading } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handleLogin(data) {
    login({
      email: data.email,
      password: data.password,
      redirectTo: HOME,
    });
  }

  return (
    
    <Center w="100%" h="100%"   opacity="0.8"style={{

      width: 'max',
      height: 'max'
    }}>
      <Box 
      
      mx="1" maxW="md"  background="Img2"  backgroundColor= "grey" opacity={"0.7"} p="9" borderWidth="1px" borderRadius="lg">
        
        <Heading mb="4" size="lg" textColor="white" textAlign="center">

					<img src= {Img2} alt="pic"></img>
          Log In
          
        </Heading>

        <form onSubmit={handleSubmit(handleLogin)}>
          <FormControl isInvalid={errors.email} py="2">
            <FormLabel textColor="white">Email</FormLabel>
            <Input
              type="email"
              placeholder="user@email.com"
              {...register("email", emailValidate)}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password} py="2">
            <FormLabel textColor={"white"}>Password</FormLabel>
            <Input
              type="password"
              placeholder="password123"
              {...register("password", passwordValidate)}
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            mt="4"
            type="submit"
            colorScheme="whiteAlpha"
            size="md"
            w="full"
            isLoading={isLoading}
            loadingText="Logging In"
          >
            Log In
          </Button>
        </form>

        <Text fontSize="xlg" textColor={"white"} align="center" mt="6">
          Don't have an account?{" "}
          <Link
            as={RouterLink}
            to={REGISTER}
            color="blackAlpha.800"
            fontWeight="medium"
            textDecor="underline"
            _hover={{ background: "blackAlpha.100" }}
            textColor={"white"}
          >
            Register
          </Link>{" "}
          here!
        </Text>
      </Box>
    </Center>
  );
}
