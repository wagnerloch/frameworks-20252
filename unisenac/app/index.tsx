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
    </View>
  );
}
