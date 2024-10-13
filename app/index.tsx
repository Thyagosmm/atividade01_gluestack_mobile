import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Box,
  Button,
  ButtonText,
  Input,
  InputField,
  ScrollView,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native";
import { Link } from "expo-router";

export default function LoginScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Box width="100%" alignItems="center">
          <Avatar bgColor="$amber600" size="2xl" borderRadius="$full">
            <AvatarFallbackText>Avatar de Usuário</AvatarFallbackText>
            <AvatarImage
              alt="Avatar de Usuário"
              source={require("../assets/images/avatar.png")}
            />
          </Avatar>
        </Box>
        <VStack width="80%">
          <Text color="$black" lineHeight="$xl">
            Email
          </Text>
          <Input
            variant="outline"
            size="md"
            backgroundColor="$backgroundDark100"
          >
            <InputField type="text" />
          </Input>
        </VStack>
        <VStack width="80%">
          <Text color="$black" lineHeight="$xl">
            Senha
          </Text>
          <Input
            variant="outline"
            size="md"
            backgroundColor="$backgroundDark100"
          >
            <InputField type="text" />
          </Input>
        </VStack>
        <Button
          backgroundColor="$green600"
          size="md"
          variant="solid"
          action="positive"
          style={{ width: "80%" }}
        >
          <ButtonText>Login</ButtonText>
        </Button>
        <Link href="/screens/RegisterScreen" asChild>
          <Button
            backgroundColor="$green600"
            size="md"
            variant="solid"
            action="positive"
            style={{ width: "80%" }}
          >
            <ButtonText>Cadastre-se</ButtonText>
          </Button>
        </Link>
        <Link href="/screens/ForgotPasswordScreen">
          <Text color="black">Esqueceu a senha</Text>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
}
