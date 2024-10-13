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

export default function RegisterScreen() {
  return (
    <SafeAreaView backgroundColor="$white" style={{ flex: 1 }}>
      <CustomHeader title="Cadastro" />
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
            Nome
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
        <Link href="/" asChild>
          <Button bgColor="$green600" size="md" variant="solid" width="80%">
            <ButtonText>Cadastrar</ButtonText>
          </Button>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
}
