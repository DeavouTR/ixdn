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
import { DASHBOARD, LOGIN, HOME } from "../../lib/routes";
import { Link as RouterLink } from "react-router-dom";
import { useRegister } from "../../hooks/auth";
import { useForm } from "react-hook-form";
import {
  emailValidate,
  passwordValidate,
  usernameValidate,
} from "../../utils/form-validate"
import Img from '../../assets/INFINITE X DOMAIN Logo.png'
import Img2 from '../../assets/12.jpeg'
export default function Register() {
  const { register: signup, isLoading } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handleRegister(data) {
    signup({
      username: data.username,
      email: data.email,
      password: data.password,
      redirectTo: HOME,
    });
  }

  return (
    <Center w="100%" h="100vh" bgImg={Img2} objectFit="cover" opacity="0.8"position="center center" style={{
      
      width: 'max',
      height: 'max'
    }}>
      <Box mx="1" maxW="md"backgroundColor= 'grey' p="9" borderWidth="1px" borderRadius="lg">
        <Heading mb="4" size="lg" textAlign="center">
        <img src= {Img} alt="pic"></img>
          Register

        </Heading>

        <form onSubmit={handleSubmit(handleRegister)}>
          <FormControl isInvalid={errors.username} py="2">
            <FormLabel>Stage Name / Business Name</FormLabel>
            <Input
              placeholder="Stage Name / Business Name"
              {...register("username", usernameValidate)}
            />
            <FormErrorMessage>
              {errors.username && errors.username.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.email} py="2">
            <FormLabel>Email</FormLabel>
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
            <FormLabel>Password</FormLabel>
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
            colorScheme="blackAlpha"
            size="md"
            w="full"
            isLoading={isLoading}
            loadingText="Signing Up"
          >
            Register
          </Button>
        </form>

        <Text fontSize="xlg" align="center" mt="6">
          Already have an account?{" "}
          <Link
            as={RouterLink}
            to={LOGIN}
            color="blackAlpha.800"
            fontWeight="medium"
            textDecor="underline"
            _hover={{ background: "blackAlpha.100" }}
          >
            Log In
          </Link>{" "}
        
        </Text>
      </Box>
    </Center>
  );
}
