import CustomHeader from "../../components/header";
import {
  Button,
  ButtonText,
  Input,
  InputField,
  SafeAreaView,
  ScrollView,
  VStack,
  Text,
} from "@gluestack-ui/themed";
import { Link } from "expo-router";

export default function ForgotPasswordScreen() {
  return (
    <SafeAreaView backgroundColor="$white" style={{ flex: 2 }}>
      <CustomHeader title="Esqueceu a senha" />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
        }}
      >
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
        <Link href="/" asChild>
          <Button
            bgColor="$green500"
            size="md"
            variant="solid"
            style={{ width: "80%" }}
          >
            <ButtonText>Enviar</ButtonText>
          </Button>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
}
