import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text> FALA PESSOAL!!!! </Text>
      <Link href={"/config"}>IR PARA CONFIGURAÇÕES</Link>
      <Link href={{
        pathname: "/itens/[id]",
        params: {
          id: 123,
          name: "Item 123",
          description: "Descrição do Item 123"
        }
      }}>Ir para a tela do Item 123</Link>
    </View>
  );
}
